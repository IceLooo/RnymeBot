# 🤖 RhymeBot

RhymeBot — это Telegram-бот на Node.js + TypeScript, который подбирает рифмы к словам с помощью API.

## 🚀 Возможности

- Поиск рифм через [Datamuse API](https://www.datamuse.com/api/)
- Кэширование запросов с помощью Redis
- Сохранение истории запросов в MongoDB
- Telegram-интерфейс через [Telegraf](https://telegraf.js.org/)

---

## 📦 Установка

```bash
git clone https://github.com/IceLooo/RhymeBot.git
cd RhymeBot
npm install


## Настройки 
 Создайте .env файл в корне проекта 
 BOT_TOKEN=your_telegram_bot_token
 MONGO_URI=mongodb://localhost:27017/rhymebot


## Запуск 

npm run dev