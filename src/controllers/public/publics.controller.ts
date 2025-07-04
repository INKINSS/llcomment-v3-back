import type { RequestHandler } from 'express';

export const dashboard: RequestHandler = (_req, res) => {
	res.send('Dashboard');
};
