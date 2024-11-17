# Batyevka Business Website

## Описание
Веб-приложение для бизнес-направления компании Батыевка, включающее:
- Калькулятор тарифов
- Систему управления адресами для подключения
- Форму заявок на подключение
- Административную панель

## Технологии
- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- Tailwind CSS
- shadcn/ui
- Redis

## Установка

1. Клонируйте репозиторий:
```bash
git clone git@git.icstudio.online:ichishkala/batyevka-business.git
cd batyevka-business
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте переменные окружения:
```bash
cp .env.example .env
```

Заполните следующие переменные в `.env`:
```env
# База данных
DATABASE_URL="postgresql://username:password@localhost:5432/batyevka_addresses?schema=public"

# Telegram batyevka_support
TELEGRAM_CHAT_ID=XXXXXXXXXXXX
TELEGRAM_BOT_TOKEN=74A4964762:AAFeTEnSNU3V8JK2BWk7QY4tLhvW6a0RLP4YTFGYH

# Redis для верификации
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASSWORD="your-redis-password"

# Админ панель
NEXT_PUBLIC_ADMIN_PASSWORD="your-admin-password"
```

4. Настройте PostgreSQL:

- Установите PostgreSQL, если еще не установлен
- Создайте базу данных:
```sql
CREATE DATABASE batyevka_addresses;
```

5. Примените миграции:
```bash
# Генерация клиента Prisma
npx prisma generate

# Создание и применение миграций
npx prisma migrate dev

# Если нужно сбросить базу данных
npx prisma migrate reset --force

# Для продакшена
npx prisma migrate deploy
```

## Запуск

### Разработка
```bash
npm run dev
```

### Продакшен
```bash
npm run build
npm start
```

### Тестовый сервер
```bash
npm run start-stage
```

### Девелоперский сервер
```bash
npm run start-dev
```

## Структура проекта

```
batyevka-business/
│
├── app/                    # Next.js App Router
│   ├── api/               # API маршруты
│   ├── admin/             # Админ панель
│   └── page.tsx           # Главная страница
│
├── components/            # React компоненты
│   ├── ui/               # UI компоненты (shadcn)
│   ├── admin/            # Компоненты админ панели
│   └── modals/           # Модальные окна
│
├── lib/                  # Утилиты и общий код
│   ├── db.ts            # Конфигурация Prisma
│   └── utils.ts         # Вспомогательные функции
│
├── prisma/              # Prisma конфигурация и миграции
│   ├── schema.prisma    # Схема базы данных
│   └── migrations/      # Миграции
│
└── public/              # Статические файлы
```

## База данных

### Основные таблицы

1. `streets` - Улицы
```sql
CREATE TABLE streets (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. `houses` - Дома
```sql
CREATE TABLE houses (
    id         SERIAL PRIMARY KEY,
    number     VARCHAR(50) NOT NULL,
    street_id  INTEGER REFERENCES streets(id),
    is_active  BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(street_id, number)
);
```

### Управление миграциями

#### Создание новой миграции
```bash
# После изменения schema.prisma
npx prisma migrate dev --name migration_name
```

#### Применение миграций на продакшене
```bash
npx prisma migrate deploy
```

#### Откат миграций
```bash
# Сброс базы данных
npx prisma migrate reset

# Откат к определенной миграции
npx prisma migrate reset --to migration_name
```

## API Endpoints

### Улицы
- `GET /api/streets` - Получение списка улиц
- `POST /api/streets` - Создание улицы
- `PATCH /api/streets/:id` - Обновление улицы
- `DELETE /api/streets/:id` - Удаление улицы

### Дома
- `GET /api/houses` - Получение списка домов
- `POST /api/houses` - Создание дома
- `PATCH /api/houses/:id` - Обновление дома
- `DELETE /api/houses/:id` - Удаление дома

## Административная панель

Доступ: `/admin/addresses`
- Управление улицами и домами
- Фильтрация и поиск адресов
- Установка статуса доступности для подключения

## Развертывание

1. Подготовка сервера:
```bash
# Установка зависимостей
npm install --production

# Генерация Prisma Client
npx prisma generate

# Сборка приложения
npm run build
```

2. Настройка базы данных:
```bash
# Применение миграций
npx prisma migrate deploy
```

3. Запуск:
```bash
# Использование PM2
pm2 start npm --name "batyevka-business" -- start
```

## Поддержка

По вопросам работы с проектом обращайтесь:
- Email: support@batyevka.net
- Telegram: @batyevka_support