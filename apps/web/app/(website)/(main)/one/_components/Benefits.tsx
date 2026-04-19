"use client";

import BenefitCard from "@/app/(website)/_components/BenefitCard";

import ProductionIcon from "@/public/assets/website/production-icon.svg";
import CodegenIcon from "@/public/assets/website/codegen-icon.svg";
import TypesafeIcon from "@/public/assets/website/typesafe-icon.svg";
import BillingIcon from "@/public/assets/website/billing-icon.svg";
import PolishedIcon from "@/public/assets/website/polished-icon.svg";
import CmsIcon from "@/public/assets/website/cms-icon.svg";

const benefits = [
  {
    icon: <ProductionIcon />,
    title: "Spend Dashboard",
    description:
      "Daily totals, per-tool, per-model, and per-user cost breakdown. See every dollar of your AI spending.",
  },
  {
    icon: <CodegenIcon />,
    title: "Budget Management",
    description:
      "Set monthly or quarterly budgets with alert thresholds by team or scope. Get warned before overruns happen.",
  },
  {
    icon: <TypesafeIcon />,
    title: "Anomaly Detection",
    description:
      "Automatic flagging of unusual spend spikes or budget overruns. Never be surprised by an AI bill again.",
  },
  {
    icon: <BillingIcon />,
    title: "Savings Recommendations",
    description:
      "Confidence-scored suggestions to reduce AI costs with effort estimates. Actionable, not just observable.",
  },
  {
    icon: <PolishedIcon />,
    title: "Shadow AI Detection",
    description:
      "Identify unapproved AI tools discovered via expenses, SSO logs, or network scanning. Close the blind spots.",
  },
  {
    icon: <CmsIcon />,
    title: "Approval Workflow",
    description:
      "Request and approve or deny access to new AI tools. Governance without bureaucracy.",
  },
];

const Benefits = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" id="features">
          Everything You Need to Control AI Costs
        </h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Purpose-built FinOps for AI — not a cloud cost tool bolted on. Designed for tokens, models, tools, and teams.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8 xs:gap-4 lg:gap-12 max-w-5xl mx-auto">
        {benefits.map((item, index) => (
          <BenefitCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
