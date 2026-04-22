"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AppEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("coreflow-theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.08 }
    );

    const raf = requestAnimationFrame(() => {
      revealElements.forEach((el) => {
        observer.observe(el);

        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          el.classList.add("show");
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
