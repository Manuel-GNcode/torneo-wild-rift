## Torneo WildDev — Sitio estático

> Sitio público para el torneo de Wild Rift organizado por WildDev y SiriUs. Esta es una página estática construida con Vite, TailwindCSS y JavaScript puro para mostrar participantes, un top player y enlaces para inscripción.

### Estado

- WIP: contenido y datos de jugadores se manejan desde `src/data.js`.

## Tecnologías

- Vite (dev/build/preview)
- Vanilla JavaScript (módulos ES)
- TailwindCSS (configurado vía import en `src/style.css`)
- HTML/CSS

## Estructura principal del proyecto

Raíz del proyecto (resumen):

- `index.html` — HTML principal que carga `/src/main.js`.
- `package.json` — scripts y dependencias (Vite + Tailwind).
- `vite.config.ts` — configuración de Vite (si existe en el repo).
- `public/` — activos públicos (ej. `cat-players/`, `fonts/`).
- `src/` — código fuente:
  - `src/main.js` — punto de entrada JS.
  - `src/data.js` — datos de ejemplo de jugadores (editar aquí para cambiar participantes).
  - `src/style.css` — estilos y utilidades Tailwind + fuentes.

Puedes abrir `src/data.js` para editar los jugadores, nombres, puntos y rutas a los avatares.

## Cómo ejecutar (Windows PowerShell)

1. Instala dependencias:

```powershell
npm install
```

2. Levanta el servidor de desarrollo (Vite):

```powershell
npm run dev
```

3. Abre el navegador en la URL que Vite muestre (por defecto http://localhost:5173).

Comandos útiles adicionales:

```powershell
npm run build    # genera la versión de producción en /dist
npm run preview  # sirve la build localmente para probar producción
```

## Archivos importantes a editar

- `src/data.js`: aquí están los objetos `dataPlayers` que controla la tabla de participantes y el top player.
- `src/main.js`: monta la UI y lee `dataPlayers` para renderizar la página.
- `src/style.css`: contiene las reglas CSS y la importación de Tailwind.
- `index.html`: estructura principal y carga de `src/main.js`.

## Despliegue

Este es un sitio estático; puedes desplegarlo fácilmente en Vercel, Netlify o cualquier hosting estático. Para preparar la build de producción:

```powershell
npm run build
```

Sube el contenido de la carpeta `dist/` al hosting elegido.

## Contribuir

1. Haz un fork o crea una rama nueva.
2. Edita `src/data.js` o añade mejoras en `src/`.
3. Asegúrate de que el sitio corre con `npm run dev` y crea una build si aplicas cambios de producción.
4. Abre un pull request describiendo tus cambios.

## Notas y recomendaciones

- Las fuentes personalizadas están en `public/fonts/` y se referencian desde `src/style.css`.
- Las imágenes de jugadores (cats) están en `public/cat-players/` y `src/data.js` usa `import.meta.env.BASE_URL` para referenciarlas.
- Si agregas más dependencias a `package.json`, recuerda documentarlas aquí.

## Contacto

Si necesitas ayuda con la estructura o quieres que automatice la generación de participantes desde un JSON externo, abre un issue o contáctame en el repositorio.

