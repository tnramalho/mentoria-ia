import { buttonVariants } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants(),
        "h-14 rounded-md px-7 text-base font-semibold tracking-tight shadow-[0_0_48px_-12px_var(--primary)] hover:bg-primary/90 hover:shadow-[0_0_64px_-8px_var(--primary)]",
        className,
      )}
    >
      {children}
    </a>
  );
}
