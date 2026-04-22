"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DemoUser,
  getCurrentDemoUser,
  logoutDemoUser
} from "@/lib/mock-auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<DemoUser | null>(null);

  useEffect(() => {
    const current = getCurrentDemoUser();

    console.log("USER:", current);

    if (!current) {
      router.replace("/login");
      return;
    }

    setUser(current);
  }, [router]);

  const handleLogout = () => {
    logoutDemoUser();
    router.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="auth-page">
      <div className="auth-backdrop"></div>

      <section className="auth-shell reveal show">
        <div className="auth-topbar">
          <Link href="/" className="brand">
            <div className="brand-mark">CF</div>
            <div>
              <div className="brand-title">CoreFlow AI</div>
              <div className="brand-sub">Dashboard demo</div>
            </div>
          </Link>

          <div className="nav-actions">
            <ThemeToggle />
            <button className="btn ghost" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>

        <div className="dashboard-hero">
          <div className="pill">Sesión activa</div>

          <h1>Hola, {user.name}.</h1>

          {user?.isAdmin && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.06)",
                color: "#ffffff",
                fontWeight: 600
              }}
            >
              🔥 PANEL ADMIN ACTIVO
            </div>
          )}

          <p>
            Ya tienes el flujo básico funcionando. Este dashboard es el punto
            perfecto para luego conectar Supabase, guardar datos reales y
            empezar a construir la app.
          </p>

          <div className="dashboard-mini-grid">
            <div className="list-row">Cuenta: {user.accountType}</div>
            <div className="list-row">Correo: {user.email}</div>
            <div className="list-row">
              {user.isAdmin ? "Modo: manager admin" : "Modo: demo local"}
            </div>
          </div>
        </div>

        <div className="dashboard-card-grid">
          <article className="feature-card">
            <div className="step-number">01</div>
            <h3>Lo que ya quedó</h3>
            <p>
              Landing en Next, botones conectados, registro, login, estado de
              sesión local y dashboard demo.
            </p>
          </article>

          <article className="feature-card">
            <div className="step-number">02</div>
            <h3>Siguiente paso lógico</h3>
            <p>
              Cambiar la auth demo por Supabase Auth y guardar perfiles, planes
              y contexto del usuario en base de datos.
            </p>
          </article>

          <article className="feature-card">
            <div className="step-number">03</div>
            <h3>Qué podrías meter aquí</h3>
            <p>
              Onboarding, selección de plataforma, tono de marca, calendario
              semanal y generación de contenido.
            </p>
          </article>
        </div>

        {user?.isAdmin && (
          <section style={{ marginTop: "18px" }}>
            <div className="feature-card">
              <div className="step-number">Manager</div>
              <h3>Vista exclusiva de administrador</h3>
              <p>
                Esta sección solo la puede ver tu cuenta manager. Aquí después
                puedes meter control de usuarios, métricas, planes, cuentas y
                ajustes generales de la app.
              </p>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}