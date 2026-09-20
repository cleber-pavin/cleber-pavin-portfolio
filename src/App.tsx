import { FormEvent, ReactNode, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import logoOriginal from "./assets/brand/identity/logo-principal-oficial.png";
import logoFooterWhite from "./assets/brand/logo-footer-white-cutout.png";
import logoHeaderOfficial from "./assets/brand/logo-header-cutout.png";
import logoIconOfficial from "./assets/brand/logo-icon-cutout.png";
import {
  brand,
  projects,
  segments,
  serviceGroups,
  whatsappUrl,
} from "./config";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);
const WhatsApp = () => (
  <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.821 9.821 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.9 7.027c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand brand--official ${footer ? "brand--footer" : ""}`}
      aria-label="Cleber Pavin, início"
    >
      {footer ? (
        <img
          src={logoFooterWhite}
          alt="Cleber Pavin, Tecnologia & Desenvolvimento"
        />
      ) : (
        <picture>
          <source media="(max-width: 768px)" srcSet={logoIconOfficial} />
          <img
            src={logoHeaderOfficial}
            alt="Cleber Pavin, Tecnologia & Desenvolvimento"
          />
        </picture>
      )}
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "nav open" : "nav"}
          aria-label="Navegação principal"
          onClick={() => setOpen(false)}
        >
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/segmentos">Segmentos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <Link className="button button--small" to="/orcamento">
            Solicitar orçamento <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand footer />
          <p>Tecnologia bem construída para negócios que querem avançar.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <Link to="/projetos">Projetos</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/segmentos">Segmentos</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
        <div>
          <h3>Soluções</h3>
          <span>Sites profissionais</span>
          <span>Sistemas</span>
          <span>Automações</span>
          <span>E-commerce</span>
        </div>
        <div>
          <h3>Vamos conversar?</h3>
          <a
            className="footer-whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chamar no WhatsApp: ${brand.phoneDisplay}`}
          >
            <WhatsApp />
            <span>{brand.phoneDisplay}</span>
          </a>
          <Link className="footer-cta" to="/orcamento">
            Solicitar orçamento <Arrow />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.name}. Todos os direitos
          reservados.
        </span>
        <span>{brand.position}</span>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <a
        className="whatsapp-float"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
      >
        <WhatsApp />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <i />
      {children}
    </p>
  );
}
function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="button" to={to}>
      {children}
      <Arrow />
    </Link>
  );
}

function TechCanvas() {
  return (
    <div className="tech-canvas" aria-hidden="true">
      <div className="canvas-label">
        Soluções digitais
        <br />
        sob medida
      </div>
      <img src={logoIconOfficial} alt="" />
      <span className="orbit orbit-a" />
      <span className="orbit orbit-b" />
      <div className="canvas-card card-a">
        <b>WEB</b>
        <span>Presença que vende</span>
      </div>
      <div className="canvas-card card-b">
        <b>SISTEMAS</b>
        <span>Operação organizada</span>
      </div>
      <div className="canvas-card card-c">
        <b>AUTOMAÇÃO</b>
        <span>Processos que fluem</span>
      </div>
    </div>
  );
}

function Home() {
  const solutions = [
    "Sites profissionais",
    "Catálogos digitais",
    "Sistemas",
    "Agendamentos",
    "Gestão",
    "Painéis administrativos",
    "Automações",
    "E-commerce",
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Cleber Pavin • Sites, sistemas e automação</Eyebrow>
            <h1>
              Tecnologia para negócios que precisam <span>vender melhor</span> e
              operar com mais clareza.
            </h1>
            <p>
              Desenvolvimento de sites, sistemas e automações para empresas que
              querem profissionalizar a presença digital e organizar a operação.
            </p>
            <div className="hero-actions">
              <PrimaryLink to="/orcamento">Solicitar orçamento</PrimaryLink>
              <Link className="text-link" to="/projetos">
                Ver projetos <Arrow />
              </Link>
            </div>
            <div className="hero-proof">
              <span>WEB</span>
              <i />
              <span>PROGRAMAÇÃO</span>
              <i />
              <span>AUTOMAÇÃO</span>
              <i />
              <span>SISTEMAS</span>
            </div>
          </div>
          <TechCanvas />
        </div>
      </section>
      <section className="solution-strip" aria-label="Soluções">
        <div className="container">
          <p>Soluções que entrego para negócios</p>
          <div>
            {solutions.map((item, i) => (
              <span key={item}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section projects-home">
        <div className="container">
          <SectionHead
            eyebrow="Projetos selecionados"
            title={
              <>
                Soluções pensadas para <span>problemas reais.</span>
              </>
            }
            text="Cada projeto começa pelo contexto do negócio: objetivo, operação e ponto de atrito. Sem solução genérica e sem excesso de destaque visual."
          />
          <div className="featured-projects">
            {projects
              .filter((p) => p.featured)
              .map((p, i) => (
                <article
                  className={`feature-project feature-project--real ${i === 0 ? "feature-project--lead" : ""}`}
                  key={p.slug}
                >
                  <div className="project-visual">
                    <span className="visual-index">0{i + 1}</span>
                    <img
                      src={p.cover}
                      alt={p.coverAlt}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <span className="real-label">Captura real do projeto</span>
                  </div>
                  <div className="project-copy">
                    <p className="tag">
                      {p.segment} · {p.solutionType}
                    </p>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <ul>
                      {p.features.slice(0, 4).map((f) => (
                        <li key={f}>
                          <Check />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="project-actions">
                      <Link className="text-link" to={`/projetos/${p.slug}`}>
                        Ver projeto <Arrow />
                      </Link>
                      {p.demoUrl && (
                        <a
                          className="text-link text-link--demo"
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Abrir demonstração <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <div className="section-action">
            <PrimaryLink to="/projetos">Explorar todos os projetos</PrimaryLink>
          </div>
        </div>
      </section>
      <section className="section approach">
        <div className="container approach-grid">
          <div>
            <SectionHead
              eyebrow="Mais que uma página bonita"
              title={
                <>
                  Seu digital precisa <span>trabalhar pelo negócio.</span>
                </>
              }
            />
            <p>
              A ideia é simples: resolver o problema do cliente com uma solução
              clara, funcional e coerente com o negócio, sem complicar o que
              pode ser bem organizado.
            </p>
            <PrimaryLink to="/servicos">Conhecer serviços</PrimaryLink>
          </div>
          <div className="approach-list">
            {[
              [
                "01",
                "Profissionalizar",
                "Uma presença que transmite confiança desde o primeiro acesso.",
              ],
              [
                "02",
                "Organizar",
                "Fluxos mais claros para atender, vender e gerenciar.",
              ],
              [
                "03",
                "Simplificar",
                "Tecnologia fácil de usar no celular e no dia a dia.",
              ],
              [
                "04",
                "Evoluir",
                "Estrutura preparada para acompanhar o próximo passo.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <b>{x[0]}</b>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

function Projects() {
  const cats = [
    "Todos",
    "Sites",
    "Catálogos",
    "Agendamento",
    "Sistemas",
    "E-commerce",
  ];
  const [filter, setFilter] = useState("Todos");
  const visible =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title={
          <>
            Soluções criadas para <span>situações reais.</span>
          </>
        }
        text="Projetos organizados como cases: contexto, objetivo e solução. Com transparência sobre o que foi desenvolvido."
      />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filtrar projetos">
            {cats.map((c) => (
              <button
                className={filter === c ? "active" : ""}
                onClick={() => setFilter(c)}
                key={c}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visible.map((p, i) => (
              <article
                className="project-card project-card--image"
                key={p.slug}
              >
                <img src={p.cover} alt={p.coverAlt} loading="lazy" />
                <div className="card-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <small>Captura real</small>
                </div>
                <div>
                  <p className="tag">
                    {p.segment} · {p.solutionType}
                  </p>
                  <h2>{p.name}</h2>
                  <p>{p.description}</p>
                </div>
                <div className="card-actions">
                  <Link to={`/projetos/${p.slug}`}>
                    Ver projeto <Arrow />
                  </Link>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer">
                      Abrir demonstração <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="empty">
              Ainda não há um case público nesta categoria.
            </p>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;
  return (
    <>
      <section className="case-hero case-hero--with-cover">
        <div className="container">
          <div className="case-intro">
            <Link className="back-link" to="/projetos">
              ← Voltar aos projetos
            </Link>
            <div className="case-meta">
              <span>{project.segment}</span>
              <span>{project.solutionType}</span>
            </div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="case-actions">
              {project.demoUrl && (
                <a
                  className="button case-demo"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir demonstração <Arrow />
                </a>
              )}
              <Link className="text-link" to="/orcamento">
                Solicitar projeto semelhante <Arrow />
              </Link>
            </div>
          </div>
          <div className="case-cover">
            <img src={project.cover} alt={project.coverAlt} />
            <span>Captura real · versão desktop</span>
          </div>
        </div>
      </section>
      <section className="section case-body">
        <div className="container case-layout">
          <aside>
            <span>CASE</span>
            <b>{project.name}</b>
            <small>{project.segment}</small>
          </aside>
          <div className="case-content">
            <article>
              <Eyebrow>Visão geral</Eyebrow>
              <h2>{project.overview}</h2>
              <p>{project.description}</p>
            </article>
            <article>
              <Eyebrow>Desafio</Eyebrow>
              <h2>O que precisava ser resolvido.</h2>
              <p>{project.challenge}</p>
            </article>
            <article>
              <Eyebrow>Solução</Eyebrow>
              <h2>Uma resposta coerente com a operação.</h2>
              <p>{project.solution}</p>
            </article>
            <section
              className="case-resources"
              aria-labelledby="case-resources-title"
            >
              <Eyebrow>Recursos</Eyebrow>
              <h2 id="case-resources-title">O que a solução entrega.</h2>
              <div className="case-features">
                {project.features.map((f, i) => (
                  <div key={f}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <b>{f}</b>
                  </div>
                ))}
              </div>
            </section>
            {project.notice && (
              <div className="honesty-note">
                <b>Transparência da demonstração</b>
                <p>{project.notice}</p>
              </div>
            )}
            {project.gallery && (
              <div className="case-gallery">
                <Eyebrow>Screenshots reais</Eyebrow>
                <div className="case-gallery-grid">
                  {project.gallery.map((image) => (
                    <figure
                      className={image.mobile ? "mobile-shot" : ""}
                      key={image.src}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <figcaption>{image.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
            <section
              className="case-technologies"
              aria-labelledby="case-technologies-title"
            >
              <Eyebrow>Tecnologias</Eyebrow>
              <h2 id="case-technologies-title">
                Ferramentas usadas no projeto.
              </h2>
              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
            <div className="case-bottom-actions">
              {project.demoUrl && (
                <a
                  className="button"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir demonstração <Arrow />
                </a>
              )}
              <Link className="text-link" to="/orcamento">
                Conversar sobre uma solução <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FinalCta title="Quer uma solução com esse nível de cuidado?" />
    </>
  );
}



function Services() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Do primeiro catálogo a uma <span>operação completa.</span>
          </>
        }
        text="Cada projeto é desenvolvido de acordo com as necessidades, objetivos e nível de complexidade de cada cliente."
      />
      <section className="section service-groups">
        <div className="container">
          {serviceGroups.map((g) => (
            <article key={g.title}>
              <span>{g.index}</span>
              <div>
                <h2>{g.title}</h2>
                <p>{g.text}</p>
              </div>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section custom-budget">
        <div className="container">
          <SectionHead
            eyebrow="Orçamento personalizado"
            title={
              <>
                Projeto sob medida para o <span>seu negócio.</span>
              </>
            }
            text="Cada projeto é desenvolvido de acordo com as necessidades, objetivos e nível de complexidade de cada cliente. Entre em contato para explicar sua ideia e receber um orçamento personalizado."
          />
          <div className="custom-budget-cta">
            <PrimaryLink to="/orcamento">Solicitar orçamento</PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Segments() {
  return (
    <>
      <PageHero
        eyebrow="Soluções por segmento"
        title={
          <>
            Tecnologia que parte da <span>realidade do seu negócio.</span>
          </>
        }
        text="Encontre caminhos possíveis para seu segmento. Cada combinação é avaliada e personalizada. Não existe pacote pronto para tudo."
      />
      <section className="section">
        <div className="container segment-grid">
          {segments.map((s, i) => (
            <article key={s.name}>
              <div>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.type}</b>
              </div>
              <h2>{s.name}</h2>
              <p className="segment-problem">{s.problem}</p>
              <p>{s.solution}</p>
              <Link to={`/orcamento?segmento=${encodeURIComponent(s.name)}`}>
                Ver uma solução possível <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section custom-solution">
        <div className="container">
          <Eyebrow>Sua atividade não está na lista?</Eyebrow>
          <h2>
            Primeiro entendemos o problema. Depois definimos a tecnologia.
          </h2>
          <p>
            Conte como seu negócio funciona, onde estão os gargalos e o que você
            quer melhorar. A solução é definida a partir dessa conversa.
          </p>
          <PrimaryLink to="/orcamento">Falar sobre meu projeto</PrimaryLink>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title={
          <>
            Tecnologia com visão de <span>negócio e cuidado nos detalhes.</span>
          </>
        }
        text="Desenvolvimento web, sistemas e automações construídos para serem claros para quem compra e úteis para quem opera."
      />
      <section className="section about">
        <div className="container about-grid">
          <div className="about-brand">
            <img
              src={logoOriginal}
              alt="Logo Cleber Pavin, Tecnologia & Desenvolvimento"
            />
          </div>
          <div className="about-copy">
            <Eyebrow>Cleber Pavin</Eyebrow>
            <h2>
              Uma solução profissional começa entendendo o que realmente precisa
              funcionar.
            </h2>
            <p>
              Trabalho com desenvolvimento web, sistemas e automações para
              pequenos e médios negócios que precisam apresentar melhor seus
              serviços ou organizar a operação.
            </p>
            <p>
              A experiência com atendimento e vendas online ajuda a olhar além
              da parte técnica: o projeto precisa ser claro para o cliente,
              simples no dia a dia e coerente com a realidade do negócio.
            </p>
            <div className="about-values">
              <div>
                <b>Clareza</b>
                <span>Sem complicar o que pode ser simples.</span>
              </div>
              <div>
                <b>Acabamento</b>
                <span>Cuidado visual em cada ponto de contato.</span>
              </div>
              <div>
                <b>Usabilidade</b>
                <span>Pensado para pessoas e para o dia a dia.</span>
              </div>
              <div>
                <b>Personalização</b>
                <span>A solução se adapta ao negócio.</span>
              </div>
            </div>
            <a
              className="text-link whatsapp-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp />
              Falar com Cleber no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function Budget() {
  const query = new URLSearchParams(useLocation().search);
  const selectedPlan = query.get("plano");
  const selectedSegment = query.get("segmento");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "Olá, Cleber! Gostaria de solicitar um orçamento.",
      "",
      ...Array.from(fd.entries())
        .filter(([, v]) => String(v).trim())
        .map(([k, v]) => `*${k}:* ${v}`),
    ];
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <PageHero
        eyebrow="Solicite um orçamento"
        title={
          <>
            Vamos transformar sua necessidade em um{" "}
            <span>projeto bem resolvido.</span>
          </>
        }
        text="Preencha as informações abaixo. Ao enviar, uma mensagem organizada será aberta diretamente no WhatsApp."
      />
      <section className="section budget">
        <div className="container budget-grid">
          <aside>
            <Eyebrow>Contato direto</Eyebrow>
            <h2>Conte um pouco sobre o seu projeto.</h2>
            <p>
              Não precisa saber todos os detalhes técnicos. As respostas ajudam
              a entender seu momento e preparar uma conversa mais objetiva.
            </p>
            <a
              className="budget-whatsapp"
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp />
              <span>
                <small>WhatsApp oficial</small>
                {brand.phoneDisplay}
              </span>
            </a>
            <div className="budget-steps">
              <span>
                <b>01</b>Você envia o contexto
              </span>
              <span>
                <b>02</b>Avaliamos a necessidade
              </span>
              <span>
                <b>03</b>Você recebe a orientação
              </span>
            </div>
          </aside>
          <form onSubmit={submit}>
            {selectedPlan && (
              <input
                type="hidden"
                name="Plano de interesse"
                value={selectedPlan}
              />
            )}
            {selectedPlan && (
              <p className="selected-plan">
                Plano de interesse: <b>{selectedPlan}</b>
              </p>
            )}
            <div className="form-row">
              <label>
                Nome
                <input
                  name="Nome"
                  required
                  autoComplete="name"
                  placeholder="Como posso chamar você?"
                />
              </label>
              <label>
                Empresa
                <input
                  name="Empresa"
                  autoComplete="organization"
                  placeholder="Nome da empresa"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                WhatsApp
                <input
                  name="WhatsApp"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                />
              </label>
              <label>
                Segmento
                <input
                  name="Segmento"
                  defaultValue={selectedSegment ?? ""}
                  placeholder="Ex.: loja, clínica, barbearia"
                />
              </label>
            </div>
            <label>
              Tipo de projeto
              <select name="Tipo de projeto" required defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option>Site</option>
                <option>Catálogo / vitrine</option>
                <option>Sistema</option>
                <option>Automação</option>
                <option>E-commerce</option>
                <option>Ainda não sei</option>
              </select>
            </label>
            <label>
              Funcionalidades desejadas
              <input
                name="Funcionalidades"
                placeholder="Ex.: busca, agenda, pedidos, painel..."
              />
            </label>
            <div className="form-row">
              <label>
                Possui identidade visual?
                <select name="Identidade visual">
                  <option>Sim</option>
                  <option>Não</option>
                  <option>Em desenvolvimento</option>
                </select>
              </label>
              <label>
                Possui domínio?
                <select name="Domínio">
                  <option>Não</option>
                  <option>Sim</option>
                  <option>Não sei</option>
                </select>
              </label>
            </div>
            <label>
              Descrição do projeto
              <textarea
                name="Descrição"
                required
                rows={5}
                placeholder="O que você quer criar ou melhorar?"
              />
            </label>
            <label>
              Faixa aproximada de investimento <small>(opcional)</small>
              <select name="Investimento" defaultValue="">
                <option value="">A combinar conforme o projeto</option>
                <option>Até R$ 500</option>
                <option>R$ 600 a R$ 1.000</option>
                <option>R$ 1.000 a R$ 2.000</option>
                <option>R$ 2.000 a R$ 3.000</option>
                <option>Acima de R$ 3.000</option>
              </select>
            </label>
            <button className="button button--whatsapp" type="submit">
              Enviar pelo WhatsApp <WhatsApp />
            </button>
            <p className="form-note">
              Nenhum dado é armazenado neste site. O envio acontece pelo
              WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function FinalCta({
  title = "Vamos conversar sobre o que seu negócio precisa resolver.",
}: {
  title?: string;
}) {
  return (
    <section className="final-cta">
      <div className="container">
        <div>
          <Eyebrow>Vamos construir algo profissional</Eyebrow>
          <h2>{title}</h2>
          <p>
            Conte o que seu negócio precisa e como a operação funciona hoje. Eu
            te ajudo a entender o melhor caminho e propor uma solução funcional,
            clara e bem pensada.
          </p>
        </div>
        <div>
          <PrimaryLink to="/orcamento">Solicitar orçamento</PrimaryLink>
          <a
            className="final-whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp />
            <span>
              Chamar no WhatsApp: <b>{brand.phoneDisplay}</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <Eyebrow>Erro 404</Eyebrow>
        <h1>Página não encontrada.</h1>
        <p>O endereço pode ter mudado ou não existir.</p>
        <PrimaryLink to="/">Voltar ao início</PrimaryLink>
      </div>
    </section>
  );
}

function PageEffects() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const [, route, slug] = location.pathname.split("/");
    const labels: Record<string, string> = {
      projetos: "Projetos",
      servicos: "Serviços",
      segmentos: "Segmentos",
      sobre: "Sobre",
      orcamento: "Orçamento",
    };
    const project = slug
      ? projects.find((item) => item.slug === slug)
      : undefined;
    document.title = project
      ? `${project.name} | Cleber Pavin`
      : route
        ? `${labels[route] || "Projeto"} | Cleber Pavin`
        : "Cleber Pavin | Tecnologia & Desenvolvimento";
  }, [location.pathname]);
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const precisePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 769px)",
    ).matches;
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const revealSelector = [
      ".page-hero .container",
      ".solution-strip>.container",
      ".section-head",
      ".feature-project",
      ".project-card",
      ".approach-grid",
      ".final-cta>.container",
      ".service-groups article",
      ".custom-budget",
      ".segment-grid article",
      ".about-grid",
      ".budget-grid",
      ".case-content>article",
      ".case-resources",
      ".case-gallery figure",
      ".case-technologies",
    ].join(",");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const cleanups: Array<() => void> = [];
    let headerFrame = 0;
    let heroFrame = 0;

    root.classList.toggle("motion-ready", !reducedMotion);
    revealItems.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 4, 3) * 55}ms`,
      );
    });

    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("reveal-visible");
              observer?.unobserve(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
        );
    revealItems.forEach((item) =>
      reducedMotion
        ? item.classList.add("reveal-visible")
        : observer?.observe(item),
    );

    const updateHeader = () => {
      headerFrame = 0;
      header?.classList.toggle("header--scrolled", window.scrollY > 28);
    };
    const onScroll = () => {
      if (!headerFrame)
        headerFrame = window.requestAnimationFrame(updateHeader);
    };
    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    if (!reducedMotion && precisePointer) {
      if (hero) {
        const onHeroMove = (event: PointerEvent) => {
          if (heroFrame) window.cancelAnimationFrame(heroFrame);
          heroFrame = window.requestAnimationFrame(() => {
            heroFrame = 0;
            const rect = hero.getBoundingClientRect();
            const x = Math.max(
              0,
              Math.min(1, (event.clientX - rect.left) / rect.width),
            );
            const y = Math.max(
              0,
              Math.min(1, (event.clientY - rect.top) / rect.height),
            );
            hero.style.setProperty("--hero-x", `${x * 100}%`);
            hero.style.setProperty("--hero-y", `${y * 100}%`);
            hero.style.setProperty("--hero-shift-x", `${(x - 0.5) * 10}px`);
            hero.style.setProperty("--hero-shift-y", `${(y - 0.5) * 8}px`);
            hero.style.setProperty(
              "--hero-shift-inverse-x",
              `${(0.5 - x) * 8}px`,
            );
            hero.style.setProperty(
              "--hero-shift-inverse-y",
              `${(0.5 - y) * 6}px`,
            );
          });
        };
        const resetHero = () => {
          hero.style.setProperty("--hero-x", "72%");
          hero.style.setProperty("--hero-y", "45%");
          hero.style.setProperty("--hero-shift-x", "0px");
          hero.style.setProperty("--hero-shift-y", "0px");
          hero.style.setProperty("--hero-shift-inverse-x", "0px");
          hero.style.setProperty("--hero-shift-inverse-y", "0px");
        };
        hero.addEventListener("pointermove", onHeroMove, { passive: true });
        hero.addEventListener("pointerleave", resetHero);
        cleanups.push(() => {
          hero.removeEventListener("pointermove", onHeroMove);
          hero.removeEventListener("pointerleave", resetHero);
        });
      }

      const tiltItems = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".project-card,.segment-grid article,.feature-project .project-visual",
        ),
      );
      tiltItems.forEach((item) => {
        item.classList.add("motion-tilt");
        const onTilt = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const rotateY =
            ((event.clientX - rect.left) / rect.width - 0.5) * 2.6;
          const rotateX =
            (0.5 - (event.clientY - rect.top) / rect.height) * 2.6;
          item.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
          item.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
          item.style.setProperty(
            "--shine-x",
            `${((event.clientX - rect.left) / rect.width) * 100}%`,
          );
          item.style.setProperty(
            "--shine-y",
            `${((event.clientY - rect.top) / rect.height) * 100}%`,
          );
        };
        const resetTilt = () => {
          item.style.setProperty("--tilt-x", "0deg");
          item.style.setProperty("--tilt-y", "0deg");
        };
        item.addEventListener("pointermove", onTilt, { passive: true });
        item.addEventListener("pointerleave", resetTilt);
        cleanups.push(() => {
          item.removeEventListener("pointermove", onTilt);
          item.removeEventListener("pointerleave", resetTilt);
        });
      });
    }

    return () => {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      if (headerFrame) window.cancelAnimationFrame(headerFrame);
      if (heroFrame) window.cancelAnimationFrame(heroFrame);
      root.classList.remove("motion-ready");
      revealItems.forEach((item) =>
        item.classList.remove("reveal-item", "reveal-visible"),
      );
    };
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <PageEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/projetos/:slug" element={<ProjectDetail />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/segmentos" element={<Segments />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/orcamento" element={<Budget />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
