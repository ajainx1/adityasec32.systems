"use client";

import { useEffect } from "react";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "";

interface VisitorInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  org: string;
  asn?: string;
  latitude?: number;
  longitude?: number;
}

// Global cached visitor info
let cachedVisitorInfo: VisitorInfo | null = null;

export async function getVisitorLocation(): Promise<VisitorInfo> {
  if (cachedVisitorInfo) return cachedVisitorInfo;

  // Non-blocking fetch with strict 1.5s timeout via AbortController
  const fetchWithTimeout = async (url: string, timeoutMs = 1500) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
      clearTimeout(id);
      return res;
    } catch {
      clearTimeout(id);
      return null;
    }
  };

  // Try Provider 1: ipapi.co
  try {
    const res = await fetchWithTimeout("https://ipapi.co/json/", 1200);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        cachedVisitorInfo = {
          ip: data.ip,
          city: data.city || "Unknown City",
          region: data.region || "Unknown Region",
          country: data.country_name || "Unknown Country",
          countryCode: data.country_code || "",
          org: data.org || data.asn || "Unknown Network",
          asn: data.asn,
          latitude: data.latitude,
          longitude: data.longitude
        };
        return cachedVisitorInfo;
      }
    }
  } catch {}

  // Try Provider 2: ipwho.is
  try {
    const res2 = await fetchWithTimeout("https://ipwho.is/", 1200);
    if (res2 && res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.ip) {
        cachedVisitorInfo = {
          ip: data2.ip,
          city: data2.city || "Unknown City",
          region: data2.region || "Unknown Region",
          country: data2.country || "Unknown Country",
          countryCode: data2.country_code || "",
          org: (data2.connection && data2.connection.isp) || data2.connection?.org || "Unknown ISP",
          latitude: data2.latitude,
          longitude: data2.longitude
        };
        return cachedVisitorInfo;
      }
    }
  } catch {}

  // Fallback fast
  cachedVisitorInfo = {
    ip: "Protected / Local",
    city: "Direct Access",
    region: "N/A",
    country: "Internet",
    countryCode: "IN",
    org: "Direct Client"
  };
  return cachedVisitorInfo;
}

export async function logSecurityEvent(
  eventName: string,
  eventDetails: Record<string, any> = {}
) {
  try {
    const loc = await getVisitorLocation();
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "Server";
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? "📱 Mobile Device" : "💻 Desktop Workstation";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const hostname = typeof window !== "undefined" ? window.location.hostname : "adityasec32.systems";
    const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

    const detailStrings = Object.entries(eventDetails)
      .map(([k, v]) => `• <b>${k}:</b> <code>${v}</code>`)
      .join("\n");

    const message = `🛡️ <b>[SECURITY EVENT] ${eventName}</b> 🛡️\n\n` +
      `🌐 <b>Target:</b> <code>${hostname}${pathname}</code>\n` +
      `📍 <b>Location:</b> ${loc.city}, ${loc.region}, ${loc.country} (${loc.countryCode})\n` +
      `📡 <b>Network / ISP:</b> <code>${loc.org}</code>\n` +
      `🖥️ <b>Client IP:</b> <code>${loc.ip}</code>\n` +
      `💻 <b>Hardware:</b> ${deviceType}\n` +
      `⏰ <b>IST Time:</b> ${timestamp} IST\n` +
      (detailStrings ? `\n📋 <b>Event Telemetry:</b>\n${detailStrings}\n` : "") +
      `\n🔍 <b>User-Agent:</b> <code>${userAgent.slice(0, 95)}...</code>`;

    const token = TELEGRAM_BOT_TOKEN;
    const chatId = TELEGRAM_CHAT_ID;

    if (token && chatId) {
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }).catch(() => {});
    }

    try {
      const existing = JSON.parse(localStorage.getItem("soc_visitor_telemetry") || "[]");
      existing.unshift({
        event: eventName,
        ip: loc.ip,
        location: `${loc.city}, ${loc.country}`,
        isp: loc.org,
        device: deviceType,
        path: pathname,
        time: timestamp,
        details: eventDetails
      });
      localStorage.setItem("soc_visitor_telemetry", JSON.stringify(existing.slice(0, 50)));
    } catch {}
  } catch (err) {
    console.warn("Security telemetry logger:", err);
  }
}

export default function TelegramVisitorLogger() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = window.location.pathname;
    const sessionKey = "tg_visitor_logged_" + path;
    if (sessionStorage.getItem(sessionKey)) return;

    // Run in idle time so it never delays UI rendering
    const scheduleLog = () => {
      sessionStorage.setItem(sessionKey, "true");
      logSecurityEvent("PAGE_VISIT", {
        referrer: document.referrer || "Direct / Bookmark / Search",
        resolution: `${window.innerWidth}x${window.innerHeight}`
      }).catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(scheduleLog, { timeout: 3000 });
    } else {
      setTimeout(scheduleLog, 2500);
    }
  }, []);

  return null;
}
