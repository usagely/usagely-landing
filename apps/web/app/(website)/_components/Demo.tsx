const Demo = ({ coloredBg = false }: { coloredBg?: boolean }) => {
  return (
    <section
      className={`py-8 md:py-10 my-6 md:my-10 ${
        coloredBg ? "bg-background dark:bg-sidebar-border" : ""
      }`}
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">
          See Your AI Spend in One Place
        </h3>
        <p className="text-center text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
          Aggregate costs across OpenAI, Anthropic, AWS Bedrock, GitHub Copilot, and 40+ other providers — by team, user, and project.
        </p>
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-border/50 bg-card dark:bg-popover shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30 dark:bg-muted/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground/60 font-mono">app.usagely.io/dashboard/spend</span>
            </div>
          </div>
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground/60 uppercase tracking-wide">This Month</div>
                <div className="text-4xl md:text-5xl font-bold">$82,430</div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">↓ 12% vs last month</div>
              </div>
              <div className="space-y-2">
                <ProviderRow name="OpenAI" amount="$34,210" pct={42} color="bg-blue-500/70" />
                <ProviderRow name="Anthropic" amount="$21,890" pct={27} color="bg-orange-500/70" />
                <ProviderRow name="GitHub Copilot" amount="$18,420" pct={22} color="bg-purple-500/70" />
                <ProviderRow name="AWS Bedrock" amount="$7,910" pct={9} color="bg-green-500/70" />
              </div>
            </div>
            <div className="relative h-64 rounded-lg border border-border/30 p-4 flex items-end gap-2">
              {[45, 62, 58, 71, 68, 82, 73].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t bg-gradient-to-t from-primary-500/60 to-primary-400/40" style={{ height: `${h}%` }} />
                  <span className="text-[9px] text-muted-foreground/50">W{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProviderRow({ name, amount, pct, color }: { name: string; amount: string; pct: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/70">{name}</span>
        <span className="font-medium">{amount}</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default Demo;
