import { Button } from "@metallicjs/ui/components/button";
import { cn } from "@metallicjs/ui/lib/utils";
import Image from "next/image";

export default function MarketingClean() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-100 to-primary-50 dark:hidden" />

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
      </div>

      <div className="relative px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto pt-12 md:pt-14 lg:pt-16 pb-8 md:pb-10 flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 text-center items-center justify-center sm:w-[80%] md:w-[70%] mx-auto py-2 md:py-4">
          <div
            className={cn(
              "rounded-full py-1 px-2 flex gap-2 items-center justify-center",
              "border border-border/60 bg-background/80 backdrop-blur",
              "dark:bg-background/40 dark:border-border/40"
            )}
          >
            <span className="text-base" aria-hidden="true">✦</span>
            <p className="text-xs sm:text-sm text-foreground/90 dark:text-foreground">
              Open-source FinOps for AI — monitor, control, optimize
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
              Know Exactly What Your Team Spends on AI
            </h1>

            <p className="sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto text-muted-foreground dark:text-muted-foreground">
              Your team is spending $80,000/month on AI tools. You found out from the credit card statement.
              Usagely gives you full visibility — who spends what, on which tools, and whether it&apos;s within budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-6">
            <Button className="shadow-sm dark:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]" asChild>
              <a href="https://github.com/usagely/usagely">Get Started Free</a>
            </Button>

            <Button
              variant="outline"
              className={cn(
                "bg-background/60 backdrop-blur border-border/70",
                "hover:bg-muted/50",
                "dark:bg-background/30 dark:border-border/50 dark:hover:bg-muted/40"
              )}
              asChild
            >
              <a href="https://demo.usagely.io">View Demo</a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 md:w-[95%] lg:w-[92%] mx-auto">
          <div
            className={cn(
              "rounded-2xl overflow-hidden",
              "ring-1 ring-border/50",
              "shadow-[0_20px_60px_-25px_rgba(0,0,0,0.45)]",
              "dark:ring-border/40 dark:shadow-[0_30px_90px_-40px_rgba(0,0,0,0.95)]",
              "bg-[#0a0a0a]"
            )}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-white/5 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-white/50 font-mono">app.usagely.io/dashboard</span>
                </div>
              </div>
            </div>

            <Image
              src="/assets/website/dashboard/dashboard-hero.webp"
              alt="Usagely dashboard — unified AI spend visibility with KPI cards, anomaly detection, recommendations, and team-level breakdown"
              width={2400}
              height={2728}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
              className="w-full h-auto block"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent dark:from-background" />
        </div>
      </div>
    </section>
  );
}
