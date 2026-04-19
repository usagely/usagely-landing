import { cn } from "@metallicjs/ui/lib/utils";
import CheckmarkIcon from "@/public/assets/website/checkmark-icon.svg";

interface TextGridProps {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: "chart" | "bell" | "eye" | "lightbulb" | "plug" | "shield";
  items: string[];
  reverse?: boolean;
  vertical?: boolean;
}

const TextGrid = ({
  title,
  subtitle,
  icon,
  items,
  reverse = false,
  vertical,
}: TextGridProps) => {
  const Visual = <IconVisual icon={icon ?? "chart"} />;

  if (vertical)
    return (
      <div className="p-1 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border h-full w-full">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center justify-center">{Visual}</div>

          <div className="flex flex-col gap-2 justify-center mx-auto bg-card dark:bg-sidebar-border p-4 rounded-md">
            <h4 className="font-bold text-lg sm:text-xl">{title}</h4>

            {subtitle ? (
              <p className="text-muted-foreground">{subtitle}</p>
            ) : null}

            {items.map((text, i) => (
              <TextGridItem key={i}>{text}</TextGridItem>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-6 md:gap-8 items-center",
        reverse ? "md:[&>*:first-child]:order-2" : ""
      )}
    >
      <div className="flex items-center justify-center">{Visual}</div>

      <div className="flex flex-col gap-4 justify-center max-w-[700px] mx-auto">
        <h4 className="font-bold text-lg sm:text-xl">{title}</h4>

        {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}

        {items.map((text, i) => (
          <TextGridItem key={i}>{text}</TextGridItem>
        ))}
      </div>
    </div>
  );
};

export default TextGrid;

interface TextGridItemProps {
  children: React.ReactNode;
}

const TextGridItem = ({ children }: TextGridItemProps) => {
  return (
    <div className="shadow-(--card-shadow) p-1 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
      <div className="flex gap-2 items-center p-2 bg-card dark:bg-sidebar-border rounded-md text-muted-foreground">
        <CheckmarkIcon className="shrink-0" />
        <p className="xl:text-lg">
          <RenderHTML html={String(children)} />
        </p>
      </div>
    </div>
  );
};

function IconVisual({ icon }: { icon: "chart" | "bell" | "eye" | "lightbulb" | "plug" | "shield" }) {
  return (
    <div className="relative aspect-square w-full max-w-sm rounded-2xl bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-transparent border border-border/40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.12), transparent 50%)",
      }} />
      <div className="relative z-10 text-primary-500 dark:text-primary-400">
        {renderIcon(icon)}
      </div>
    </div>
  );
}

function renderIcon(icon: string) {
  const common = "w-24 h-24 md:w-32 md:h-32";
  switch (icon) {
    case "chart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <rect x="7" y="12" width="3" height="6" fill="currentColor" opacity="0.3" />
          <rect x="12" y="8" width="3" height="10" fill="currentColor" opacity="0.5" />
          <rect x="17" y="4" width="3" height="14" fill="currentColor" opacity="0.7" />
        </svg>
      );
    case "bell":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          <circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case "eye":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "plug":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-5" />
          <path d="M9 7V2" />
          <path d="M15 7V2" />
          <path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

const RenderHTML = ({ html }: { html: string }) => {
  const safe = sanitizeInlineHtml(html);
  return <span dangerouslySetInnerHTML={{ __html: safe }} />;
};

function sanitizeInlineHtml(input: string) {
  let out = input
    .replace(/<\s*script[^>]*>[\s\S]*?<\s*\/\s*script\s*>/gi, "")
    .replace(/<\s*style[^>]*>[\s\S]*?<\s*\/\s*style\s*>/gi, "");

  out = out.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "");
  out = out.replace(/\s(href|src)\s*=\s*(['"])\s*javascript:.*?\2/gi, "");
  out = out.replace(/<(\/?)(?!span\b|br\b)[^>]*>/gi, "");

  out = out.replace(/<span\b([^>]*)>/gi, (match, attrs) => {
    const hasBold = /\bclass\s*=\s*(['"])\s*font-bold\s*\1/i.test(attrs);
    return hasBold ? "<span class='font-bold'>" : "<span>";
  });

  return out;
}
