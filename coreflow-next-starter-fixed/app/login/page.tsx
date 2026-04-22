"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentDemoUser, loginDemoUser } from "@/lib/mock-auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getCurrentDemoUser()) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      loginDemoUser(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-backdrop"></div>
      <section className="auth-shell reveal show">
        <div className="auth-topbar">
          <Link href="/" className="brand">
            <div className="brand-mark">CF</div>
            <div>
              <div className="brand-title">CoreFlow AI</div>
              <div className="brand-sub">Acceso a tu espacio de contenido</div>
            </div>
          </Link>
          <ThemeToggle />
        </div>

        <div className="auth-grid">
          <div className="auth-copy reveal show">
            <div className="pill">Login</div>
            <h1 className="auth-title">Inicia sesión y vuelve a tu sistema.</h1>
            <p className="auth-text">
              Esta versión ya funciona como demo local. Más adelante solo cambias la lógica por Supabase y mantienes casi
              la misma interfaz.
            </p>
            <div className="auth-note">
              <strong>Tip:</strong> primero crea una cuenta en la página de registro. Luego entra aquí con ese correo y esa contraseña.
            </div>
          </div>

          <div className="auth-card reveal show">
            <div className="label">Bienvenido de vuelta</div>
            <form className="auth-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Correo</span>
                <input
                  type="email"
                  placeholder="nombre@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span>Contraseña</span>
                <input
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              {error ? <p className="form-error">{error}</p> : null}

              <button className="btn primary auth-submit" type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Iniciar sesión"}
              </button>
            </form>

            <div className="auth-footer-row">
              <span className="muted">¿Aún no tienes cuenta?</span>
              <Link href="/signup" className="text-link">
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
