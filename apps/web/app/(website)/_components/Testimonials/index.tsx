import { cn } from "@metallicjs/ui/lib/utils";
import { Github, Star, Shield, Server, Users } from "lucide-react";

export default function OpenSourceCommunity({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-24", className)}>
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.08em] uppercase text-muted-foreground font-mono mb-4">
            Open Source
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Built in the open. Self-host free forever.
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Usagely is AGPL-3.0 licensed. Audit the code, self-host on your infrastructure,
            or contribute to the project. No vendor lock-in, no data leaving your network.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border/60 bg-background/80 dark:bg-background/40">
              <Shield className="h-4 w-4 text-primary" />
              AGPL-3.0 Licensed
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border/60 bg-background/80 dark:bg-background/40">
              <Server className="h-4 w-4 text-primary" />
              Self-Hostable
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border/60 bg-background/80 dark:bg-background/40">
              <Users className="h-4 w-4 text-primary" />
              Community-Driven
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border/40 bg-card/50 dark:bg-card/20">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <span className="text-2xl font-bold font-mono tracking-tight">2.4k</span>
              </div>
              <span className="text-xs text-muted-foreground">GitHub Stars</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border/40 bg-card/50 dark:bg-card/20">
              <span className="text-2xl font-bold font-mono tracking-tight">41</span>
              <span className="text-xs text-muted-foreground">Integrations</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border/40 bg-card/50 dark:bg-card/20">
              <span className="text-2xl font-bold font-mono tracking-tight">$4.2M</span>
              <span className="text-xs text-muted-foreground">Saved by Users</span>
            </div>
          </div>

          <a
            href="https://github.com/usagely/usagely"
            className={cn(
              "inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-lg text-sm font-medium",
              "border border-border/60 bg-background hover:bg-muted/50",
              "transition-colors duration-150",
              "dark:bg-background/40 dark:hover:bg-muted/30"
            )}
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
