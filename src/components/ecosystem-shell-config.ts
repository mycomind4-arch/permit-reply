/**
 * Permit Reply — Ecosystem Shell Config
 */
import { useAuth } from "@/lib/auth";
import type { EcosystemShellConfig } from "./ecosystem-shell";

export function useShellConfig(): EcosystemShellConfig {
  const { user, loading, signOut } = useAuth();
  return {
    brand: "Permit Reply",
    brandTagline: "Permit and planning correspondence by MailMyPDF",
    mailPdfUrl: "https://mailmypdf-etc.pages.dev/mail-a-pdf",
    workflowsUrl: "/workflows",
    howItWorksUrl: "/how-it-works",
    pricingUrl: "/pricing",
    authUrl: "/auth",
    startUrl: "/start",
    dashboardUrl: "/dashboard",
    productsUrl: "/products",
    currentProductSlug: "permit-reply",
    caseTerm: "Projects",
    ctaLabel: "Start a Project",
    theme: "default",
    auth: {
      user: user ? { email: user.email ?? "", fullName: (user as any).fullName, role: (user as any).role } : null,
      loading,
      signOut,
    },
  };
}
