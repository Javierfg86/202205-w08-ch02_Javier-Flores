import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { userRouter } from './routers/user.router.js';
import { errorControl } from './middleware/error-control.js';

export const app = express();

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/users', userRouter);

app.use(errorControl);
