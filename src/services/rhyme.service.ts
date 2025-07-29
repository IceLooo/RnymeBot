import axios from 'axios';
import { redis } from '../db/redis/client';

export async function getRhymes(word: string): Promise<string[]> {
  const key = word.toLowerCase();

  // Проверяем кэш
  const fromCache = await redis.get(key);
  if (fromCache) {
    console.log('⚡️ Рифмы из Redis');
    return JSON.parse(fromCache);
  }

  // Ищем рифмы через Datamuse API
  const res = await axios.get('https://api.datamuse.com/words', {
    params: { rel_rhy: word }
  });

  const rhymes = res.data.slice(0, 5).map((item: any) => item.word);

  // Кэшируем результат на 1 час
  await redis.set(key, JSON.stringify(rhymes), 'EX', 60 * 60);
  console.log('🌐 Рифмы получены с API и закэшированы');

  return rhymes;
}
