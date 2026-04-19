import TextGrid from "@/app/(website)/_components/TextGridCard";

import {
  spendDashboardData,
  budgetAlertsData,
  shadowAiData,
  savingsRecommendationsData,
  integrationsData,
  openSourceTrustData,
} from "@/lib/text-data";

const worksData = [
  spendDashboardData,
  budgetAlertsData,
  shadowAiData,
  savingsRecommendationsData,
  integrationsData,
  openSourceTrustData,
];

const Works = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14" id="integrations">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Built for the Way Teams Use AI
        </h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          Purpose-built FinOps for AI — not a cloud cost tool bolted on
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24">
        {worksData.map((section, i) => (
          <TextGrid
            key={i}
            title={section.title}
            image={section.image}
            items={section.items}
            reverse={section.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
