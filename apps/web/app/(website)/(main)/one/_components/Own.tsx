"use client";

import OwnCard from "@/app/(website)/_components/OwnCard";

import ProductionIcon from "@/public/assets/website/production-icon.svg";
import CodegenIcon from "@/public/assets/website/codegen-icon.svg";
import TypesafeIcon from "@/public/assets/website/typesafe-icon.svg";
import DocsIcon from "@/public/assets/website/docs-icon.svg";
import PolishedIcon from "@/public/assets/website/polished-icon.svg";
import CmsIcon from "@/public/assets/website/cms-icon.svg";

const ownItems = [
  {
    icon: <ProductionIcon />,
    title: "Connect in Minutes",
    description:
      "Plug in your OpenAI, Anthropic, or AWS Bedrock API keys and start seeing real data immediately.",
  },
  {
    icon: <CodegenIcon />,
    title: "Real-Time Visibility",
    description:
      "Unified dashboard shows every AI tool, model, and team with real spend numbers — not estimates.",
  },
  {
    icon: <TypesafeIcon />,
    title: "Set Budgets & Alerts",
    description:
      "Define monthly or quarterly budgets per team. Get notified at thresholds before overruns happen.",
  },
  {
    icon: <DocsIcon />,
    title: "Detect Shadow AI",
    description:
      "Automatically discover unapproved AI tools via expenses, SSO logs, or network monitoring.",
  },
  {
    icon: <PolishedIcon />,
    title: "Get Savings Tips",
    description:
      "AI-generated recommendations with confidence scores and effort estimates to cut costs fast.",
  },
  {
    icon: <CmsIcon />,
    title: "Govern Without Friction",
    description:
      "Approval workflows for new AI tools that keep teams productive while maintaining control.",
  },
];

const Own = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          How Usagely Works
        </h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Connect your AI providers. See your spend in minutes. Optimize and save.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8 xs:gap-4 lg:gap-12 max-w-5xl mx-auto">
        {ownItems.map((item, index) => (
          <OwnCard key={index} {...item} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
        Self-host in under 5 minutes with Docker, or let us handle everything with Usagely Cloud.
      </p>
    </section>
  );
};

export default Own;
