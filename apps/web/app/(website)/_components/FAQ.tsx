"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@metallicjs/ui/components/accordion";

import OpenIcon from "@/public/assets/website/accordion-open-icon.svg";
import CloseIcon from "@/public/assets/website/accordion-close-icon.svg";

const faqs = [
  {
    q: "What is Usagely?",
    a: "Usagely is the open-source FinOps platform built specifically for AI. It gives engineering and finance teams full visibility into AI costs — who is spending what, on which tools, and whether that spend is within budget.",
  },
  {
    q: "Is Usagely really free?",
    a: "Yes. The self-hosted version is free forever under AGPL-3.0. You get all core features: dashboard, budgets, anomaly detection, savings recommendations, shadow AI detection, and approval workflows. No limits on users, tools, or organizations.",
  },
  {
    q: "What AI providers does Usagely support?",
    a: "Usagely integrates directly with OpenAI, Anthropic, AWS Bedrock, GitHub Copilot, Cursor, Azure OpenAI, Google Vertex AI, and more. Each integration pulls usage and cost data automatically.",
  },
  {
    q: "Can I self-host Usagely?",
    a: "Absolutely. Usagely runs on your infrastructure with full data ownership. Clone the repo, configure your database, and you're running in under 5 minutes. Docker support makes deployment trivial.",
  },
  {
    q: "What is Shadow AI?",
    a: "Shadow AI refers to AI tools that employees use without company approval or knowledge. Studies show 65% of employees use unapproved AI tools (Gartner). Usagely detects these via expense reports, SSO logs, and network monitoring.",
  },
  {
    q: "How is Usagely different from cloud cost tools?",
    a: "Cloud FinOps tools like Infracost track EC2 and S3 — not LLM tokens or Copilot seats. Usagely is purpose-built for AI/LLM spending, built around tokens, models, tools, and prompts instead of VMs and storage buckets.",
  },
  {
    q: "What license does Usagely use?",
    a: "The open-source version uses AGPL-3.0, which means you can self-host freely. A commercial license is available for the Enterprise Edition, which removes AGPL obligations and adds SSO, RBAC, and audit logs.",
  },
  {
    q: "How do I get started?",
    a: "Clone the repo, run `make dev`, and you'll see a dashboard with sample data in under 5 minutes. Then plug in your OpenAI or Anthropic API keys to see your real AI spending.",
  },
  {
    q: "What's the difference between OSS and Cloud?",
    a: "The OSS version is self-hosted with all core features. Usagely Cloud adds managed hosting, automated integration sync, email/Slack alerts, and enterprise features like SSO and RBAC. You can migrate between them at any time.",
  },
  {
    q: "Can I contribute to Usagely?",
    a: "Yes! Usagely is open-source and welcomes contributions. Check our GitHub repo for good first issues, read the CONTRIBUTING.md guide, and join our Discord community.",
  },
];

const FAQ = ({
  maxWidth = "max-w-5xl",
  headingsAlign = "text-center",
  showBubble = false,
  subtitle,
}: {
  maxWidth?: "max-w-5xl" | "max-w-7xl";
  headingsAlign?: "text-center" | "text-left";
  subtitle?: string;
  showBubble?: boolean;
}) => {
  return (
    <section className="px-4 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div
        className={`flex flex-col gap-2 ${headingsAlign} mb-6 md:mb-10 ${maxWidth} mx-auto`}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h3>

        {subtitle ? (
          <p className="text-sm sm:text-base font-medium text-muted-foreground mx-auto xs:w-4/5 md:w-3/5">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className={`mx-auto ${maxWidth}`}>
        <Accordion type="multiple" className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-2 data-[state=closed]:border-none data-[state=open]:border-primary-700 my-3 md:my-4 rounded-xl cursor-pointer"
            >
              <AccordionTrigger
                openIcon={<OpenIcon />}
                closeIcon={<CloseIcon />}
                className="rounded-xl border-2 data-[state=closed]:border-input data-[state=open]:border-none py-2 px-3 xs:py-3 xs:px-5 lg:px-7 xl:px-8 cursor-pointer font-bold text-lg md:text-xl"
              >
                {item.q}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance py-2 px-3 xs:py-3 xs:px-5 lg:px-7 text-muted-foreground">
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {showBubble ? (
        <div className="mt-4 md:mt-6 max-w-5xl mx-auto xs:w-11/12 sm:w-10/12">
          <p className="flex items-center justify-center p-2 md:py-3 bg-sidebar-border text-muted-foreground rounded-lg text-xs md:text-sm text-center">
            Usagely is open-source, self-hostable, and free forever. Or let us handle everything with Usagely Cloud.
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default FAQ;
