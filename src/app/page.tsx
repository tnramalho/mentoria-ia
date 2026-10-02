import { HeroThread } from "@/components/hero-thread";
import { StickyCta } from "@/components/sticky-cta";
import { WhatsAppCta } from "@/components/whatsapp-cta";

const HERO_ID = "inicio";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    body: "No primeiro encontro, vamos mapear sua rotina, empresa e principais gargalos.",
    highlight:
      "No final, você saberá as 5 maiores oportunidades que eu atacaria com IA se estivesse no seu lugar.",
  },
  {
    number: "02",
    title: "1 encontro individual por semana",
    body: "Toda semana teremos aproximadamente 1 hora juntos. Sem aula pronta. Abrimos seu problema e trabalhamos nele.",
    highlight: "Problema, IA, aplicação prática.",
  },
  {
    number: "03",
    title: "Meu WhatsApp pessoal",
    body: "Apareceu alguma coisa durante a semana? Me chama. Manda áudio, manda print, manda o problema, manda a ideia.",
    highlight:
      "Se eu souber uma maneira melhor de fazer usando IA, eu te mostro o caminho.",
  },
];

const USE_CASES = [
  "Usar IA para analisar uma decisão",
  "Criar apresentações em minutos",
  "Pesquisar assuntos complexos",
  "Analisar documentos",
  "Melhorar seu processo comercial",
  "Criar conteúdo",
  "Analisar números",
  "Criar protótipos",
  "Usar Claude e ChatGPT de verdade",
  "Criar pequenos sistemas sem depender de uma equipe inteira",
  "Avaliar ferramentas",
  "Automatizar tarefas simples",
  "Estruturar processos",
  "Criar prompts que realmente funcionam",
];

const MY_USES = [
  {
    title: "Uma IA respondendo cada comentário",
    body: "Um vídeo de teste passou de 177 mil visualizações e recebeu quase 4 mil comentários. Quem atendeu foi uma IA que eu configurei.",
  },
  {
    title: "Segundo cérebro",
    body: "Toda conversa de trabalho que tenho com IA vira uma nota organizada sozinha: o que foi decidido, o que falta fazer e a qual projeto pertence.",
  },
  {
    title: "Um revisor com o meu critério",
    body: "Antes de eu dar qualquer coisa como pronta, um agente treinado no meu jeito de trabalhar revisa e me diz o que está ruim.",
  },
  {
    title: "Vídeos explicativos",
    body: "Pego um assunto complexo e transformo em vídeo narrado, passo a passo. Roteiro, voz e animação saem da IA.",
  },
  {
    title: "Reunião que vira plano",
    body: "A reunião acaba e eu já tenho a ata, as decisões e a lista do que muda, sem ninguém anotar nada.",
  },
  {
    title: "Sistema antigo que vira documentação",
    body: "A IA lê um sistema inteiro e me devolve as regras do negócio escritas, prontas para discutir com o time.",
  },
  {
    title: "Uma decisão por vez",
    body: "Cada decisão em aberto ganha seu próprio resumo e sua própria conversa com IA, e eu acompanho até fechar.",
  },
  {
    title: "Pequenas ferramentas para mim",
    body: "Um aviso falado antes de cada reunião, por exemplo. Coisas que eu nunca pararia para programar e hoje faço em uma tarde.",
  },
];

const INCLUDED = [
  { title: "12 encontros individuais", body: "1 encontro por semana." },
  {
    title: "WhatsApp pessoal",
    body: "Acesso direto a mim durante os 90 dias.",
  },
  {
    title: "Diagnóstico inicial",
    body: "As maiores oportunidades de IA para você e sua empresa.",
  },
  {
    title: "Aplicação prática",
    body: "Trabalhamos nos problemas que realmente estão acontecendo.",
  },
];

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-border py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip pb-24 md:pb-0">
      <header id={HERO_ID} className="relative isolate">
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto grid min-h-svh w-full max-w-6xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          <div>
            <p className="text-sm font-medium tracking-[0.14em] text-primary">
              MENTORIA PARTICULAR DE IA · 90 DIAS
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,7.2vw,5.25rem)] leading-[0.98] font-semibold tracking-[-0.035em]">
              Tenha alguém que vive IA todos os dias do seu lado.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Durante 90 dias, você terá acesso direto a mim para descobrir,
              aplicar e usar IA de forma prática no seu trabalho e na sua
              empresa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <WhatsAppCta>Quero uma das 5 vagas</WhatsAppCta>
              <p className="text-sm text-muted-foreground">
                1 encontro individual por semana
                <br />+ WhatsApp pessoal
              </p>
            </div>
          </div>
          <div className="lg:pl-6">
            <HeroThread />
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-5xl">
            Você provavelmente está usando 10% do que a IA poderia fazer por
            você.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Todo dia surge uma ferramenta nova. ChatGPT. Claude. Agentes.
              Automações. Lovable. Novos modelos.
            </p>
            <p>
              O problema não é falta de informação. É saber o que realmente
              vale a pena para você.
            </p>
            <p>
              Você não precisa assistir mais 100 horas de conteúdo sobre IA.
              Precisa conseguir perguntar:
            </p>
            <p className="border-l-2 border-primary pl-5 font-heading text-2xl leading-snug text-foreground">
              “Thiago, tenho esse problema. Como você resolveria isso com IA?”
            </p>
            <p>É exatamente para isso que essa mentoria existe.</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-[clamp(3rem,11vw,8.5rem)] leading-[0.92] font-semibold tracking-[-0.04em]">
          Não é um curso.
        </h2>
        <div className="mt-12 grid gap-8 text-lg leading-relaxed md:grid-cols-3">
          <p className="text-muted-foreground">
            Não existem 200 aulas gravadas esperando você assistir.
          </p>
          <p className="text-muted-foreground">
            Não existe uma metodologia engessada. Não vou ensinar IA de forma
            genérica.
          </p>
          <p>
            Durante 90 dias, vamos trabalhar nos seus problemas reais. Toda
            semana você traz o que está acontecendo. E nós usamos IA para
            resolver juntos.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Como funciona
        </h2>
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((step) => (
            <li key={step.number} className="border-t border-primary/40 pt-6">
              <span className="font-heading text-sm font-medium text-primary tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              <p className="mt-4 leading-relaxed">{step.highlight}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-5xl">
            O que podemos fazer juntos?
          </h2>
          <div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {USE_CASES.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3.5 leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg text-muted-foreground">
              Ou simplesmente responder:
            </p>
            <p className="mt-3 font-heading text-2xl leading-snug md:text-3xl">
              “Existe uma maneira melhor de fazer isso com IA?”
            </p>
            <WhatsAppCta className="mt-10 hidden md:inline-flex">
              Quero uma das 5 vagas
            </WhatsAppCta>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl">
            Você não precisa virar especialista em IA. Precisa saber usá-la
            quando importa.
          </h2>
          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Meu objetivo durante esses 90 dias é mudar sua relação com IA.
              Até chegar ao ponto em que, diante de um problema, você
              naturalmente pense:
            </p>
            <p className="border-l-2 border-primary pl-5 font-heading text-2xl leading-snug text-foreground">
              “Como eu resolveria isso usando IA?”
            </p>
            <p>E saiba exatamente por onde começar.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-5xl">
            Como eu uso IA no meu dia a dia
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nada aqui é teoria. São coisas que eu montei para o meu próprio
            trabalho e uso toda semana.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-12 md:grid-cols-2">
          {MY_USES.map((item) => (
            <li key={item.title} className="border-t border-border py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="text-muted-foreground">Quem vai estar do seu lado</p>
            <h2 className="mt-3 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-5xl">
              Thiago Ramalho
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              Desenvolvedor de software desde 2009.
            </p>
            <p>
              Trabalho com empresas e tecnologia há mais de 15 anos e, nos
              últimos anos, IA passou a fazer parte de praticamente tudo que
              construo.
            </p>
            <p>
              Já trabalhei com aplicações envolvendo agentes de IA, automação,
              desenvolvimento de software, vendas, atendimento, produto e
              processos empresariais.
            </p>
            <p>
              Também ministro treinamentos e workshops sobre aplicação prática
              de IA em empresas.
            </p>
            <p className="text-foreground">
              Vencedor de um Hackathon da Anthropic em 2023.
            </p>
            <p>
              Não quero te ensinar teoria sobre o futuro da IA. Quero abrir sua
              tela e usar IA para resolver os problemas que você tem hoje.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] font-semibold tracking-[-0.04em]">
              90 dias
            </h2>
            <dl className="mt-10">
              {INCLUDED.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-1 border-t border-border py-5 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="text-muted-foreground">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-primary/30 bg-card p-7 md:p-10 lg:self-end">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Apenas 5 vagas
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A limitação não é marketing. Sou eu pessoalmente acompanhando
              cada pessoa. Por isso, essa primeira turma terá apenas 5
              participantes.
            </p>
            <p className="mt-10 text-sm text-muted-foreground">
              Condição para as primeiras vagas
            </p>
            <p className="mt-2 font-heading text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
              R$ 7.500{" "}
              <span className="text-xl font-medium tracking-normal text-muted-foreground">
                à vista
              </span>
            </p>
            <p className="mt-2 text-muted-foreground">
              ou condições de parcelamento sob consulta.
            </p>
            <WhatsAppCta className="mt-8 w-full">
              Quero conversar com Thiago
            </WhatsAppCta>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl">
            Talvez você não precise de mais uma ferramenta de IA.
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Talvez precise de alguém do seu lado que saiba o que fazer com
            elas.
          </p>
          <WhatsAppCta className="mt-10">Quero uma das 5 vagas</WhatsAppCta>
        </div>
      </Section>

      <footer className="border-t border-border py-8">
        <p className="mx-auto w-full max-w-6xl px-5 text-sm text-muted-foreground md:px-8">
          Thiago Ramalho. Mentoria particular de IA.
        </p>
      </footer>

      <StickyCta heroId={HERO_ID} />
    </main>
  );
}
