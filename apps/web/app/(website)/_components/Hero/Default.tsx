import { Button } from "@metallicjs/ui/components/button";
import { cn } from "@metallicjs/ui/lib/utils";

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

        <div className="relative z-10 md:w-[90%] mx-auto">
          <div
            className={cn(
              "rounded-2xl overflow-hidden",
              "ring-1 ring-border/50",
              "shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]",
              "dark:ring-border/40 dark:shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)]",
              "bg-card dark:bg-popover"
            )}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30 dark:bg-muted/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-background/60 dark:bg-background/30 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/60 font-mono">app.usagely.io/dashboard</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary-500/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400">U</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground/80">Usagely</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-16 rounded-md bg-muted/50" />
                  <div className="h-7 w-7 rounded-md bg-muted/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <DashboardStat label="Total Spend" value="$82,430" change="-12%" positive />
                <DashboardStat label="Active Users" value="147" change="+8%" positive />
                <DashboardStat label="API Calls" value="1.2M" change="+23%" positive={false} />
                <DashboardStat label="Budget Used" value="73%" change="" positive />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2 rounded-lg border border-border/30 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-foreground/70">Spend by Provider</div>
                    <div className="flex gap-1">
                      <div className="h-6 w-12 rounded bg-primary-500/10 text-[10px] flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">7d</div>
                      <div className="h-6 w-12 rounded bg-muted/30 text-[10px] flex items-center justify-center text-muted-foreground/60">30d</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-blue-500/60 dark:bg-blue-400/50" style={{ height: "85%" }} />
                      <span className="text-[9px] text-muted-foreground/50">OpenAI</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-orange-500/60 dark:bg-orange-400/50" style={{ height: "62%" }} />
                      <span className="text-[9px] text-muted-foreground/50">Anthropic</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-green-500/60 dark:bg-green-400/50" style={{ height: "45%" }} />
                      <span className="text-[9px] text-muted-foreground/50">Bedrock</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-purple-500/60 dark:bg-purple-400/50" style={{ height: "78%" }} />
                      <span className="text-[9px] text-muted-foreground/50">Copilot</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-cyan-500/60 dark:bg-cyan-400/50" style={{ height: "30%" }} />
                      <span className="text-[9px] text-muted-foreground/50">Vertex</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t bg-pink-500/60 dark:bg-pink-400/50" style={{ height: "18%" }} />
                      <span className="text-[9px] text-muted-foreground/50">Other</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border/30 p-4 space-y-3">
                  <div className="text-sm font-medium text-foreground/70">Top Users</div>
                  {[
                    { name: "Engineering", amount: "$34,210", pct: 42 },
                    { name: "Product", amount: "$21,890", pct: 27 },
                    { name: "Data Science", amount: "$18,420", pct: 22 },
                    { name: "Marketing", amount: "$7,910", pct: 9 },
                  ].map((user) => (
                    <div key={user.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground/60">{user.name}</span>
                        <span className="font-medium text-foreground/80">{user.amount}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                        <div className="h-full rounded-full bg-primary-500/50" style={{ width: `${user.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-yellow-600 dark:text-yellow-400">!</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground/70">Budget Alert: Engineering at 89%</div>
                    <div className="text-[10px] text-muted-foreground/60">$34,210 of $38,000 monthly budget used</div>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-3 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400">↗</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground/70">New tool detected: Cursor (12 users)</div>
                    <div className="text-[10px] text-muted-foreground/60">Auto-discovered via SSO integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent dark:from-background" />
        </div>
      </div>
    </section>
  );
}

function DashboardStat({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="rounded-lg border border-border/30 p-3 space-y-1">
      <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">{label}</div>
      <div className="text-lg font-bold text-foreground/80">{value}</div>
      {change && (
        <div className={cn("text-[10px] font-medium", positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
          {change} vs last month
        </div>
      )}
    </div>
  );
}
