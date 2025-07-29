import mongoose from 'mongoose';

export async function connectMongo() {
  const uri = process.env.MONGO_URI!;

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB подключен');
  } catch (err) {
    console.error('❌ Не удалось подключиться к MongoDB:', err);
    process.exit(1);
  }
}
