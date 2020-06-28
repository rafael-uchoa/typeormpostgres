import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import './routes';
import routes from './routes';

const server = async () => {
  await createConnection();

  const app = express();
  const port = 7777;

  app.use(express.json());
  app.use(cors());
  app.use(routes);

  app.listen(port, () => console.log(`Server listening on port ${port}`));
};

export default server;
