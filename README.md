# НИР3 Landing — SvelteKit

Лендинг-страница кафе «Три Фреймворка» для сравнения производительности SSR-фреймворков.

## Технологический стек

- **SvelteKit** 2.5.0
- **Svelte** 5.0.0 (без Virtual DOM)
- **TypeScript** 5.3.3
- **Vite** 5.0.11
- **Node.js** 20.x LTS
- **Порт:** 3001

## Команды

```bash
# Development
npm install
npm run dev              # http://localhost:3001

# Production
npm run build
npm start

# Docker
docker build -t nir3-sveltekit .
docker run -p 3001:3001 nir3-sveltekit
```

## Структура

```
src/
  lib/components/
    Hero.svelte          # Hero-секция
    About.svelte         # О кафе
    Frameworks.svelte    # Фирменные напитки
    Features.svelte      # Преимущества
    Methodology.svelte   # Меню и атмосфера
    ContactForm.svelte   # Форма бронирования
    Footer.svelte        # Футер
  routes/
    +layout.svelte       # Root layout
    +page.svelte         # Главная страница
  app.html               # HTML-шаблон
  app.css                # Глобальные стили
```

## Целевые метрики

- **LCP:** ≤ 2.5s
- **INP:** ≤ 200ms
- **CLS:** ≤ 0.1
- **TTFB:** ≤ 600ms
- **Bundle:** < 100KB (gzip)

## Примечания

**Порт 3001:** Если приложение запускается на порту 3000 вместо 3001, выполните:

```bash
npm run build          # Пересборка с правильным портом
npm start
```

См. `FIX_PORT.md` для деталей.
