import express from 'express';

const app = express();
app.get('/', (req: express.Request, res: express.Response) => {
  return res.send('Hello World');
});

app.listen(3000, () => {
  //  eslint-disable-next-line
  console.log('Server listening on port 3000');
});
