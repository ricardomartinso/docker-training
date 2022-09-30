import express, { json } from 'express';
import prisma from './database.js';

const app = express();
app.use(json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.post('/users', async (req, res) => {
  const body = req.body; // {name: "xablau"}
  await prisma.user.create({
    data: body
  });

  res.sendStatus(201); // created
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor funfando na porta: ${port}`);
});
