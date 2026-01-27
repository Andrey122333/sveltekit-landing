# Пересборка SvelteKit с правильным портом

Write-Host "🔧 Пересборка SvelteKit..." -ForegroundColor Cyan

# Удаляем старую сборку
Write-Host "Удаление build/..." -ForegroundColor Yellow
Remove-Item -Path "build" -Recurse -Force -ErrorAction SilentlyContinue

# Удаляем .svelte-kit
Write-Host "Очистка .svelte-kit/..." -ForegroundColor Yellow
Remove-Item -Path ".svelte-kit" -Recurse -Force -ErrorAction SilentlyContinue

# Устанавливаем зависимости (включая dotenv)
Write-Host "Установка зависимостей..." -ForegroundColor Yellow
npm install

# Собираем проект
Write-Host "Сборка проекта..." -ForegroundColor Yellow
npm run build

Write-Host "✅ Готово! Запускайте: npm start" -ForegroundColor Green
Write-Host "Сервер будет на порту 3001" -ForegroundColor Green
