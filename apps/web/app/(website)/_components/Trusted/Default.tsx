import { cn } from "@metallicjs/ui/lib/utils";

const providers = [
  "OpenAI",
  "Anthropic",
  "AWS Bedrock",
  "GitHub Copilot",
  "Google Vertex AI",
  "Azure OpenAI",
  "Cohere",
  "Mistral",
];

export default function IntegratedWith({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <p className="text-center text-xs tracking-[0.08em] uppercase text-muted-foreground font-mono mb-8">
          Connects to 40+ AI providers — including
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {providers.map((name) => (
            <span
              key={name}
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium",
                "border border-border/60 bg-background/80",
                "text-foreground/80 hover:text-foreground hover:border-border",
                "transition-colors duration-150",
                "dark:bg-background/40 dark:border-border/40 dark:hover:border-border/70"
              )}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
