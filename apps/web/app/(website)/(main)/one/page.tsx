import Hero from "@/app/(website)/_components/Hero";
import FAQ from "@/app/(website)/_components/FAQ";
import Demo from "@/app/(website)/_components/Demo";
import Pricing from "@/app/(website)/_components/Pricing";
import Started from "@/app/(website)/_components/Started";
import Benefits from "./_components/Benefits";
import Boilerplate from "./_components/Boilerplate";
import Works from "./_components/Works";
import Trusted from "@website/_components/Trusted";
import Own from "./_components/Own";
import Testimonials from "@website/_components/Testimonials";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <>
          <Hero />
         <Trusted />
         <Boilerplate />
         <Benefits />
         <Own />
         <Works />
         <Testimonials />
         <Pricing />
         <FAQ
           subtitle="Quick answers about Usagely, open-source licensing, pricing, and deployment."
           showBubble
         />
         <Demo />
         <Started />        
    </>
  );
};

export default HomePage;
