import { connectMongo } from './db/mongo/connection';
import { launchBot } from './bot/telegram';

// Сначала подключаем Mongo, потом запускаем бота
connectMongo().then(() => {
  launchBot();
  console.log('🚀 Бот готов к работе');
});
