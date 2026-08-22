"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Terminal as TermIcon,
  Download, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Lock, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Briefcase, 
  Layers, 
  MapPin, 
  Globe, 
  Code2, 
  X, 
  FileText,
  KeyRound,
  Send,
  Sparkles,
  Menu,
  ChevronDown,
  Copy,
  Check,
  Cpu,
  Radio,
  Share2,
  Filter,
  Flame,
  ArrowUpRight,
  Phone,
  Server,
  Zap,
  Crosshair,
  FileCheck,
  Bot,
  Compass,
  Clock,
  UserCheck,
  GraduationCap,
  Plane
} from "lucide-react";
import Link from "next/link";
import TiltWrapper from "@/components/3d/TiltWrapper";
import CyberResumeButton from "@/components/CyberResumeButton";
import CharityQuizClient from "@/components/charity/CharityQuizClient";
import { ToastProvider } from "@/components/js/ToastContext";

// Interactive Terminal Command Database (Synchronized with Official Resume)
const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami      - Executive profile summary & verified impact (JSON)",
    "  skills      - 5 Core Competencies & technical toolchains",
    "  exp         - 4+ Years enterprise employment history & CNI SecOps",
    "  projects    - Key CNI defense systems & production tools",
    "  labs        - Offensive security labs & academic coursework",
    "  certs       - Active certifications & targeted roadmap",
    "  education   - Academic degrees & MBA (Cybersecurity)",
    "  recruiter   - Fast-facts, mobility, languages & availability",
    "  ecosystem   - AdityaSec + JumpStreet + CyberKarma triad",
    "  contact     - Direct contact channels & PGP fingerprint",
    "  clear       - Clear terminal output"
  ],
  whoami: [
    "aditya@secops:~$ cat whoami.json",
    "{",
    '  "name": "Aditya Jain",',
    '  "role": "Cybersecurity Engineer | Network Security & NGFW Architect",',
    '  "sub_roles": "Purple Teamer | VAPT | SIEM/EDR | DFIR",',
    '  "experience": "4+ Years Enterprise SecOps & CNI Defense",',
    '  "current_role": "Security Administrator & NGFW Architect @ Ebix / NIC (MeitY Govt. of India)",',
    '  "posting": "Patna, Bihar (On-site: NIC MeitY) | Employer HQ: Noida",',
    '  "verified_impact": {',
    '    "endpoints_secured": "750+ Government Endpoints",',
    '    "audit_reduction": "60% Reduction in Manual Audit Cycles (KACE UEM)",',
    '    "threat_detection": "+35% Elevation in True-Positive Alert Efficacy",',
    '    "cni_nodes": "38 Regional Districts & SDC Linux Rack Servers"',
    '  },',
    '  "education": "MBA (Cybersecurity) in progress · B.Tech CSE (Manipal)",',
    '  "contact": {',
    '    "phone": "+91 74005 88896",',
    '    "email": "adityasec32@gmail.com / contact@adityasec32.systems",',
    '    "linkedin": "linkedin.com/in/ajainx1",',
    '    "github": "github.com/ajainx1"',
    '  }',
    "}"
  ],
  skills: [
    "aditya@secops:~$ list-competencies --all",
    "1. NETWORK SECURITY & FIREWALLS:",
    "   • Palo Alto (Panorama, App-ID, Threat Prevention), Check Point, Fortinet",
    "   • Default-Deny Architecture, ZTNA, OSPF, TACACS+/RADIUS, Network Segmentation, Wireshark",
    "2. OFFENSIVE SECURITY & VAPT:",
    "   • Web & Infra VAPT, OWASP Top 10",
    "   • Active Directory Exploitation (BloodHound, Kerberoasting, AS-REP Roasting, DCSync, Pass-the-Hash, Delegation Abuse)",
    "   • Tools: Impacket, Mimikatz, Rubeus, Hashcat, NetExec (CrackMapExec), PrivEsc (winPEAS/linPEAS), Metasploit, Burp Suite Pro, Nmap",
    "3. SIEM, EDR & THREAT HUNTING:",
    "   • Wazuh, Splunk, SentinelOne, Trend Micro Deep Security, Microsoft Sentinel, Kaspersky EDR, Snort",
    "   • MITRE ATT&CK Framework, DFIR & RAM Dump Analysis",
    "4. COMPLIANCE, CLOUD & SCRIPTING:",
    "   • CERT-In Guidelines, CDAC Standards, NIST CSF, CIS Controls, ISO 27001 (familiar)",
    "   • AWS/Azure Fundamentals, Linux (RHEL/Ubuntu), Python, Bash, PowerShell, Git",
    "5. AI-AUGMENTED ENGINEERING & OPSEC:",
    "   • Claude, Google Antigravity (agentic IDE), GitHub Copilot",
    "   • OPSEC and anonymity-network research (Tor) for defensive threat intelligence"
  ],
  exp: [
    "aditya@secops:~$ get-history",
    "• Ebix Technologies (Client: NIC, MeitY Govt. of India) - Feb 2024 to Present",
    "  Role: Security Administrator & NGFW Architect (Patna, India)",
    "  - Architected default-deny policies on Palo Alto & Check Point clusters; secured Bihar SDC Linux rack servers.",
    "  - Managed SentinelOne, Deep Security & Wazuh across 750+ endpoints; tuned correlation rules (-30% alert fatigue).",
    "  - Primary CERT-In incident responder; automated 120+ CDAC/CERT-In checks via KACE UEM (60% audit cut).",
    "  - Authored PoC exploits with NIC-CERT; executed Active Directory attack-path analysis.",
    "  - Engineered Unified NOC Monitoring Suite (VC health, WAN latency, portal checks across 38 districts).",
    "  - Delivered specialized NGFW/EDR/CERT-In security training to 60+ district FMS teams.",
    "• Independent Security Researcher - Aug 2023 to Jan 2024 (Remote)",
    "  - Executed advanced AD exploitation labs (HTB, VulnLab multi-forest, Kerberoasting, DCSync, DC compromise).",
    "• RRG Engineering Tech (Client: DAE Nuclear Fuel Complex) - Dec 2022 to Jul 2023 (Kota, India)",
    "  Role: SOC Analyst – Threat Hunter (24x7 CNI SOC)",
    "  - 24x7 threat hunting via Blu Sapphire SIEM & Splunk; +35% true-positive detection boost.",
    "  - Behavioral malware analysis and sandbox reproduction to update detection signatures.",
    "• E2E Networks Limited - Aug 2022 to Oct 2022 (Vellore, India)",
    "  Role: SOC Analyst – IDS & Signature Development (Snort/Wazuh custom signatures, AbuseIPDB feed automation).",
    "• Teleperformance - Dec 2021 to May 2022 (Jaipur, India)",
    "  Role: Technical Support Executive (Microsoft Enterprise support, strict SLA compliance)."
  ],
  projects: [
    "aditya@secops:~$ list-projects --verified",
    "1. State NOC Admin Portal (NIC Bihar)       - 38 district nodes, live traceroute diagnostics, Ollama LLM voice RAG",
    "2. Real-Time Network Alert Dashboard        - 293 core routers, sub-second ping tracking, Web Speech voice alarms",
    "3. Unified NOC Monitoring Suite (NIC Bihar) - Synthetic VC health, WAN speed-tests, portal checks, SLA reporting",
    "4. LAN Asset Management Portal              - DHCP/PXE-based automated OS deployment, secure internal file sharing",
    "5. CDAC / CERT-In Compliance Engine         - 750+ endpoints, 120+ checks, 60% audit cycle reduction",
    "6. CyberKarma & JumpStreet Triad            - Free Rice trivia animal welfare + Orca6 algorithmic trading engine"
  ],
  labs: [
    "aditya@secops:~$ list-labs",
    "[Offensive Security Labs]",
    "• Hack The Box: Active Directory exploitation, privilege escalation",
    "• VulnLab: Multi-forest AD, Domain Controller compromise",
    "• OPSEC & Tor: Anonymity-network research for defensive threat intelligence",
    "[Academic Coursework]",
    "• Security Management & Governance (Royal Holloway, University of London)",
    "• Introduction to Network Security (University of London)",
    "• Mathematical Foundations for Cryptography (University of Colorado)"
  ],
  certs: [
    "aditya@secops:~$ list-certs",
    "[Earned & Verified]",
    "• Fortinet Certified Associate (FCA) in Cybersecurity (Jan 2026)",
    "• EC-Council: In the Trenches - SOC",
    "[In Progress & Targeted Roadmap]",
    "• eJPT (Junior Penetration Tester) - Target: Q4 2026",
    "• CEH v13 (Certified Ethical Hacker) - Target: 2026",
    "• CISSP (Information Systems Security) - Target: Q3 2027",
    "• OSCP (Offensive Security Certified Professional) - Target: 2027+",
    "• MBA in Cybersecurity (Chitkara University - Expected Jul 2027)"
  ],
  education: [
    "aditya@secops:~$ get-education",
    "• Chitkara University (Punjab, India) - MBA in Cybersecurity (In Progress, Expected Jul 2027)",
    "• Manipal University Jaipur (Rajasthan, India) - B.Tech in Computer Science & Engineering (2019 - 2022)",
    "• Hindu College of Engineering (Haryana, India) - Diploma in Computer Science & Engineering (2013 - 2018)"
  ],
  recruiter: [
    "aditya@secops:~$ show-recruiter-intel",
    "• Current Posting    : On-site at National Informatics Centre (MeitY), Patna (Employer HQ: Noida)",
    "• Relocation Markets : Delhi NCR, Bengaluru, Hyderabad, Pune, Mumbai, Jaipur (family base)",
    "                       International: UAE, Singapore, UK, Germany (EU Blue Card pathway), EU, US",
    "• Work Authorization : Indian citizen (Open to visa sponsorship for UAE, SG, UK, Germany, EU, US)",
    "• Languages          : English (Professional), Hindi (Native)",
    "• Availability       : 60 Days (Negotiable)",
    "• Direct Contact     : +91 74005 88896 | adityasec32@gmail.com / contact@adityasec32.systems"
  ],
  ecosystem: [
    "aditya@secops:~$ cat ecosystem.map",
    "• adityasec32.systems - Primary SecOps, Purple Teaming & CNI Defense Portfolio",
    "• jumpstreet.tech     - Quantitative Trading, WebSocket Feeds & Orca6 Arbitrage Engine",
    "• cyberkarma.me       - Gamified Free Rice Cybersecurity Trivia (Feeding Stray Animals in Patna)"
  ],
  contact: [
    "aditya@secops:~$ show-contact",
    "• Phone     : +91 74005 88896",
    "• Email     : adityasec32@gmail.com / contact@adityasec32.systems",
    "• LinkedIn  : https://www.linkedin.com/in/ajainx1/",
    "• GitHub    : https://github.com/ajainx1",
    "• Portfolio : https://adityasec32.systems",
    "• PGP Key   : 4A8B 92C1 3E7F 8902 B5D4 1A9C 77E0 63F8"
  ]
};

interface WriteUp {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  tags: string[];
  content: {
    overview: string;
    methodology: string[];
    takeaways: string[];
    codeSnippet?: string;
  };
}

const WRITE_UPS: WriteUp[] = [
  {
    id: "kerberoasting-dcsync",
    title: "Kerberoasting → DCSync: Chaining AD Attacks in a Multi-Forest Lab",
    category: "Offensive Security / Active Directory",
    readTime: "7 min read",
    date: "Aug 2026",
    summary: "Deep-dive analysis on requesting TGS tickets for SPN accounts, cracking RC4/AES hashes with Hashcat, escalating through nested delegation groups, and executing DCSync via Impacket secretsdump.",
    tags: ["Active Directory", "Kerberos", "BloodHound", "Impacket", "DCSync", "Purple Team"],
    content: {
      overview: "Active Directory remains the primary target for enterprise compromise. In this multi-forest lab simulation, we chain credential harvesting against service accounts (SPNs) through privilege escalation vectors directly to full Domain Controller replication (DCSync).",
      methodology: [
        "Phase 1 - Reconnaissance: Enumerated Service Principal Names (SPNs) using PowerView (Get-DomainUser -SPN) and Impacket's GetUserSPNs.py without administrative privileges.",
        "Phase 2 - Kerberoasting: Requested TGS tickets for high-value service accounts, exported tickets, and cracked hashes offline using Hashcat mode 13100 (RC4) and 18200 (AES-256).",
        "Phase 3 - Lateral Movement: Leveraged cracked Tier-1 service credentials with BloodHound path graphing to discover unconstrained delegation on an auxiliary backup server.",
        "Phase 4 - Domain Compromise: Exploited DS-Replication-Get-Changes-All permissions to execute remote DCSync using Impacket secretsdump.py, dumping the KRBTGT hash."
      ],
      takeaways: [
        "Enforce 25+ character complex passwords or Group Managed Service Accounts (gMSA) to render offline Kerberoasting crack attempts mathematically infeasible.",
        "Disable RC4-HMAC encryption domain-wide, enforcing AES-128 / AES-256 Kerberos ticket encryption.",
        "Deploy honeypot SPN service accounts with Wazuh SIEM alerting on Event ID 4769 (Kerberos Ticket Request with 0x17 ticket encryption)."
      ],
      codeSnippet: `# Active Directory Attack Chain Commands (Sanitized Lab)
# 1. Enumerate and request Kerberos SPN tickets
GetUserSPNs.py corp.internal/jdoe:Password123 -dc-ip 10.10.10.1 -request -outputfile tgs_hashes.txt

# 2. Offline hash cracking via Hashcat
hashcat -m 13100 tgs_hashes.txt /usr/share/wordlists/rockyou.txt -r rules/best64.rule --force

# 3. Perform DCSync to dump KRBTGT hash
secretsdump.py corp.internal/svc_backup:CrackedPass@10.10.10.1 -just-dc-user krbtgt`
    }
  },
  {
    id: "cert-in-automation",
    title: "Automating 120+ CERT-In Checks with PowerShell & KACE UEM",
    category: "SecOps / Compliance Automation",
    readTime: "5 min read",
    date: "Jul 2026",
    summary: "How we engineered a scalable PowerShell & Python framework across 750+ government endpoints, reducing manual security audit cycles by 60% while hardening critical CIS/NIST baselines.",
    tags: ["PowerShell", "KACE UEM", "NIST CSF", "CERT-In", "Registry Hardening"],
    content: {
      overview: "Managing compliance across 750+ distributed government endpoint nodes historically required weeks of manual checklist verifications. By architecting an automated modular PowerShell agent orchestrated via KACE UEM, audit turnaround was compressed from 14 days to under 4 hours.",
      methodology: [
        "Architecture Design: Developed a 120-check modular PowerShell auditing script verifying USB storage restrictions, SMBv1 deprecation, Local Admin password rotation (LAPS), and firewall state.",
        "Telemetry Aggregation: Structured audit outputs as cryptographic SHA-256 JSON payloads transmitted over mutual TLS to a centralized compliance database.",
        "Automated Remediation: Configured automated rollback scripts that instantly re-enforced Group Policy Object (GPO) registry keys whenever deviation was detected.",
        "Executive Reporting: Integrated Python data pipelines to render real-time compliance scorecards across all 38 district operational zones."
      ],
      takeaways: [
        "60% reduction in manual engineer audit cycles across 750+ government offices.",
        "Zero-day remediation visibility for unauthorized peripheral devices and dormant local accounts.",
        "Established automated compliance evidence generation mapped directly to ISO 27001 and CERT-In mandates."
      ],
      codeSnippet: `# Modular Compliance Checker (Snippet)
$AuditResults = [PSCustomObject]@{
    Hostname        = $env:COMPUTERNAME
    Timestamp       = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssZ")
    SMBv1Disabled   = !(Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol).State -eq "Enabled"
    USBStorageBlock = (Get-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR").Start -eq 4
    LAPSInstalled   = Test-Path "C:\\Program Files\\LAPS\\AdmPwd.dll"
    FirewallActive  = (Get-NetFirewallProfile -Profile Domain,Public,Private | Where-Object Enabled -eq $false).Count -eq 0
}
$JsonPayload = $AuditResults | ConvertTo-Json -Compress
Invoke-RestMethod -Uri "https://compliance-collector.internal/api/v1/telemetry" -Method Post -Body $JsonPayload -ContentType "application/json"`
    }
  },
  {
    id: "wazuh-splunk-tuning",
    title: "Tuning Wazuh + Splunk: Cutting False Positives by 30% in CNI SOC",
    category: "Detection Engineering / SIEM",
    readTime: "6 min read",
    date: "Jun 2026",
    summary: "Practical detection engineering guide on optimizing correlation rules, establishing contextual noise baselines, and increasing true-positive threat hunting efficacy in a 24x7 nuclear SOC environment.",
    tags: ["Wazuh", "Splunk", "Detection Engineering", "Sigma Rules", "SOC Optimization"],
    content: {
      overview: "Alert fatigue is the primary vulnerability in high-throughput 24x7 SOC environments. At the Nuclear Fuel Complex (NFC) CNI monitoring center, custom rule tuning and baseline filtering resulted in a +35% boost in true-positive alert efficacy.",
      methodology: [
        "Baseline Noise Profiling: Identified top noisy Event IDs (Sysmon 1, 3, 7, and Security 4688) generated by routine administrative maintenance scripts and automated backup jobs.",
        "Contextual Correlation: Converted static single-event triggers into multi-stage Sigma correlation rules (e.g., PowerShell encoded execution followed immediately by outbound DNS query to non-standard TLD).",
        "EDR Behavioral Pairing: Cross-correlated Wazuh SIEM alerts with Kaspersky & SentinelOne EDR telemetry to auto-enrich alerts with parent-child process trees and process hash reputations.",
        "Continuous Purple Team Testing: Validated rule efficacy using Atomic Red Team simulations, confirming zero suppression of genuine TTPs."
      ],
      takeaways: [
        "Reduced daily alert volume by 30%, allowing Level 2/3 analysts to focus exclusively on high-fidelity indicators.",
        "Boosted true-positive detection rate by 35% across lateral movement and privilege escalation phases.",
        "Documented reproducible detection playbooks for rapid triage of living-off-the-land binaries (LOLBins)."
      ],
      codeSnippet: `<!-- Wazuh Custom Correlation Rule (T1059.001 Suspicious PowerShell Execution) -->
<group name="windows,sysmon,powershell,">
  <rule id="100150" level="12">
    <if_sid>61603</if_sid>
    <field name="win.eventdata.image">powershell.exe</field>
    <field name="win.eventdata.commandLine" type="pcre2">(?i)(-enc|-encodedcommand|-w\s+hidden|-noni|-nop)</field>
    <description>MITRE T1059.001: Encoded or Obfuscated PowerShell Execution Detected</description>
    <mitre>
      <id>T1059.001</id>
    </mitre>
  </rule>
</group>`
    }
  }
];

interface ProjectCard {
  id: string;
  title: string;
  category: "cni" | "offensive" | "sandbox" | "social";
  categoryLabel: string;
  orbitTag: string;
  impactHighlight: string;
  description: string;
  tags: string[];
  link?: string;
  isModal?: boolean;
  linkText: string;
  colorBorder: string;
  colorGlow: string;
  colorBadge: string;
  colorText: string;
}

const PROJECTS_DATA: ProjectCard[] = [
  {
    id: "noc-admin-portal",
    title: "State NOC Admin Portal (NIC Bihar)",
    category: "sandbox",
    categoryLabel: "Live NOC Sandbox",
    orbitTag: "ORBIT: 38-DHQ-CORE",
    impactHighlight: "Monitors 38 district nodes with live traceroute & Ollama voice RAG LLM",
    description: "Enterprise network operations dashboard monitoring 38 regional district nodes with live traceroute diagnostics, automated outage alerting, and an on-premise Ollama voice-enabled RAG chatbot.",
    tags: ["Next.js", "Ollama LLM", "PHP API", "Three.js", "RAG"],
    link: "/noc/",
    linkText: "Launch NOC Portal Demo",
    colorBorder: "border-cyan-500/25 hover:border-cyan-400",
    colorGlow: "hover:shadow-cyan-500/20",
    colorBadge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    colorText: "group-hover:text-cyan-400"
  },
  {
    id: "network-alert-dashboard",
    title: "Real-Time Network Alert Dashboard",
    category: "sandbox",
    categoryLabel: "Live Telemetry",
    orbitTag: "ORBIT: 293-NODES",
    impactHighlight: "JavaScript/CSS Grid ping-monitoring tool for government routers with voice alerts",
    description: "Sub-second packet loss and ping outage tracking across 293 core routing units with Indian English Web Speech broadcast alarms, severity filtering, and device grid visualization.",
    tags: ["JavaScript", "Chart.js", "Web Speech API", "Glassmorphic"],
    link: "/alert/",
    linkText: "Launch Voice Alert Grid",
    colorBorder: "border-blue-500/25 hover:border-blue-400",
    colorGlow: "hover:shadow-blue-500/20",
    colorBadge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    colorText: "group-hover:text-blue-400"
  },
  {
    id: "unified-noc-suite",
    title: "Unified NOC Monitoring Suite (NIC Bihar)",
    category: "cni",
    categoryLabel: "CNI Observability",
    orbitTag: "ORBIT: 38-DISTRICTS-SLA",
    impactHighlight: "Synthetic monitoring platform for VC health, WAN speed-tests & SLA reporting",
    description: "In-house observability platform delivering video-conferencing (VC) health monitoring, district WAN speed-tests, and automated portal availability checks across 38 districts with severity-tiered alerting.",
    tags: ["Synthetic Probes", "QoS Analysis", "WAN Latency", "SLA Engine"],
    link: "/speed/",
    linkText: "Run Diagnostics Suite",
    colorBorder: "border-indigo-500/25 hover:border-indigo-400",
    colorGlow: "hover:shadow-indigo-500/20",
    colorBadge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    colorText: "group-hover:text-indigo-400"
  },
  {
    id: "lan-asset-management",
    title: "LAN Asset Management Portal",
    category: "cni",
    categoryLabel: "Deployment Automation",
    orbitTag: "ORBIT: PXE-DHCP-CORE",
    impactHighlight: "DHCP/PXE-based automated OS deployment & secure internal file distribution",
    description: "Locally-hosted Python/Bash asset management infrastructure enabling silent PXE OS provisioning, hardware inventory tracking, and cryptographic internal software distribution.",
    tags: ["Python", "Bash", "DHCP/PXE", "Asset Inventory", "Linux RHEL"],
    isModal: true,
    linkText: "View Architecture Specs",
    colorBorder: "border-teal-500/25 hover:border-teal-400",
    colorGlow: "hover:shadow-teal-500/20",
    colorBadge: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    colorText: "group-hover:text-teal-400"
  },
  {
    id: "cert-in-engine",
    title: "CDAC / CERT-In Compliance Automation Engine",
    category: "cni",
    categoryLabel: "SecOps Automation",
    orbitTag: "ORBIT: NIST-CSF-01",
    impactHighlight: "Cut quarterly compliance audit time by 60% across 750+ endpoints",
    description: "Automated PowerShell & Python framework validating 120+ regulatory baselines, USB lockouts, SMBv1 deprecation, and registry hardening across 750+ endpoints via KACE UEM.",
    tags: ["PowerShell", "Python", "KACE UEM", "NIST CSF", "CERT-In"],
    isModal: true,
    linkText: "View Case Study Blueprint",
    colorBorder: "border-emerald-500/25 hover:border-emerald-400",
    colorGlow: "hover:shadow-emerald-500/20",
    colorBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    colorText: "group-hover:text-emerald-400"
  },
  {
    id: "cyberkarma-jumpstreet-triad",
    title: "CyberKarma & JumpStreet Triad Ecosystem",
    category: "social",
    categoryLabel: "Karma & Quant Triad",
    orbitTag: "ORBIT: SOCIAL-ALGO",
    impactHighlight: "Free Rice animal welfare platform + Orca6 algorithmic trading platform",
    description: "Gamified educational trivia platform converting cybersecurity quizzes into real stray animal meals in Patna + statistical arbitrage quantitative trading architecture (Orca6).",
    tags: ["Next.js", "Web3/Charity", "Algorithmic Quant", "TypeScript"],
    link: "https://cyberkarma.me",
    linkText: "Explore cyberkarma.me",
    colorBorder: "border-purple-500/25 hover:border-purple-400",
    colorGlow: "hover:shadow-purple-500/20",
    colorBadge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    colorText: "group-hover:text-purple-400"
  }
];

// 5 Pillars of Core Competencies from Official Resume
const SKILLS_PILLARS = [
  {
    id: "network",
    title: "Network Security & Firewalls",
    icon: Shield,
    badge: "NGFW & ZTNA",
    skills: [
      { name: "Palo Alto", details: "Panorama, App-ID, Threat Prevention, SSL Decryption" },
      { name: "Check Point", details: "ClusterXL, SmartConsole, Threat Extraction" },
      { name: "Fortinet FortiGate", details: "FCA Certified, FortiOS, SD-WAN, IPS Policies" },
      { name: "Default-Deny Architecture", details: "Zero-Trust perimeter enforcement across SDC rack servers" },
      { name: "Zero Trust (ZTNA)", details: "Identity-aware least privilege microsegmentation" },
      { name: "Routing & Protocols", details: "OSPF, BGP, TACACS+, RADIUS, 802.1X" },
      { name: "Packet Analysis", details: "Wireshark, TCPDump, NetFlow telemetry analysis" }
    ]
  },
  {
    id: "offensive",
    title: "Offensive Security & VAPT",
    icon: Crosshair,
    badge: "VAPT & AD Exploitation",
    skills: [
      { name: "Active Directory Exploitation", details: "BloodHound path analysis, Kerberoasting, AS-REP Roasting, DCSync, Pass-the-Hash, Delegation Abuse" },
      { name: "Offensive Toolchains", details: "Impacket suite, Mimikatz, Rubeus, Hashcat, NetExec (CrackMapExec)" },
      { name: "Privilege Escalation", details: "winPEAS, linPEAS, token manipulation, service abuse" },
      { name: "Web & Infra VAPT", details: "Burp Suite Pro, OWASP Top 10, Metasploit, Nmap, PoC exploit authoring" },
      { name: "Lab Mastery", details: "Hack The Box & VulnLab multi-forest Active Directory compromise" }
    ]
  },
  {
    id: "siem",
    title: "SIEM, EDR & Threat Hunting",
    icon: Zap,
    badge: "SOC & Detection Engineering",
    skills: [
      { name: "Enterprise EDR", details: "SentinelOne, Trend Micro Deep Security, Kaspersky EDR" },
      { name: "SIEM Stacks", details: "Wazuh, Splunk, Microsoft Sentinel, Blu Sapphire SIEM" },
      { name: "Detection Engineering", details: "Custom Sigma rules, Wazuh XML decoders, Snort IDS signatures" },
      { name: "Threat Hunting & DFIR", details: "MITRE ATT&CK mapping, RAM Dump Analysis (Volatility), Incident Triage" },
      { name: "24x7 CNI SOC Operations", details: "SME threat hunting for Nuclear Fuel Complex (DAE) critical infrastructure" }
    ]
  },
  {
    id: "compliance",
    title: "Compliance, Cloud & Scripting",
    icon: FileCheck,
    badge: "Govt. Baselines & Automation",
    skills: [
      { name: "Regulatory Compliance", details: "CERT-In Guidelines, CDAC Standards, NIST CSF, CIS Controls, ISO 27001 (familiar)" },
      { name: "Automation & Scripting", details: "PowerShell automation, Python data pipelines, Bash shell scripting" },
      { name: "Endpoint Orchestration", details: "KACE UEM modular agent orchestration (750+ government nodes)" },
      { name: "Cloud & Systems", details: "AWS & Azure Fundamentals, Linux (RHEL/Ubuntu server administration), Git" }
    ]
  },
  {
    id: "ai_opsec",
    title: "AI-Augmented Engineering & OPSEC",
    icon: Bot,
    badge: "Modern AI & Threat Intel",
    skills: [
      { name: "Agentic AI IDEs", details: "Google Antigravity IDE, Claude 3.5 Sonnet, GitHub Copilot" },
      { name: "On-Premise LLM / RAG", details: "Local Ollama LLM integration for air-gapped NOC troubleshooting" },
      { name: "OPSEC Research", details: "Anonymity-network research (Tor) for defensive threat intelligence" },
      { name: "Security Architecture", details: "Pairing LLMs with SecOps automation for sub-second incident triage" }
    ]
  }
];

const isCyberKarmaMode = process.env.NEXT_PUBLIC_SITE_MODE === "cyberkarma";

export default function Home() {
  const [isCyberKarmaHost, setIsCyberKarmaHost] = useState(isCyberKarmaMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname.toLowerCase();
      if (host.includes("cyberkarma") || host.includes("freerice")) {
        setIsCyberKarmaHost(true);
      }
    }
  }, []);

  if (isCyberKarmaMode || isCyberKarmaHost) {
    return (
      <ToastProvider>
        <CharityQuizClient />
      </ToastProvider>
    );
  }

  // State Management
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "aditya@secops:~# secure session initialized...",
    "SEC_CORE: ACTIVE | 750+ ENDPOINTS HARDENED | NIC MeitY CNI",
    "Type 'whoami', 'skills', 'projects', 'labs', or 'help' for commands.",
    ""
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [selectedWriteUp, setSelectedWriteUp] = useState<WriteUp | null>(null);
  const [activeWriteUpTab, setActiveWriteUpTab] = useState<"overview" | "methodology" | "takeaways" | "code">("overview");
  const [caseStudyModal, setCaseStudyModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactSent, setContactSent] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedTerminal, setCopiedTerminal] = useState<boolean>(false);
  const [copiedPgp, setCopiedPgp] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "cni" | "offensive" | "sandbox" | "social">("all");
  const [activeSkillPillar, setActiveSkillPillar] = useState<string>("network");

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    setInputHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let response: string[] = [];
    if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else if (cmd in COMMANDS) {
      response = COMMANDS[cmd];
    } else {
      response = [`aditya@secops:~$ ${cmd}`, `Command '${cmd}' not recognized. Type 'help' for list of commands.`];
    }

    setTerminalHistory((prev) => [...prev, `aditya@secops:~$ ${terminalInput}`, ...response, ""]);
    setTerminalInput("");
  };

  const handleKeyDownTerminal = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (inputHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? inputHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setTerminalInput(inputHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < inputHistory.length) {
          setHistoryIndex(nextIndex);
          setTerminalInput(inputHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setTerminalInput("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = terminalInput.trim().toLowerCase();
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(current));
      if (match) {
        setTerminalInput(match);
      }
    }
  };

  const runTerminalShortcut = (cmd: string) => {
    if (cmd === "clear") {
      setTerminalHistory([]);
      return;
    }
    const response = COMMANDS[cmd] || [];
    setTerminalHistory((prev) => [...prev, `aditya@secops:~$ ${cmd}`, ...response, ""]);
  };

  const copyTerminalOutput = () => {
    const text = terminalHistory.join("\n");
    navigator.clipboard.writeText(text);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText("contact@adityasec32.systems");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPgpKey = () => {
    navigator.clipboard.writeText("4A8B 92C1 3E7F 8902 B5D4 1A9C 77E0 63F8");
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage) return;
    window.location.href = `mailto:contact@adityasec32.systems?subject=Portfolio Inquiry via adityasec32.systems&body=${encodeURIComponent(contactMessage)}`;
    setContactSent(true);
  };

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === projectFilter);
  }, [projectFilter]);

  return (
    <div className="min-h-screen relative flex flex-col font-sans bg-[#020617] text-[#E8EAE6] selection:bg-emerald-500/30 selection:text-emerald-300 bg-cyber-grid">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]/85 backdrop-blur-[1px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-20 bg-emerald-700 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full blur-[150px] opacity-15 bg-cyan-700 pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-indigo-700 pointer-events-none" />
      </div>

      {/* CISO / Recruiter Sanitization Trust Banner */}
      <div className="w-full bg-emerald-950/80 border-b border-emerald-500/25 py-2 px-4 text-center text-[11px] font-mono font-semibold text-emerald-300 backdrop-blur-xl relative z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>All government case studies &amp; project demos are sanitized recordings &amp; mock telemetry; zero live state infrastructure is exposed.</span>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-emerald-500/15 bg-[#020617]/90 backdrop-blur-2xl shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-title font-bold text-lg tracking-tight hover:opacity-90 transition-opacity">
            <span className="bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/25 px-2.5 py-0.5 rounded-lg text-sm font-black font-mono">AJ</span>
            <span className="text-white">Aditya<span className="text-emerald-400">.</span>Jain</span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills &bull; Tools</a>
            <a 
              href="#projects" 
              className="relative group px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/25 hover:border-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              title="Explore Planetary Defense Grid & Case Studies"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-180 transition-transform duration-700" />
              <span className="tracking-widest">Projects</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#labs" className="hover:text-emerald-400 transition-colors">Labs &bull; Edu</a>
            <a href="#writeups" className="hover:text-emerald-400 transition-colors">Write-Ups</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            
            <Link
              href="/charity-quiz"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 hover:text-white hover:bg-rose-500/25 transition-all text-xs font-mono font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>🐾 Free Rice (हिं/EN)</span>
            </Link>
          </nav>

          {/* Right Permanent Resume CTA */}
          <div className="flex items-center gap-3">
            <CyberResumeButton variant="nav" />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-4 space-y-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 backdrop-blur-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Home</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Skills &bull; Tools</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Projects &bull; Orbit</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Experience</a>
            <a href="#labs" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Labs &bull; Coursework</a>
            <a href="#writeups" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Write-Ups</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-400">Contact</a>
            <Link href="/charity-quiz" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-rose-400 font-bold">🐾 Free Rice Quiz (हिं/EN)</Link>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main id="main-content" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-24 sm:space-y-32 relative z-10">
        
        {/* TIER 1: HERO SECTION & RECRUITER MOBILITY */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-14rem)]">
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Purple Teamer Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-xl text-xs font-mono font-bold text-emerald-300 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>PURPLE TEAMER &bull; CNI THREAT HUNTER &bull; SECOPS ARCHITECT</span>
            </div>

            {/* H1 & Master H2 Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black font-title tracking-tight text-white leading-tight">
                Aditya Jain
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-title leading-snug">
                Cybersecurity Engineer | Network Security &amp; NGFW Architecture | VAPT &bull; SIEM/EDR &bull; DFIR
              </h2>

              {/* Verified Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl pt-1">
                Results-driven Cybersecurity Engineer with <strong>4+ years of experience architecting default-deny NGFW estates and enterprise EDR/SIEM programs</strong> for government and Critical National Infrastructure (CNI) &mdash; reducing audit turnaround 60% and elevating true-positive detection 35%.
              </p>
            </div>

            {/* CTA Hierarchy Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* 1. Download Resume */}
              <CyberResumeButton variant="hero" showChecksum={true} />

              {/* 2. View Case Studies & Orbital Grid */}
              <a 
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-slate-900/90 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60 hover:border-emerald-400 hover:text-white transition-all flex items-center gap-2.5 hover:-translate-y-0.5 min-h-[44px] shadow-xl shadow-emerald-950/40"
              >
                <Globe className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform" />
                <span>🛰️ View Key Projects</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* 3. Direct Quick Copy Email */}
              <button
                type="button"
                onClick={copyEmailAddress}
                className="px-5 py-3.5 rounded-xl text-xs font-mono font-bold bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all flex items-center gap-2 min-h-[44px] cursor-pointer"
                title="Click to copy contact email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Recruiter Mobility & Fast Facts Strip */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/20 backdrop-blur-xl space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Recruiter Fast-Facts &amp; Mobility</span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold">Availability: 60 Days (Negotiable)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Posting:</strong> On-site NIC (MeitY), Patna | Employer HQ: Noida</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Relocation:</strong> Delhi NCR, Blr, Hyd, Pune, Mum, Jaipur (Family Base)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Global Markets:</strong> UAE, Singapore, UK, Germany (EU Blue Card), EU, US</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Languages:</strong> English (Professional), Hindi (Native)</span>
                </div>
              </div>
            </div>

            {/* Proof-Metrics Strip */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Impact &amp; Operational Metrics</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { label: "Endpoints Secured", value: "750+" },
                  { label: "Audit Effort Reduced", value: "60%" },
                  { label: "True Positives Boost", value: "+35%" },
                  { label: "District Core Nodes", value: "38" },
                  { label: "FMS Teams Trained", value: "60+" }
                ].map((stat, i) => (
                  <div key={i} className="p-3.5 bg-slate-900/70 border border-emerald-500/15 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center text-center hover:border-emerald-500/40 transition-all shadow-md">
                    <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">{stat.value}</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Terminal Simulator on Right */}
          <div className="lg:col-span-5">
            <TiltWrapper tiltDeg={3}>
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-xs shadow-emerald-950/40 scanline-effect">
                
                {/* Header bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-slate-300 font-bold ml-2">aditya@secops: ~/resume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={copyTerminalOutput}
                      className="p-1 rounded bg-slate-800 text-slate-400 hover:text-emerald-300 hover:bg-slate-700 transition-colors"
                      title="Copy Terminal Text"
                    >
                      {copiedTerminal ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/30">BASH 5.2</span>
                  </div>
                </div>

                {/* Console Output Area */}
                <div className="p-4 h-[310px] overflow-y-auto space-y-2 text-slate-300 scrollbar-thin">
                  {terminalHistory.map((line, i) => (
                    <div key={i} className={line.startsWith("aditya@") ? "text-emerald-400 font-bold" : "text-slate-300 whitespace-pre-wrap leading-relaxed"}>
                      {line}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Quick Command Shortcuts */}
                <div className="p-2 border-t border-slate-900 bg-slate-900/60 flex flex-wrap gap-1.5">
                  {["whoami", "skills", "exp", "projects", "labs", "certs", "recruiter", "clear"].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => runTerminalShortcut(cmd)}
                      className="px-2.5 py-1 rounded bg-slate-800/90 text-[10px] text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 font-mono transition-colors border border-emerald-500/10 cursor-pointer active:scale-95"
                    >
                      ${cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Input Form */}
                <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900/90 border-t border-emerald-500/15 flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">aditya@secops:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleKeyDownTerminal}
                    placeholder="type 'skills', 'labs', 'whoami' or [Tab]..."
                    className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder:text-slate-600 text-xs font-mono"
                  />
                </form>
              </div>
            </TiltWrapper>
          </div>
        </section>

        {/* SECTION: CORE COMPETENCIES & TECHNICAL SKILLS (5 PILLARS INTERACTIVE MATRIX) */}
        <section id="skills" className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>01 // Core Competencies &amp; Toolchains</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-title text-white">
                Technical Skills &amp; Defense Toolchains
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Hands-on mastery across Palo Alto/Fortinet NGFW, Active Directory red teaming, enterprise EDR/SIEM, compliance orchestration, and agentic AI OPSEC.
            </p>
          </div>

          {/* 5 Pillar Category Tabs */}
          <div className="flex flex-wrap gap-2.5 border-b border-slate-800 pb-4">
            {SKILLS_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeSkillPillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveSkillPillar(pillar.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive 
                      ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 scale-102"
                      : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card Breakdown */}
          {SKILLS_PILLARS.filter((p) => p.id === activeSkillPillar).map((active) => (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-[28px] bg-slate-900/70 border border-emerald-500/25 backdrop-blur-2xl shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <active.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-title text-white">{active.title}</h3>
                    <div className="text-xs font-mono text-emerald-400 font-bold">{active.badge}</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:block">Verified Production Experience</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {active.skills.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-emerald-500/40 transition-all space-y-1.5 group">
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed font-sans pl-5">
                      {item.details}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* SECTION: KEY SECURITY PROJECTS & PLANETARY DEFENSE GRID */}
        <section id="projects" className="space-y-10 pt-6">
          
          {/* Top-Angle Orbital Command Banner */}
          <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900/95 to-emerald-950/40 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
                  <Globe className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                  <span>KEY SECURITY PROJECTS // CNI &amp; OBSERVABILITY MATRIX</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-title text-white tracking-tight">
                  Critical Infrastructure Portals &amp; Engineering Systems
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Production monitoring platforms, synthetic diagnostic suites, and automated compliance engines built for government and enterprise operations.
                </p>
              </div>

              {/* 4 Macroscopic Telemetry Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/25 text-center shadow-lg shadow-emerald-950/30">
                  <div className="text-xl font-mono font-black text-emerald-400">38 / 38</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5">DHQ Loopbacks</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/25 text-center shadow-lg shadow-cyan-950/30">
                  <div className="text-xl font-mono font-black text-cyan-400">293</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5">Monitored IPs</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-blue-500/25 text-center shadow-lg shadow-blue-950/30">
                  <div className="text-xl font-mono font-black text-blue-400">0.01%</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5">Firewall Drop</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-indigo-500/25 text-center shadow-lg shadow-indigo-950/30">
                  <div className="text-xl font-mono font-black text-indigo-400">60%</div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5">Audit Time Cut</div>
                </div>
              </div>
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 relative z-10">
              <span className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-emerald-400" />
                <span>Filter Grid:</span>
              </span>
              {[
                { id: "all", label: "All Systems (6)" },
                { id: "cni", label: "CNI & Observability" },
                { id: "sandbox", label: "Live Sandboxes" },
                { id: "social", label: "Karma & Quant Triad" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setProjectFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    projectFilter === tab.id
                      ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/30"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Planetary Defense Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <TiltWrapper key={project.id} tiltDeg={3}>
                <div className={`h-full p-7 rounded-[24px] bg-slate-900/70 border ${project.colorBorder} transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-xl group hover:shadow-2xl ${project.colorGlow}`}>
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${project.colorBadge}`}>
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{project.orbitTag}</span>
                    </div>

                    <h3 className={`text-xl font-bold font-title text-white ${project.colorText} transition-colors`}>
                      {project.title}
                    </h3>

                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-emerald-300">
                      <strong>Impact:</strong> {project.impactHighlight}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950 border border-slate-800 text-emerald-400/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    {project.isModal ? (
                      <button
                        type="button"
                        onClick={() => setCaseStudyModal(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{project.linkText}</span>
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target={project.link?.startsWith("http") ? "_blank" : "_self"}
                        rel={project.link?.startsWith("http") ? "noopener noreferrer" : ""}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300"
                      >
                        <span>{project.linkText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <span className="text-[10px] font-mono text-slate-500">Sanitized Demo</span>
                  </div>
                </div>
              </TiltWrapper>
            ))}
          </div>
        </section>

        {/* SECTION: VERIFIED ENTERPRISE EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>03 // Professional Work History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-white">
              Enterprise SecOps Experience (4+ Years)
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                period: "Feb 2024 — Present",
                role: "Security Administrator & NGFW Architect",
                company: "Ebix Technologies (Client: National Informatics Centre - NIC, MeitY Govt. of India)",
                location: "Patna, Bihar, India",
                tags: ["750+ Endpoints", "Palo Alto", "Check Point", "SentinelOne", "Deep Security", "Wazuh", "KACE UEM"],
                bullets: [
                  "NGFW & Network Hardening: Architect and enforce default-deny policies across Palo Alto and Check Point NGFW clusters; audit public IP exposure and secure Linux rack servers across the Bihar State Data Centre (SDC).",
                  "Enterprise EDR/SIEM Deployment: Manage SentinelOne, Trend Micro Deep Security, and Wazuh/Splunk deployments across 750+ regional government endpoints; tune correlation rules against emerging attack vectors, reducing false-positive fatigue by 30%.",
                  "Incident Response & Compliance: Serve as primary CERT-In incident responder; automate compliance reporting (120+ CDAC/CERT-In checks via KACE UEM), cutting manual audit effort by 60%.",
                  "VAPT & AD Security: Lead coordination with NIC-CERT to remediate critical web vulnerabilities (authoring PoC exploits) and conduct Active Directory attack-path analysis to secure district-level nodes.",
                  "Unified NOC Monitoring Suite: Engineered an in-house observability platform delivering video-conferencing (VC) health monitoring, WAN speed/latency probing, and automated portal availability checks across 38 districts; reduced outage detection time and produced SLA evidence for FMS teams.",
                  "Security Training: Deliver specialized training on NGFW, EDR, and CERT-In compliance to 60+ district-level Facility Management System (FMS) teams."
                ]
              },
              {
                period: "Aug 2023 — Jan 2024",
                role: "Independent Security Researcher",
                company: "Offensive Security & Active Directory Exploitation Focus",
                location: "Remote",
                tags: ["Active Directory", "Hack The Box", "VulnLab", "Kerberoasting", "DCSync", "PrivEsc"],
                bullets: [
                  "Executed advanced Active Directory exploitation labs (Hack The Box, VulnLab multi-forest environments), mastering Kerberoasting, DCSync, and Domain Controller compromise techniques.",
                  "Pursued MBA (Cybersecurity) coursework and aligned certification trajectories (eJPT, CEH) to bridge defensive architecture with offensive red-team methodologies."
                ]
              },
              {
                period: "Dec 2022 — Jul 2023",
                role: "SOC Analyst – Threat Hunter",
                company: "RRG Engineering Tech (Client: Nuclear Fuel Complex - NFC / DAE Govt. of India)",
                location: "Kota, Rajasthan, India",
                tags: ["24x7 CNI SOC", "Blu Sapphire SIEM", "Splunk", "+35% Detection Boost", "Malware TTPs"],
                bullets: [
                  "CNI SOC Operations: Operated as SME for threat hunting in a 24/7 Critical National Infrastructure SOC, monitoring enterprise telemetry via Blu Sapphire SIEM and Splunk.",
                  "Detection Engineering: Engineered and tuned SIEM correlation rules and EDR policies, achieving a 35% improvement in true-positive detection rates.",
                  "Malware Analysis: Performed behavioral malware analysis and sandbox payload reproduction to reverse-engineer TTPs and update detection signatures."
                ]
              },
              {
                period: "Aug 2022 — Oct 2022",
                role: "SOC Analyst – IDS & Signature Development",
                company: "E2E Networks Limited",
                location: "Vellore, Tamil Nadu, India",
                tags: ["Snort IDS", "Wazuh SIEM", "AbuseIPDB Feed", "Perimeter Defense"],
                bullets: [
                  "Authored and deployed custom Snort and Wazuh IDS signatures, improving detection coverage against novel attack patterns in a 24/7 SOC environment.",
                  "Automated AbuseIPDB feed ingestion for real-time perimeter IP blocklisting, significantly reducing inbound malicious traffic and routing anomalies."
                ]
              },
              {
                period: "Dec 2021 — May 2022",
                role: "Technical Support Executive (Microsoft Enterprise)",
                company: "Teleperformance",
                location: "Jaipur, Rajasthan, India",
                tags: ["Tier-2 Enterprise Support", "Microsoft 365", "SLA Compliance"],
                bullets: [
                  "Delivered Tier-2 Microsoft enterprise product support, maintaining strict SLA compliance and contributing to internal knowledge base documentation."
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-[24px] bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all backdrop-blur-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold font-mono border border-emerald-500/20">{exp.period}</span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {exp.location}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-title text-white">{exp.role}</h3>
                  <div className="text-sm text-slate-400 font-semibold">{exp.company}</div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-emerald-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc pl-5 pt-2 marker:text-emerald-400">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PROFESSIONAL DEVELOPMENT & LABS */}
        <section id="labs" className="space-y-6 pt-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>04 // Professional Development &amp; Coursework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-white">
              Hands-On Security Labs &amp; Academic Coursework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Offensive Labs */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-slate-900/60 border border-emerald-500/20 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Crosshair className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-title text-white">Offensive Security Labs</h3>
                  <div className="text-xs font-mono text-slate-400">Red Team &amp; AD Exploitation</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-emerald-400 font-mono font-bold">01</span>
                  <span><strong>Hack The Box:</strong> Active Directory exploitation, Kerberoasting, privilege escalation &amp; network pivoting.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-emerald-400 font-mono font-bold">02</span>
                  <span><strong>VulnLab Multi-Forest Labs:</strong> Forest trust abuse, DC shadow attacks, DCSync, and full Domain Controller compromise.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-emerald-400 font-mono font-bold">03</span>
                  <span><strong>OPSEC &amp; Anonymity:</strong> Tor network research and threat intelligence infrastructure for defensive early-warning feeds.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Academic Coursework */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-title text-white">Academic Security Coursework</h3>
                  <div className="text-xs font-mono text-slate-400">University Specializations</div>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-cyan-400 font-mono font-bold">01</span>
                  <span><strong>Security Management &amp; Governance:</strong> Royal Holloway, University of London &mdash; Enterprise risk matrices &amp; policies.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-cyan-400 font-mono font-bold">02</span>
                  <span><strong>Introduction to Network Security:</strong> University of London &mdash; Cryptographic key exchanges, packet filters &amp; TLS.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-cyan-400 font-mono font-bold">03</span>
                  <span><strong>Mathematical Foundations for Cryptography:</strong> University of Colorado &mdash; Asymmetric ciphers, hashing, and discrete log.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: CERTIFICATIONS ROADMAP */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>05 // Verified Credentials &amp; Certifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-white">
              Professional Certifications &amp; Ongoing Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Fortinet Certified Associate (FCA)", org: "Fortinet", status: "Earned & Verified (Jan 2026)", color: "border-red-500/25 text-red-400 bg-red-950/20" },
              { title: "In the Trenches: SOC", org: "EC-Council", status: "Earned & Verified", color: "border-emerald-500/25 text-emerald-400 bg-emerald-950/20" },
              { title: "eJPT (Junior Penetration Tester)", org: "eLearnSecurity", status: "In Progress (Target: Q4 2026)", color: "border-purple-500/25 text-purple-400 bg-purple-950/20" },
              { title: "Certified Ethical Hacker (CEH v13)", org: "EC-Council", status: "In Progress (Target: 2026)", color: "border-blue-500/25 text-blue-400 bg-blue-950/20" },
              { title: "CISSP (Information Systems Security)", org: "ISC2", status: "Targeted (Q3 2027)", color: "border-indigo-500/25 text-indigo-400 bg-indigo-950/20" },
              { title: "OSCP (Offensive Security Certified)", org: "OffSec", status: "Targeted (2027+)", color: "border-rose-500/25 text-rose-400 bg-rose-950/20" },
              { title: "Active Directory Multi-Forest Labs", org: "HTB & VulnLab", status: "Mastery Level", color: "border-amber-500/25 text-amber-400 bg-amber-950/20" },
              { title: "MBA in Cybersecurity", org: "Chitkara University", status: "In Progress (Expected Jul 2027)", color: "border-emerald-500/25 text-emerald-300 bg-emerald-950/20" }
            ].map((cert, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border ${cert.color} backdrop-blur-xl flex flex-col justify-between space-y-2 hover:border-emerald-400/40 transition-all`}>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400">{cert.org}</div>
                  <div className="text-sm font-bold text-white mt-0.5">{cert.title}</div>
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 pt-2 border-t border-slate-800">
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: ACADEMIC EDUCATION */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>06 // Academic Higher Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-white">
              Degrees &amp; Cybersecurity Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[24px] bg-slate-900/60 border border-emerald-500/20 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold font-mono border border-emerald-500/20">Expected Jul 2027</span>
                <h3 className="text-lg font-bold font-title text-white">MBA in Cybersecurity</h3>
                <div className="text-xs text-slate-400 font-semibold">Chitkara University &bull; Punjab, India</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Postgraduate studies in enterprise cybersecurity risk governance, compliance frameworks, and defensive/offensive purple team alignment.
                </p>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold border-t border-slate-800 pt-3">
                In Progress (Active Coursework)
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold font-mono border border-cyan-500/20">2019 &mdash; 2022</span>
                <h3 className="text-lg font-bold font-title text-white">B.Tech &mdash; Computer Science &amp; Engineering</h3>
                <div className="text-xs text-slate-400 font-semibold">Manipal University Jaipur &bull; Rajasthan, India</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Undergraduate degree in CSE with extensive coursework in Network Security, Operating Systems, Cryptography, and Distributed Systems.
                </p>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 font-bold border-t border-slate-800 pt-3">
                Completed &bull; B.Tech CSE
              </div>
            </div>

            <div className="p-6 rounded-[24px] bg-slate-900/60 border border-blue-500/20 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-all">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold font-mono border border-blue-500/20">2013 &mdash; 2018</span>
                <h3 className="text-lg font-bold font-title text-white">Diploma &mdash; Computer Science &amp; Engineering</h3>
                <div className="text-xs text-slate-400 font-semibold">Hindu College of Engineering &bull; Haryana, India</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Core engineering diploma covering computer networking, system administration, C/C++ programming, and digital electronics.
                </p>
              </div>
              <div className="text-[11px] font-mono text-blue-400 font-bold border-t border-slate-800 pt-3">
                Completed &bull; Diploma CSE
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TECHNICAL WRITE-UPS & FIELD BLUEPRINTS */}
        <section id="writeups" className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>07 // Technical Publications &amp; Field Blueprints</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-title text-white">
                Technical Write-Ups &amp; Defense Blueprints
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Sanitized threat hunting methodology, Active Directory attack chain reproductions, and compliance automation scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WRITE_UPS.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  setSelectedWriteUp(art);
                  setActiveWriteUpTab("overview");
                }}
                className="p-6 rounded-[24px] bg-slate-900/60 border border-emerald-500/15 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group backdrop-blur-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-title text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>Read Full Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: BEYOND SECURITY — ECOSYSTEM & SIDE PROJECTS */}
        <section className="space-y-6 pt-4">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              08 // Breadth &amp; Engineering Diversity
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-title text-white">
              Beyond Security &mdash; The Triad Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Side 1: CyberKarma */}
            <TiltWrapper tiltDeg={3}>
              <div className="rounded-[24px] bg-slate-900/60 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl h-full group hover:shadow-xl hover:shadow-amber-950/30 overflow-hidden">
                <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                  <img 
                    src="/cyberkarma_banner.jpg" 
                    alt="CyberKarma - Play Free Quizzes, Feed Street Dogs" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
                    Social Impact &bull; Animal Welfare
                  </span>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-title text-white group-hover:text-amber-400 transition-colors">
                        CyberKarma &mdash; Free Rice Charity Game
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 font-bold">cyberkarma.me</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Gamified cybersecurity and trivia education platform where correct answers generate ethical ad revenue to feed real street animals in Patna.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Next.js", "Free Rice Model", "Gamified Learning", "Ethical Ads", "Direct Charity"].map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950 border border-slate-800 text-amber-400/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <a 
                      href="https://cyberkarma.me" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/30 transition-all"
                    >
                      <span>Play &amp; Feed Animals</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://cyberkarma.me" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[11px] font-mono font-bold text-amber-400 hover:text-amber-300"
                    >
                      cyberkarma.me &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </TiltWrapper>

            {/* Side 2: JumpStreet */}
            <TiltWrapper tiltDeg={3}>
              <div className="rounded-[24px] bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl h-full group hover:shadow-xl hover:shadow-purple-950/30 overflow-hidden">
                <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                  <img 
                    src="/jumpstreet_banner.jpg" 
                    alt="JumpStreet - High-Frequency Quantitative Trading & Orca6 Bot" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    Quantitative &bull; High Frequency
                  </span>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-title text-white group-hover:text-purple-400 transition-colors">
                        JumpStreet Quant Platform (Orca6)
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 font-bold">jumpstreet.tech</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Statistical arbitrage quantitative trading architecture with real-time market data streaming, automated risk parameter execution, and embedded high-speed Orca6 VT100 terminal.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["TypeScript", "Algorithmic Arbitrage", "Orca6 Engine", "WebSocket Streaming", "Risk Controls"].map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950 border border-slate-800 text-purple-400/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <a 
                      href="https://jumpstreet.tech" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 rounded-xl border border-purple-500/30 transition-all"
                    >
                      <span>Visit jumpstreet.tech</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://jumpstreet.tech" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[11px] font-mono font-bold text-purple-400 hover:text-purple-300"
                    >
                      jumpstreet.tech &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </div>
        </section>

        {/* SECTION: ABOUT PROFILE */}
        <section id="about" className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>09 // Professional Summary</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-title text-white">
              Executive Profile &amp; Philosophy
            </h2>
          </div>

          <div className="p-8 rounded-[24px] bg-slate-900/60 border border-emerald-500/15 backdrop-blur-xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>Cybersecurity Engineer &amp; NGFW Architect at Ebix Technologies (Client: NIC, MeitY Govt. of India)</strong>, architecting default-deny NGFW estates (Palo Alto, Check Point, Fortinet) and managing SentinelOne, Deep Security, and Wazuh deployments across 750+ regional government endpoints.
            </p>
            <p>
              <strong>Primary CERT-In Incident Responder</strong> with hands-on proficiency in Active Directory attack-path analysis (Kerberoasting, AS-REP Roasting, DCSync, Pass-the-Hash, Delegation Abuse), web &amp; infrastructure VAPT, and digital forensics.
            </p>
            <p>
              <strong>Prior 24x7 CNI SOC Threat Hunter at Nuclear Fuel Complex (DAE)</strong>, conducting proactive threat hunts, reverse-engineering malware payloads, and tuning SIEM correlation rules to boost true-positive rates by 35%.
            </p>
            <p>
              Pursuing an <strong>MBA in Cybersecurity (Chitkara University)</strong>, B.Tech CSE (Manipal University Jaipur), holding <strong>Fortinet FCA</strong> and <strong>EC-Council SOC</strong>, with target completion for <strong>eJPT, CEH v13, CISSP, and OSCP</strong>.
            </p>
          </div>
        </section>

        {/* SECTION: CONTACT & RECRUITER REACH */}
        <section id="contact" className="space-y-8 pt-6">
          <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/25 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-cyan-950/40 backdrop-blur-2xl space-y-8 shadow-2xl">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT_CONTACT // OPEN_TO_OPPORTUNITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-title text-white">Let&apos;s Connect</h2>
              <p className="text-sm sm:text-base text-slate-300">
                Open for high-impact Cybersecurity Engineer, Purple Teamer, and SOC Lead roles.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-emerald-400 flex items-center justify-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Open to relocation: India (Delhi NCR/Blr/Hyd/Pune/Mum/Jaipur) &bull; UAE &bull; Singapore &bull; UK &bull; Germany (EU Blue Card) &bull; EU &bull; US</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a
                href="mailto:contact@adityasec32.systems"
                className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-2 group min-h-[44px]"
              >
                <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono font-bold text-white">Direct Email</div>
                <div className="text-[11px] font-mono text-slate-400">contact@adityasec32.systems</div>
              </a>

              <a
                href="https://www.linkedin.com/in/ajainx1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-2 group min-h-[44px]"
              >
                <Globe className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono font-bold text-white">LinkedIn Profile</div>
                <div className="text-[11px] font-mono text-slate-400">in/ajainx1</div>
              </a>

              <a
                href="https://github.com/ajainx1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/20 hover:border-purple-500/50 hover:bg-slate-900 transition-all flex flex-col items-center text-center space-y-2 group min-h-[44px]"
              >
                <Code2 className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono font-bold text-white">GitHub Code</div>
                <div className="text-[11px] font-mono text-slate-400">github.com/ajainx1</div>
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleQuickContact} className="max-w-xl mx-auto space-y-3 pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Drop a quick message, role invite, or question..."
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 min-h-[44px]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {contactSent && (
                <div className="text-xs font-mono text-emerald-400 text-center">
                  Redirecting to your default email client...
                </div>
              )}
            </form>

            {/* Bottom Download Resume */}
            <div className="text-center pt-6 border-t border-slate-800">
              <CyberResumeButton variant="bottom" />
            </div>

            {/* PGP & Security Disclosure */}
            <div className="pt-6 text-center space-y-2 text-[11px] font-mono text-slate-400">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={copyPgpKey}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PGP: 4A8B 92C1 3E7F 8902 B5D4 1A9C 77E0 63F8</span>
                  {copiedPgp ? <span className="text-emerald-400 font-bold ml-1">(Copied!)</span> : null}
                </button>
                <span>&bull;</span>
                <a href="/.well-known/security.txt" className="text-emerald-400 hover:underline">
                  security.txt Policy
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Technical Write-Up Deep Dive Reader Modal */}
      <AnimatePresence>
        {selectedWriteUp && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedWriteUp(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl font-sans text-slate-200 scrollbar-thin"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {selectedWriteUp.category}
                  </span>
                  <h3 className="text-2xl font-bold font-title text-white mt-2">
                    {selectedWriteUp.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-4">
                    <span>{selectedWriteUp.date}</span>
                    <span>&bull;</span>
                    <span>{selectedWriteUp.readTime}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedWriteUp(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Close Blueprint"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
                {[
                  { id: "overview", label: "Executive Overview" },
                  { id: "methodology", label: "Methodology & Steps" },
                  { id: "takeaways", label: "Defensive Mitigations" },
                  ...(selectedWriteUp.content.codeSnippet ? [{ id: "code", label: "Code / CLI Payload" }] : [])
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveWriteUpTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeWriteUpTab === tab.id
                        ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30"
                        : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                {activeWriteUpTab === "overview" && (
                  <div className="space-y-3">
                    <p className="text-base text-slate-200 leading-relaxed font-sans">{selectedWriteUp.content.overview}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedWriteUp.tags.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-950 border border-slate-800 text-emerald-400">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeWriteUpTab === "methodology" && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">Technical Execution Phases:</h4>
                    <ul className="space-y-3 pl-2">
                      {selectedWriteUp.content.methodology.map((m, i) => (
                        <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-200">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeWriteUpTab === "takeaways" && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">Defensive Playbook &amp; Controls:</h4>
                    <div className="space-y-2.5">
                      {selectedWriteUp.content.takeaways.map((t, i) => (
                        <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-emerald-500/20 text-xs sm:text-sm font-mono text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeWriteUpTab === "code" && selectedWriteUp.content.codeSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Executable Commands &amp; Rule Syntax:</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(selectedWriteUp.content.codeSnippet || "");
                        }}
                        className="px-2 py-1 rounded bg-slate-800 text-emerald-400 hover:text-emerald-300 text-xs font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed">
                      <code>{selectedWriteUp.content.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedWriteUp(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-white transition-colors min-h-[44px] cursor-pointer"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Case Study Modal */}
      <AnimatePresence>
        {caseStudyModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setCaseStudyModal(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-2xl bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl font-sans text-slate-200"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Architecture Blueprint (Sanitized)
                  </span>
                  <h3 className="text-xl font-bold font-title text-white mt-2">
                    CDAC / CERT-In Compliance Automation Engine &amp; LAN Asset Portal
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCaseStudyModal(false)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Challenge:</strong> 750+ government endpoints distributed across 38 regional districts required quarterly compliance auditing against 120+ mandatory CERT-In and NIST guidelines. Manual auditing took over 14 business days.
                </p>
                <p>
                  <strong>Architecture:</strong> Designed a zero-dependency PowerShell core packaged for silent orchestration via KACE UEM. Telemetry was aggregated into a central dashboard that triggered automated remediation GPO scripts for non-compliant endpoints.
                </p>
                <p>
                  <strong>LAN Asset Management:</strong> Integrated DHCP/PXE-based automated OS deployment and secure internal file distribution to ensure uniform endpoint configurations across the state.
                </p>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-emerald-300">
                  <div>✓ 60% reduction in manual engineer audit cycles across 750+ endpoints</div>
                  <div>✓ 100% visibility over unauthorized USB peripherals and dormant local admins</div>
                  <div>✓ Automated SHA-256 evidence logging directly mapped to ISO 27001 &amp; CERT-In</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCaseStudyModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-white transition-colors min-h-[44px] cursor-pointer"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
