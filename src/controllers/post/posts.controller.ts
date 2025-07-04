import type { RequestHandler } from 'express';
import { PostModel } from '../../models';

export const getAllPost: RequestHandler = async (_req, res) => {
	try {
		const posts = await PostModel.find().exec();
		if (!posts) res.status(404).json({ message: 'No se encontraron posts' });
		res.status(200).json(posts);
		return;
	} catch (_error) {
		res.status(500).json({ message: 'Error al obtener los posts' });
	}
};
