const WAVEFORM = [3, 6, 10, 7, 12, 5, 9, 14, 8, 4, 11, 6, 13, 9, 5, 8, 12, 7, 4, 10, 6, 3];

function Step({
  label,
  delay,
  align,
  children,
}: {
  label: string;
  delay: number;
  align: "start" | "end";
  children: React.ReactNode;
}) {
  return (
    <li
      className={`thread-step flex flex-col gap-2 ${align === "end" ? "items-end" : "items-start"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </li>
  );
}

export function HeroThread() {
  return (
    <figure className="relative">
      <div className="thread-line absolute top-6 bottom-10 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      <ol className="relative flex flex-col gap-7">
        <Step label="Problema" delay={500} align="start">
          <p className="max-w-[18rem] rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 text-[0.95rem] leading-snug">
            Thiago, tenho esse problema. Como você resolveria isso com IA?
          </p>
        </Step>

        <Step label="Thiago + IA" delay={1500} align="end">
          <div className="flex w-[17rem] items-center gap-3 rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-primary-foreground">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
            </svg>
            <span className="flex h-5 flex-1 items-center gap-[3px]" aria-hidden>
              {WAVEFORM.map((height, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-primary-foreground/70"
                  style={{ height: `${height + 4}px` }}
                />
              ))}
            </span>
            <span className="text-xs font-medium tabular-nums">2:00</span>
            <span className="sr-only">Áudio de 2 minutos</span>
          </div>
          <p className="max-w-[18rem] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-[0.95rem] leading-snug text-primary-foreground">
            Não faria assim. Abre o Claude, joga isso, pede X e depois faz Y.
          </p>
        </Step>

        <Step label="Solução" delay={2600} align="start">
          <p className="max-w-[18rem] rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 text-[0.95rem] leading-snug">
            Feito. Funcionou.
          </p>
        </Step>
      </ol>
      <figcaption className="mt-6 text-xs text-muted-foreground">
        Exemplo ilustrativo de como funciona o WhatsApp durante a semana.
      </figcaption>
    </figure>
  );
}
