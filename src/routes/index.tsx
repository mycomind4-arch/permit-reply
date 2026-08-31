import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SITE_ORIGIN = "https://permit-reply.pages.dev";

const WORKFLOWS = [
  { title: "Permit Correction Response", detail: "Track each correction item, the governing plan or document, the response, and the resubmission record." },
  { title: "Plan Review Comment Response", detail: "Organize plan-review comments into a point-by-point response supported by the project record." },
  { title: "Failed Inspection Response", detail: "Document inspection findings, corrective work, evidence, and the next inspection or submission step." },
  { title: "Zoning Notice Response", detail: "Organize the zoning issue, property facts, deadlines, supporting records, and written response." },
  { title: "Planning Department Response", detail: "Prepare a structured response to planning comments, requests, or administrative correspondence." },
  { title: "Permit Denial Response", detail: "Preserve the denial reasons, project record, supporting evidence, and the path for reconsideration or appeal." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Permit Reply — Permit, Planning & Inspection Correspondence" },
      { name: "description", content: "Permit Reply organizes permit corrections, plan-review comments, failed inspections, zoning notices, planning correspondence, and permit-denial responses." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Permit Reply — Permit, Planning & Inspection Correspondence" },
      { property: "og:description", content: "Permit and planning correspondence workflows by MailMyPDF." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Permit Reply · MailMyPDF" },
      { property: "og:url", content: SITE_ORIGIN + "/" },
    ],
    links: [{ rel: "canonical", href: SITE_ORIGIN + "/" }],
  }),
  component: PermitReplyHome,
});

function PermitReplyHome() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <section className="border-b border-rule/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="max-w-3xl">
              <div className="postmark w-fit">Permit Reply · MailMyPDF</div>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
                Understand the requirement.<br />
                Organize the project record.<br />
                <span className="italic text-stamp">Respond precisely.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                Permit Reply is the permit, planning, zoning, and inspection correspondence vertical for keeping project records, deadlines, comments, evidence, and written responses organized.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-rule/60 bg-paper-deep/20">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Permit matters</div>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Core workflow families</h2>
              </div>
              <div className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:block">Domain: Permits / Planning</div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {WORKFLOWS.map((workflow) => (
                <article key={workflow.title} className="rounded-xl border border-rule bg-card p-6">
                  <h3 className="font-serif text-xl leading-snug">{workflow.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{workflow.detail}</p>
                  <div className="mt-5 border-t border-rule/50 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-stamp">Workflow family</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-rule/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              <Principle title="Record" text="Start with the permit application, correction notice, inspection report, plan-review comment, or other source document." />
              <Principle title="Map" text="Separate project facts from agency requirements, identify deadlines, and connect each response point to supporting evidence." />
              <Principle title="Reply" text="Prepare a clear point-by-point response that can be reviewed before submission or mailing." />
            </div>
          </div>
        </section>

        <section className="border-t border-rule/60 bg-ink text-paper">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <div className="postmark mx-auto w-fit">MailMyPDF ecosystem</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">A distinct permit domain on shared ecosystem infrastructure.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-paper/70 sm:text-base">
              Permit Reply owns permit and planning correspondence. Shared identity, mailing, proof, security, and workflow infrastructure comes from MailMyPDF.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-rule bg-card p-6">
      <div className="font-mono text-xs text-stamp">{title}</div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
