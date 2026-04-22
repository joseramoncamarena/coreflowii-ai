"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentDemoUser } from "@/lib/mock-auth";

export default function HomePage() {
  const [isReady, setIsReady] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    setHasSession(Boolean(getCurrentDemoUser()));
    setIsReady(true);
  }, []);

  return (
    <div className="container">
      <header className="floating-nav reveal">
        <a href="#inicio" className="brand">
          <div className="brand-mark">CF</div>
          <div>
            <div className="brand-title">CoreFlow AI</div>
            <div className="brand-sub">Sistema de contenido con estrategia primero</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#features">Funciones</a>
          <a href="#how">Cómo funciona</a>
          <a href="#profiles">Personal / Business</a>
          <a href="#examples">Ejemplos</a>
          <a href="#references">Referencias</a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="btn ghost" href="/login">
            Iniciar sesión
          </Link>
          <Link className="btn primary" href="/signup">
            Crear cuenta
          </Link>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy reveal">
            <div className="pill">✦ IA premium para sistemas de contenido</div>
            <h1>Convierte objetivos en estrategia, y la estrategia en contenido listo para publicar.</h1>
            <p>
              Un espacio de trabajo moderno con IA para estrategia, ideas de posts, captions, guiones para reels y
              planeación semanal, adaptado a marcas personales y negocios.
            </p>
            <div className="cta-row">
              <Link className="btn primary" href="/signup">
                Crear cuenta
              </Link>
              <a className="btn" href="#how">
                Ver cómo funciona
              </a>
              {isReady && hasSession ? (
                <Link className="btn ghost" href="/dashboard">
                  Ir al dashboard demo
                </Link>
              ) : null}
            </div>
            <div className="mini-grid">
              <div className="mini-item">Resultados guiados por estrategia</div>
              <div className="mini-item">Modo Personal o Business</div>
              <div className="mini-item">Planeación semanal clara</div>
            </div>
          </div>

          <div className="dashboard-wrap reveal">
            <div className="shell dashboard">
              <div className="dashboard-inner">
                <div className="dash-top">
                  <div>
                    <div className="dash-title">Espacio de contenido</div>
                    <div className="dash-sub">Dashboard de planeación asistido por IA</div>
                  </div>
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="dashboard-grid">
                  <div className="stack">
                    <div className="panel">
                      <div className="label">Tipo de perfil</div>
                      <div className="profile-grid">
                        <div className="small-card">
                          <p className="small-title">Personal</p>
                          <div className="small-text">Creadores, freelancers, consultores y marcas personales.</div>
                        </div>
                        <div className="small-card">
                          <p className="small-title">Business</p>
                          <div className="small-text">
                            Tiendas, servicios, equipos y flujos de crecimiento más estructurados.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel">
                      <div className="label">Entradas</div>
                      <div className="stack top-gap-sm">
                        <div className="list-row">Tono y posicionamiento de marca</div>
                        <div className="list-row">Objetivos de audiencia</div>
                        <div className="list-row">Plataformas y frecuencia de publicación</div>
                      </div>
                    </div>
                  </div>

                  <div className="stack">
                    <div className="panel">
                      <div className="dash-top align-start">
                        <div>
                          <div className="label">Esta semana</div>
                          <div className="dash-title dash-title-lg top-gap-xs">Plan de contenido estructurado</div>
                        </div>
                        <div className="icon-box">▣</div>
                      </div>
                      <div className="stack top-gap-md">
                        <div className="list-row">
                          <strong>Lun</strong> — Reel de autoridad
                          <br />
                          <span className="small-text">Explica tu método principal</span>
                        </div>
                        <div className="list-row">
                          <strong>Mié</strong> — Carrusel
                          <br />
                          <span className="small-text">Desarrolla un error común de tu audiencia</span>
                        </div>
                        <div className="list-row">
                          <strong>Vie</strong> — Historias
                          <br />
                          <span className="small-text">Nutrición + CTA hacia la oferta</span>
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-grid twin-grid no-top-gap">
                      <div className="panel">
                        <div className="label">Caption generado</div>
                        <div className="small-text top-gap-sm">
                          “No necesitas más publicaciones al azar. Necesitas una arquitectura de contenido más clara que
                          construya atención, confianza y conversión.”
                        </div>
                      </div>
                      <div className="panel">
                        <div className="label">Estructura de reel</div>
                        <div className="small-text top-gap-sm">
                          Hook → contexto → valor → prueba → CTA. Diseñado para claridad, retención y consistencia.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head reveal">
            <div className="pill">Qué puedes hacer</div>
            <h2>Diseñado para creadores y negocios que quieren estructura, no ruido.</h2>
            <p>
              Construye un sistema de contenido más claro con estrategia, ejecución y planeación en una sola interfaz
              premium.
            </p>
          </div>

          <div className="feature-grid">
            {[
              ["✦", "Estrategia de contenido", "Convierte objetivos, audiencia y posicionamiento en una dirección mensual estructurada."],
              ["◫", "Ideas de publicaciones", "Genera conceptos relevantes según tu nicho, tu oferta y la voz de tu marca."],
              ["✎", "Captions y hooks", "Escribe captions más limpios, hooks más fuertes y mejores inicios para cada formato."],
              ["▶", "Guiones para reels", "Crea guiones cortos con flujo claro, buen ritmo y mejor retención de atención."],
              ["◎", "Secuencias de stories", "Construye historias que eduquen, vendan, nutran y mantengan a tu audiencia enganchada."],
              ["☰", "Calendario semanal", "Organiza tus ideas en una planeación semanal realista que sí puedas publicar."]
            ].map(([icon, title, text]) => (
              <article className="feature-card reveal" key={title}>
                <div className="icon-box">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how">
          <div className="section-head reveal">
            <div className="pill">Cómo funciona</div>
            <h2>Un flujo simple que convierte contexto en contenido útil.</h2>
            <p>
              Lo bastante rápido para sentirse fluido, y lo bastante estructurado para mantener consistencia en el
              tiempo.
            </p>
          </div>

          <div className="steps-grid">
            {[
              ["01", "Crea tu cuenta", "Empieza con una configuración simple y entra a un espacio pensado para crear contenido con estructura."],
              ["02", "Elige tu perfil", "Selecciona Personal o Business para que la IA adapte sus recomendaciones a tus objetivos."],
              ["03", "Configura tu contexto", "Agrega audiencia, tono, oferta, plataformas y prioridades para obtener mejores resultados."],
              ["04", "Genera estrategia y contenido", "Recibe planes, captions, guiones e ideas de posts que se sientan alineados desde el primer momento."]
            ].map(([step, title, text]) => (
              <article className="step-card reveal" key={step}>
                <div className="step-number">{step}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="profiles">
          <div className="section-head reveal">
            <div className="pill">Personal / Business</div>
            <h2>Dos modos, un flujo visualmente premium.</h2>
            <p>
              Metas distintas necesitan lógica distinta. El sistema adapta sus sugerencias según el tipo de cuenta que
              estés construyendo.
            </p>
          </div>

          <div className="profiles-grid">
            <article className="profile-card reveal">
              <div className="eyebrow">Personal</div>
              <h3>Para creadores y marcas personales</h3>
              <p>Ideal para freelancers, consultores, creadores y fundadores que quieren construir autoridad con contenido.</p>
              <ul className="profile-points">
                <li>Posicionamiento personal y alineación de voz</li>
                <li>Ideas de contenido para generar confianza</li>
                <li>Storytelling consistente en distintos formatos</li>
              </ul>
            </article>
            <article className="profile-card reveal">
              <div className="eyebrow">Business</div>
              <h3>Para marcas, tiendas y servicios</h3>
              <p>
                Creado para negocios que buscan una máquina de contenido más clara alrededor de ofertas, campañas y
                planeación semanal.
              </p>
              <ul className="profile-points">
                <li>Planeación orientada a campañas</li>
                <li>Captions y CTAs enfocados en la oferta</li>
                <li>Calendarios repetibles para publicar en varios formatos</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="examples">
          <div className="section-head reveal">
            <div className="pill">Ejemplos / Outputs</div>
            <h2>Visualiza el tipo de estructura que la IA puede generar.</h2>
            <p>No son bloques de texto aleatorios. Son resultados claros, prácticos y listos para revisar, ajustar y publicar.</p>
          </div>

          <div className="examples-grid">
            {[
              ["Framework", "Estrategia mensual", ["Objetivo: mejorar posicionamiento", "Pilares: educación, confianza, oferta", "Cadencia: 4 reels / 2 carruseles / 3 sets de stories"]],
              ["Ideación", "Banco de ideas", ["5 errores que tu audiencia está cometiendo", "Behind the scenes de tu proceso", "Un post simple de antes / después"]],
              ["Writing", "Caption generado", ["Línea de apertura fuerte", "Texto principal más limpio", "CTA alineado con la voz de la marca"]],
              ["Short-form", "Guion para reel", ["Hook en los primeros 2 segundos", "Estructura rápida de valor", "Cierre con CTA accionable"]],
              ["Calendario", "Plan semanal", ["Lun — reel de autoridad", "Mié — carrusel educativo", "Vie — secuencia de stories para convertir"]]
            ].map(([eyebrow, title, items]) => (
              <article className="example-card reveal" key={title}>
                <div className="eyebrow">{eyebrow}</div>
                <h3>{title}</h3>
                <ul className="example-list">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="references">
          <div className="section-head reveal">
            <div className="pill">Referencias</div>
            <h2>Señales visuales que hacen que el producto se sienta confiable desde el primer scroll.</h2>
            <p>Capas sutiles de credibilidad, paneles premium y un lenguaje visual calmado inspirado en SaaS creativos modernos.</p>
          </div>

          <div className="references-grid">
            <div className="ref-card reveal">
              <div className="ref-left-grid">
                {[
                  ["01", "Capacidades destacadas", "Sistemas visuales elevados, buen spacing y sensación premium sin sobrecargar."],
                  ["02", "Paneles de preview", "Bloques limpios de interfaz que sugieren profundidad real de producto."],
                  ["03", "Confianza visual", "Señales de autoridad suaves que refuerzan credibilidad sin saturar la landing."],
                  ["04", "Arquitectura clara", "Tarjetas, paneles y previews que hacen sentir que sí es un software real y serio."]
                ].map(([n, t, d]) => (
                  <div className="card inset-card" key={n}>
                    <div className="eyebrow">{n}</div>
                    <h3 className="card-mini-title">{t}</h3>
                    <p>{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="ref-card reveal">
              <div className="eyebrow">Sensación premium</div>
              <h3>Diseñado para parecer la puerta de entrada de una startup seria.</h3>
              <p>Una landing que balancea claridad, aspiración y estética de software premium sin caer en un SaaS genérico.</p>
              <ul className="ref-points">
                <li>Gradientes calmados y capas translúcidas</li>
                <li>Tarjetas con bordes grandes y profundidad sutil</li>
                <li>Narrativa moderna centrada en producto</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="cta-box reveal">
            <div className="pill">CTA final</div>
            <h2>Construye contenido más inteligente empezando por la estrategia.</h2>
            <p>
              Convierte ideas en un sistema de publicación estructurado con IA que se sienta claro, útil y premium desde
              el inicio.
            </p>
            <div className="cta-row center-row top-gap-md">
              <Link className="btn primary" href="/signup">
                Crear cuenta
              </Link>
              <Link className="btn" href="/login">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-box reveal">
        <div>
          <div className="brand">
            <div className="brand-mark">CF</div>
            <div>
              <div className="brand-title">CoreFlow AI</div>
              <div className="brand-sub">Interfaz de estrategia de contenido con IA</div>
            </div>
          </div>
          <div className="muted top-gap-sm">© 2026 CoreFlow AI. Términos, privacidad y redes son placeholders.</div>
        </div>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#features">Funciones</a>
          <a href="#how">Cómo funciona</a>
          <a href="#examples">Ejemplos</a>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
        </div>
      </footer>
    </div>
  );
}
