import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppEffects } from "@/components/app-effects";

export const metadata: Metadata = {
  title: "CoreFlow AI",
  description: "Sistema de contenido con estrategia primero"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppEffects />
        {children}
      </body>
    </html>
  );
}
