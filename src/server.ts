import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

//Em produção mudar p está forma//
//app.use(cors({
//  origin: 'https://localhost:3000'
//}));

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('HTTP server running!');
});