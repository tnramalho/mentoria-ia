"use client";

import { useEffect, useState } from "react";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

export function StickyCta({ heroId }: { heroId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <WhatsAppCta className="h-12 w-full">Quero uma das 5 vagas</WhatsAppCta>
    </div>
  );
}
