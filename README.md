# VIN Decoder

SPA для розшифровки автомобільних VIN-кодів через публічне API [NHTSA vPIC](https://vpic.nhtsa.dot.gov/api/).

🔗 **Демо:** https://vin-decoder-shoni-pal.netlify.app

## Функціонал

- Розшифровка VIN-коду (17 символів) з валідацією поля вводу
- Історія трьох останніх запитів із повторним переглядом результатів без повторного звернення до API
- Список усіх змінних VIN з описами (`/variables`) та сторінка деталей однієї змінної (`/variables/:id`)
- Відображення помилок валідації та помилок API у модальному вікні

## Стек

React, TypeScript, React Router, TanStack Query, Vite

## Запуск локально

\`\`\`bash
npm install
npm run dev
\`\`\`

Застосунок буде доступний на `http://localhost:5173`.

\`\`\`bash
npm run build # продакшн-збірка
npm run preview # перегляд продакшн-збірки локально
\`\`\`
