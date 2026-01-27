# 🔧 Исправление порта в SvelteKit

## Проблема
SvelteKit использует порт 3000 вместо 3001.

## Причина
1. В `svelte.config.js` был установлен `envPrefix: 'PUBLIC_'`
2. Из-за этого адаптер искал `PUBLIC_PORT` вместо `PORT`
3. Файл `build/index.js` был скомпилирован с дефолтным портом 3000

## Решение (уже применено)

✅ Изменён `svelte.config.js`:
```javascript
envPrefix: 'PUBLIC_'  // Было
envPrefix: ''         // Стало
```

✅ Добавлен `dotenv` в `package.json`

## ⚠️ ВАЖНО: Требуется пересборка!

Старый `build/index.js` уже скомпилирован с портом 3000.  
Нужно пересобрать проект:

### Вариант 1: PowerShell скрипт (быстро)
```powershell
.\rebuild.ps1
npm start
```

### Вариант 2: Вручную
```powershell
# 1. Удалить старую сборку
Remove-Item -Path "build" -Recurse -Force
Remove-Item -Path ".svelte-kit" -Recurse -Force

# 2. Установить зависимости
npm install

# 3. Пересобрать
npm run build

# 4. Запустить
npm start
```

## Проверка
После пересборки откройте: http://localhost:3001

Порт должен быть **3001**, а не 3000! ✅
