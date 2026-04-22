# CoreFlow AI — Starter en Next.js

Este proyecto toma tu landing original y la pasa a una base más seria en **Next.js**, con estas rutas:

- `/` → landing
- `/login` → iniciar sesión
- `/signup` → crear cuenta
- `/dashboard` → dashboard demo

## Qué ya hace

- Los botones de la landing ya navegan a login y signup.
- El registro y login funcionan como **demo local** con `localStorage`.
- El dashboard muestra una sesión activa y permite cerrar sesión.
- El estilo mantiene la estética premium de tu landing.

## Importante

La autenticación actual **no es real**. Es una demo local para que puedas seguir diseñando sin backend.

Luego, el cambio ideal es:

- reemplazar `lib/mock-auth.ts`
- conectar **Supabase Auth**
- guardar perfiles y datos reales en base de datos

## Cómo correrlo

```bash
npm install
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Estructura rápida

- `app/page.tsx` → landing
- `app/login/page.tsx` → login
- `app/signup/page.tsx` → registro
- `app/dashboard/page.tsx` → dashboard demo
- `lib/mock-auth.ts` → auth temporal local
- `components/theme-toggle.tsx` → toggle de tema

## Siguiente paso recomendado

Cuando quieras, el siguiente movimiento es conectar esto a **Supabase** sin rehacer la UI.
