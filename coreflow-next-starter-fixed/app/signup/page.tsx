"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentDemoUser, registerDemoUser } from "@/lib/mock-auth";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState<"Personal" | "Business">("Personal");
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
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

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (accountType === "Business" && !businessType) {
      setError("Selecciona el tipo de negocio.");
      return;
    }

    if (accountType === "Business" && !businessName.trim()) {
      setError("Escribe el nombre del negocio.");
      return;
    }

    setLoading(true);

    try {
      registerDemoUser({
        name,
        email,
        password,
        accountType,
        createdAt: new Date().toISOString()
      });

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "coreflow_business_profile",
          JSON.stringify({
            email,
            accountType,
            businessType: accountType === "Business" ? businessType : null,
            businessName: accountType === "Business" ? businessName : null
          })
        );
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear la cuenta.");
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
              <div className="brand-sub">Crea tu cuenta y empieza rápido</div>
            </div>
          </Link>
          <ThemeToggle />
        </div>

        <div className="auth-grid">
          <div className="auth-copy reveal show">
            <div className="pill">Registro</div>
            <h1 className="auth-title">Crea tu cuenta y entra al flujo premium.</h1>
            <p className="auth-text">
              Esto ya te deja probar navegación, creación de cuenta, login y dashboard sin backend real. Después solo
              cambiamos la lógica local por Supabase Auth.
            </p>
            <div className="auth-points">
              <div className="mini-item">Cuenta Personal o Business</div>
              <div className="mini-item">Flujo listo para conectar auth real</div>
              <div className="mini-item">Estilo consistente con la landing</div>
            </div>
          </div>

          <div className="auth-card reveal show">
            <div className="label">Nueva cuenta</div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Nombre</span>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

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

              <div className="dual-grid">
                <label className="field">
                  <span>Contraseña</span>
                  <input
                    type="password"
                    placeholder="Crea una contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span>Confirmar</span>
                  <input
                    type="password"
                    placeholder="Repite la contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="field">
                <span>Tipo de cuenta</span>
                <select
                  value={accountType}
                  onChange={(e) => {
                    const value = e.target.value as "Personal" | "Business";
                    setAccountType(value);

                    if (value !== "Business") {
                      setBusinessType("");
                      setBusinessName("");
                    }
                  }}
                >
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                </select>
              </label>

              {accountType === "Business" && (
                <>
                  <label className="field">
                    <span>Tipo de negocio</span>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      required={accountType === "Business"}
                    >
                      <option value="">Selecciona tu tipo de negocio</option>
                      <option value="reventa-ropa">Reventa / tienda de ropa</option>
                      <option value="coming-soon" disabled>
                        Próximamente más categorías
                      </option>
                    </select>
                  </label>

                  <label className="field">
                    <span>Nombre del negocio</span>
                    <input
                      type="text"
                      placeholder="Ej. C&C House"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required={accountType === "Business"}
                    />
                  </label>
                </>
              )}

              {error ? <p className="form-error">{error}</p> : null}

              <button className="btn primary auth-submit" type="submit" disabled={loading}>
                {loading ? "Creando cuenta..." : "Crear cuenta"}
              </button>
            </form>

            <div className="auth-footer-row">
              <span className="muted">¿Ya tienes cuenta?</span>
              <Link href="/login" className="text-link">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}