import type { RequestHandler } from 'express';
import { UserModel } from '../../models';
import { userSchema } from '../../schemas/users.schema';

export const getAllUsers: RequestHandler = async (_req, res) => {
	try {
		const users = await UserModel.find().exec();
		if (!users) res.status(404).json({ message: 'No se encontraron usuarios' });
		res.status(200).json(users);
		return;
	} catch (_error) {
		res.status(500).json({ message: 'Error al obtener los usuarios' });
	}
};

export const getUserById: RequestHandler = async (_req, res) => {
	try {
		const { id } = _req.params;
		const user = await UserModel.findById(id).exec();
		if (!user) res.status(404).json({ message: 'No se encontro el usuario' });
		res.status(200).json(user);
		return;
	} catch (_error) {
		res.status(500).json({ message: 'Error al obtener el usuario' });
	}
};

export const createUser: RequestHandler = async (_req, res) => {
	try {
		const { username, email, avatar, role } = userSchema
			.omit({ id: true, createdAt: true, updatedAt: true })
			.parse(_req.body);
		const user = await UserModel.create({ username, email, avatar, role });
		res.status(201).json(user);
		return;
	} catch (_error) {
		res.status(500).json({
			message: 'Error al crear el usuario',
			error: _error,
		});
	}
};
