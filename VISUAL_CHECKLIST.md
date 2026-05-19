# CONAJOMX — Visual Checklist

Run `npm run assets:ensure` before checking to regenerate any missing SVG assets.

## Hero
- [x] Hero muestra mínimo 5 imágenes (collage 2-column: agenda, mesa directiva, hero-01/02/03)
- [x] Animated background visible (blobs + hexagon pattern + diagonal lines)
- [x] Texto y CTAs a la izquierda, collage a la derecha (desktop)
- [x] En mobile, collage below text
- [x] Floating stat cards (8ª Asamblea, México + España)

## Agenda 2026
- [x] Agenda muestra imagen principal (SafeImage con fallback SVG)
- [x] 10 eventos completos (Francia, EEUU, Países Bajos, China, Turquía)
- [x] Filtros por mes (Todos, Marzo, Mayo, Junio, Noviembre, Diciembre)
- [x] Timeline cards con flag emoji, tipo coloreado, fecha y país

## Galería
- [x] Galería muestra mínimo 6 imágenes (gallery-01.svg a gallery-06.svg)
- [x] Bento grid con parallax scroll en desktop
- [x] Slider horizontal en mobile
- [x] Overlay labels en hover (Líderes en acción, Agenda internacional, etc.)
- [x] Stats counter (6+ países, 10 eventos, 100+ líderes)

## Liderazgo
- [x] Liderazgo muestra imagen principal (mesa-directiva-cnem-2026.jpeg o SVG fallback)
- [x] Mesa Directiva CNEM 2026 grid con 9 miembros e iniciales
- [x] Presidencia Nacional CONAJOMX grid con 9 miembros

## CNEM
- [x] CNEM tiene visual (generated/cnem-visual.svg)
- [x] 6 tarjetas de beneficios
- [x] Mesa Directiva CNEM grid

## España
- [x] España tiene visual (generated/mexico-spain-visual.svg)
- [x] Representación en España con 3 líderes
- [x] Highlights de actividades recientes

## Legisladores
- [x] Legisladores tiene visual (generated/legisladores-visual.svg)
- [x] 6 pilares con tarjetas
- [x] Presidente del Consejo destacado

## Noticias
- [x] Noticias tienen imágenes (news-01/02/03.svg como headers de cards)
- [x] 6 cards editoriales con badges de categoría
- [x] Categorías con colores diferenciados

## Empresas afiliadas
- [x] Sección de afiliados con 6 logos (affiliate-01.svg a affiliate-06.svg)
- [x] Infinite scroll ticker con fade en los bordes
- [x] CTA "Afilia tu empresa"

## Countdown
- [x] Countdown activo con días, horas, minutos, segundos
- [x] Sección navy de contraste (#071D3A)

## Formulario de afiliación
- [x] Formulario multistep (4 pasos: Contacto, Perfil, Interés, Mensaje)
- [x] Step indicators con colores light theme
- [x] Submit abre mailto

## Footer
- [x] Footer personalizado CONAJOMX (navy)
- [x] Logo path: /assets/conajomx/logo/logo-conajomx.svg

## Mobile
- [x] Mobile no rompe layout (mobile-first en todas las secciones)
- [x] Hero collage visible en mobile (debajo del texto)
- [x] Gallery con horizontal scroll en mobile

## Background dinámico
- [x] Background dinámico claro/blanco visible en Hero
- [x] Blobs animados (animate-blob, animate-blob-slow)
- [x] Hexagon pattern SVG overlay
- [x] Dot grid pattern
- [x] Diagonal lines decorativas

## Globo 3D
- [x] Globo cobe 3D con CDMX, Cancún y Madrid
- [x] Animación de rotación (requestAnimationFrame)
- [x] Location pills y forum tags

## Build
- [x] `npm run build` pasa sin errores TypeScript
- [x] 14 rutas estáticas generadas
- [x] `npm run assets:ensure` crea SVGs faltantes automáticamente

---

## Assets locales en public/assets/conajomx/

| Directorio    | Archivos                                   |
|---------------|--------------------------------------------|
| logo/         | logo-conajomx.svg                          |
| hero/         | hero-01.svg, hero-02.svg, hero-03.svg      |
| gallery/      | gallery-01.svg … gallery-06.svg            |
| news/         | news-01.svg, news-02.svg, news-03.svg      |
| generated/    | cnem-visual.svg, mexico-spain-visual.svg, legisladores-visual.svg |
| affiliates/   | affiliate-01.svg … affiliate-06.svg        |
| agenda/       | (agenda-internacional-2026.jpeg — agregar) |
| leaders/      | (mesa-directiva-cnem-2026.jpeg — agregar)  |

> Los archivos .jpeg son opcionales. SafeImage muestra fallback premium si no existen.

## Comandos

```bash
npm run assets:ensure   # regenera SVGs faltantes (se ejecuta antes de dev y build)
npm run dev             # inicia servidor de desarrollo en http://localhost:3000
npm run build           # genera build de producción
```
