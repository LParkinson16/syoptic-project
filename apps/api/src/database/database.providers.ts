import mongoose from 'mongoose';
const mongoUrl = `mongodb+srv://Latiff:${process.env.MONGODB_PASSWORD}@cluster0.ynhkxap.mongodb.net/?retryWrites=true&w=majority`
console.log(mongoUrl)

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(mongoUrl),
  },
];