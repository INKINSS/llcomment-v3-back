import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './db/config';
import routes from './routes';

const app = express();

//middlewares
app.use(express.json());

//config
dotenv.config({
	path:
		process.env.NODE_ENV === 'production'
			? '.env.production.local'
			: '.env.development.local',
});

//routes
app.use('/api', routes);

// Connect to MongoDB
connectDB();

app.get('/', (_req, res) => {
	res.send('Hello World!');
});

export default app;
