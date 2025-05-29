import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import businessRoutes from './routes/businessRoutes';
import { DEFAULT_PORT } from './constants/defaults';
import { ALLOWED_ORIGINS } from './constants/common';

dotenv.config();
const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

app.use('/api/businesses', businessRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
