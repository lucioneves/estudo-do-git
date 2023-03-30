
import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Enviado com,  sucesso!!!' });
});

app.listen(3001, () => {
    console.log('Aplicação executada na porta 3001!');
});