import mongoose from 'mongoose';

const RhymeRequestSchema = new mongoose.Schema({
  word: String,
  rhymes: [String],
  userId: String,
  date: { type: Date, default: Date.now },
});

export const RhymeRequest = mongoose.model('RhymeRequest', RhymeRequestSchema);
