import Redis from 'ioredis';

export const redis = new Redis(); // Подключаемся по умолчанию к localhost:6379

redis.on('connect', () => {
  console.log('✅ Redis подключен');
});

redis.on('error', (err) => {
  console.error('❌ Ошибка Redis:', err);
});
