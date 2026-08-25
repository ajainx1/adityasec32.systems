"use client";
import dynamic from "next/dynamic";

const ThreeDArtBackground = dynamic(
  () => import("@/components/3d/ThreeDArtBackground"),
  { ssr: false }
);

export default function Background3D() {
  return <ThreeDArtBackground />;
}
