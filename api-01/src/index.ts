
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Enviado com, sucesso!!!' });
});

app.listen(3001, () => {
    console.log('Aplicação executada na porta 3001!');
});