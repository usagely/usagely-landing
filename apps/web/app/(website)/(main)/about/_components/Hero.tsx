const Hero = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Usagely</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We&apos;re building the open-source FinOps platform for the AI era.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h4 className="font-bold text-xl sm:text-2xl">
              Every token, prompt, and seat — accounted for.
            </h4>

            <p className="text-muted-foreground">
              AI spending grew 300% at most companies last year. Finance teams have no visibility.
              Engineering managers can&apos;t tell which tools deliver ROI. Shadow AI is everywhere.
            </p>
            <p className="text-muted-foreground">
              Usagely is the open-source alternative to closed-source FinOps tools —
              connecting to 40+ AI providers, detecting shadow usage, enforcing budgets,
              and surfacing savings recommendations. Self-hosted or cloud. AGPL-3.0 licensed.
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-transparent border border-border/40 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.12), transparent 50%)",
            }} />
            <div className="relative z-10 grid grid-cols-3 gap-3 p-8">
              {["$4.2M", "41", "SOC 2", "100%", "AGPL", "24/7"].map((v, i) => (
                <div key={i} className="aspect-square rounded-lg border border-border/40 bg-background/60 backdrop-blur flex items-center justify-center">
                  <span className="text-xs md:text-sm font-bold text-foreground/70">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
