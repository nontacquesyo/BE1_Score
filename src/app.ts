import express from "express";
import { PrismaClient } from '@prisma/client';


const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prisma = new PrismaClient();


app.listen(3000, () => {
 console.log(`Start on port 3000.`);
});

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.get('/scores', async (req, res) => {
  const scores = await prisma.score.findMany();
  return res.json(scores);
});

