import app from './app';
import connectDB from './db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server sprinting at http://localhost:${PORT}`);
  });
});
