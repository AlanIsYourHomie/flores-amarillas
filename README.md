# 🌻 Flores amarillas

Pequeña experiencia interactiva hecha con React + Vite, con dos versiones:

- `?para=1`: versión de broma.
- `?para=2`: versión sentimental.

## Desarrollo local

```bash
npm install
npm run dev
```

## Comprobar antes de subir

```bash
npm run lint
npm run build
```

## Publicación

El repositorio ya está configurado con GitHub Pages y GitHub Actions.
Cada push a `main` ejecuta el workflow de deploy automáticamente.

Sitio:

`https://alanisyourhomie.github.io/flores-amarillas/`

Enlaces directos:

- `https://alanisyourhomie.github.io/flores-amarillas/?para=1`
- `https://alanisyourhomie.github.io/flores-amarillas/?para=2`

## Personalizar textos

Todos los textos de ambas versiones están en:

`src/data/experiences.js`

No hace falta tocar los componentes para cambiar mensajes.
