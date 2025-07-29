import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { getRhymes } from '../services/rhyme.service';
import { RhymeRequest } from '../db/mongo/models/RhymeRequest';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

// Приветствие при старте
bot.start((ctx) => {
  ctx.reply('Привет! Напиши слово — я найду к нему рифмы ✍️');
});

// Обработка входящих сообщений
bot.on('text', async (ctx) => {
  const input = ctx.message.text.trim();

  ctx.reply(`Ищу рифмы для слова: "${input}"...`);

  try {
    const rhymes = await getRhymes(input);

    // Сохраняем запрос в MongoDB
    await RhymeRequest.create({
      word: input,
      rhymes,
      userId: ctx.from?.id?.toString() || 'anonymous'
    });

    if (rhymes.length === 0) {
      ctx.reply('Увы, рифм не нашлось 😕 Попробуй другое слово.');
    } else {
      ctx.reply(`Вот что нашёл:\n${rhymes.join(' / ')}`);
    }
  } catch (err) {
    console.error('Ошибка при обработке сообщения:', err);
    ctx.reply('Что-то пошло не так. Попробуй чуть позже 🙏');
  }
});

export function launchBot() {
  bot.launch();
  console.log('🤖 Бот успешно запущен');
}
