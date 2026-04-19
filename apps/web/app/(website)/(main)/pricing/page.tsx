import FAQ from "@/app/(website)/_components/FAQ";
import Started from "@/app/(website)/_components/Started";

import Compare from "./_components/Compare";
import { Metadata } from "next";
import { SITE } from "@/config";
import { JsonLd } from "../../_components/seo/JsonLd";
import { pricingOfferCatalogJsonLd } from "@/lib/seo/schema";
import Pricing from "../../_components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
};

const pageUrl = new URL("/pricing", SITE.url).toString();

const plans = [
  {
    name: "Open Source",
    description: "Self-hosted, free forever",
    price: 0,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
  {
    name: "Starter",
    description: "Managed hosting for small teams",
    price: 49,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
  {
    name: "Growth",
    description: "For teams with real AI budgets",
    price: 149,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
  {
    name: "Enterprise",
    description: "Custom pricing for large orgs",
    price: 0,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
];

const PricingPage = () => {
  return (
    <>
      <JsonLd
        data={pricingOfferCatalogJsonLd({
          pageUrl,
          plans,
        })}
      />
      <Pricing />
      <Compare />
      <FAQ />
      <Started />
    </>
  );
};

export default PricingPage;
