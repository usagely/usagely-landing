import { Button } from "@metallicjs/ui/components/button";

const Started = ({
  subtitle = "Self-host free forever, or let us handle everything with Usagely Cloud.",
  title = "Ready to see where your AI budget goes?",
  buttonText = "Get Started Free",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 my-6 md:my-10 lg:my-14">
      <div
        className="relative overflow-hidden px-4 md:px-8 lg:px-12 max-w-5xl mx-auto rounded-2xl py-10 md:py-14 text-center
        bg-primary-100 dark:bg-card
        border border-primary-200/60 dark:border-border/40
        shadow-[0_10px_40px_-20px_rgba(99,102,241,0.25)] dark:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
      >
        <div
          className="absolute inset-0 opacity-60 dark:opacity-80 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 0%, rgba(99,102,241,0.25), transparent 55%), radial-gradient(circle at 85% 100%, rgba(139,92,246,0.2), transparent 55%)",
          }}
        />
        <div className="relative flex flex-col gap-4 md:gap-6 justify-center items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h4>
          <p className="text-sm sm:text-base text-foreground/70 max-w-xl">
            {subtitle}
          </p>
          <Button className="shadow-sm">{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default Started;
