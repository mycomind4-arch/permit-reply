import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE_ORIGIN = "https://permit-reply.pages.dev";
const WORKFLOWS = [
  ["Permits & Plan Review", ["Permit correction response", "Plan review comment response", "Permit resubmission response"]],
  ["Inspections & Compliance", ["Failed inspection response", "Inspection correction response"]],
  ["Planning & Zoning", ["Zoning notice response", "Planning department response"]],
  ["Denials & Adverse Decisions", ["Permit denial response"]],
];

export const Route = createFileRoute("/workflows/")({
  head: () => ({
    meta: [
      { title: "Permit Reply Workflows — Permits, Planning, Zoning & Inspections" },
      { name: "description", content: "Permit and planning workflow families for corrections, plan-review comments, inspections, zoning notices, planning correspondence, and permit denials." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Permit Reply Workflows" },
      { property: "og:description", content: "Permit and planning correspondence workflows by MailMyPDF." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Permit Reply · MailMyPDF" },
      { property: "og:url", content: SITE_ORIGIN + "/workflows" },
    ],
    links: [{ rel: "canonical", href: SITE_ORIGIN + "/workflows" }],
  }),
  component: WorkflowsDirectory,
});

function WorkflowsDirectory() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <section className="border-b border-rule/60 bg-paper-deep/20">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
            <div className="postmark w-fit">Permit Reply · Workflow Directory</div>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Permit, planning, zoning, and inspection workflows.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Organize the source documents, project facts, agency comments, correction items, deadlines, supporting evidence, and response points for permit-related correspondence.
            </p>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="space-y-12">
              {WORKFLOWS.map(([category, items]) => (
                <section key={category}>
                  <div className="mb-5 flex items-center gap-3">
                    <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{category}</h2>
                    <span className="h-px flex-1 bg-rule/60" />
                    <span className="font-mono text-xs text-muted-foreground">{items.length}</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((title) => (
                      <article key={title} className="rounded-xl border border-rule bg-card p-6">
                        <h3 className="font-serif text-xl leading-snug">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">Permit Reply workflow family. Detailed interactive implementations can use the shared MailMyPDF document, evidence, review, and mailing infrastructure.</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
