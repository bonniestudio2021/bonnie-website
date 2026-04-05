import type { Metadata } from "next";
import LinksClient from "@/components/links-client";

export const metadata: Metadata = {
  title: "Links | Bonnie Studio",
  description: "Bonnie Studio 的所有連結 — 預約、服務、部落格、聯絡方式",
};

export default function LinksPage() {
  return <LinksClient />;
}
