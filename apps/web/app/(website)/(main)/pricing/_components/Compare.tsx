"use client";

import { CheckCircle2 as TickLogo, Minus } from "lucide-react";

type CellValue = true | false | string;

type Row = {
  label: string;
  values: [CellValue, CellValue, CellValue, CellValue];
};

type Section = {
  title: string;
  rows: Row[];
};

const PLANS = ["Open Source", "Starter", "Growth", "Enterprise"] as const;

const SECTIONS: Section[] = [
  {
    title: "Core platform",
    rows: [
      { label: "Spend dashboard & budgets", values: [true, true, true, true] },
      { label: "Anomaly detection", values: [true, true, true, true] },
      { label: "Savings recommendations", values: [true, true, true, true] },
      { label: "Shadow AI detection", values: [true, true, true, true] },
      { label: "Approval workflow", values: [true, true, true, true] },
      { label: "AI provider integrations", values: ["All 40+", "All 40+", "All 40+", "All 40+ + custom"] },
      { label: "Users", values: ["Unlimited", "Up to 15", "Up to 100", "Unlimited"] },
      { label: "Organizations", values: ["Unlimited", "1", "1", "Multiple"] },
    ],
  },
  {
    title: "Hosting & automation",
    rows: [
      { label: "Managed hosting", values: [false, true, true, true] },
      { label: "Backups & upgrades", values: [false, true, true, true] },
      { label: "Automated integration sync", values: [false, true, true, true] },
    ],
  },
  {
    title: "Alerts & reporting",
    rows: [
      { label: "Email alerts", values: [false, true, true, true] },
      { label: "Slack / webhook alerts", values: [false, false, true, true] },
      { label: "CSV / PDF export", values: [false, false, true, true] },
      { label: "Team-level budget segmentation", values: [false, false, true, true] },
    ],
  },
  {
    title: "Security & compliance",
    rows: [
      { label: "Basic RBAC (admin / viewer)", values: [false, false, true, true] },
      { label: "Full RBAC (admin, finance, viewer, team manager)", values: [false, false, false, true] },
      { label: "SSO / SAML (Okta, Google, Azure AD)", values: [false, false, false, true] },
      { label: "Audit logs", values: [false, false, false, true] },
      { label: "Self-hosted with commercial license", values: [true, false, false, true] },
    ],
  },
  {
    title: "Support & SLA",
    rows: [
      { label: "Community support (Discord + GitHub)", values: [true, true, true, true] },
      { label: "Email support", values: [false, "48h", "24h priority", true] },
      { label: "Dedicated Slack channel", values: [false, false, false, true] },
      { label: "Custom onboarding & data migration", values: [false, false, false, true] },
      { label: "Uptime SLA", values: [false, false, false, "99.9%"] },
    ],
  },
  {
    title: "Billing",
    rows: [
      { label: "License", values: ["AGPL-3.0", "Commercial", "Commercial", "Commercial"] },
      { label: "Billing", values: ["-", "Monthly", "Monthly", "Annual invoicing"] },
      { label: "Price", values: ["Free forever", "$49/mo", "$149/mo", "Custom"] },
    ],
  },
];

const Cell = ({ value }: { value: CellValue }) => {
  if (value === true) {
    return <TickLogo className="w-5 h-5 text-primary" aria-label="Included" />;
  }
  if (value === false) {
    return <Minus className="w-5 h-5 text-muted-foreground/40" aria-label="Not included" />;
  }
  return <p className="text-xs md:text-sm">{value}</p>;
};

const Compare = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10 lg:mb-14">
        <h3 className="text-2xl md:text-3xl font-bold">Compare Plans</h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Start free and self-hosted. Upgrade when you want us to handle the hosting,
          <br className="hidden sm:block" /> alerting, and integrations for you.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-5 gap-2 md:gap-4 font-bold mb-4 md:mb-6 sticky top-0 bg-background/90 backdrop-blur py-2 z-10">
            <h3 className="md:text-xl lg:text-2xl">Capability</h3>
            <div className="col-span-4 grid grid-cols-4 gap-2 items-center text-sm md:text-base text-center">
              {PLANS.map((plan, i) => (
                <h4
                  key={plan}
                  className={
                    i === 2
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-muted-foreground"
                  }
                >
                  {plan}
                  {i === 2 && (
                    <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                      · Popular
                    </span>
                  )}
                </h4>
              ))}
            </div>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title} className="mb-4 md:mb-6">
              <div className="grid grid-cols-5 gap-2 md:gap-4 py-3 border-b-2 border-border">
                <h4 className="text-sm md:text-base font-bold uppercase tracking-wide text-foreground col-span-5">
                  {section.title}
                </h4>
              </div>
              {section.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-5 gap-2 md:gap-4 font-medium border-b border-border/30 py-3 md:py-4 hover:bg-muted/20 transition-colors"
                >
                  <h4 className="text-[13px] md:text-sm text-foreground/80">{row.label}</h4>
                  <div className="col-span-4 grid grid-cols-4 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                    {row.values.map((v, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <Cell value={v} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compare;
