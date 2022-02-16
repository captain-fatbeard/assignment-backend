import { FastifyReply, FastifyRequest } from 'fastify';

import { ExpenseInstance } from '../models';

export const indexExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { limit = 3, page = 1 }: { limit?: number; page?: number } = req.query;
	const pageNumber: number = +page;
	const limitNumber: number = +limit;

	const offset = (page - 1) * limitNumber;
	const records = await ExpenseInstance.findAndCountAll({ where: {}, limit: limitNumber, offset });

	return res.send({
		status: 200,
		data: records.rows,
		total: records.count,
		totalPages: Math.ceil(records.count / limitNumber),
		page: pageNumber,
		next: {
			page: pageNumber + 1,
			limitNumber,
		},
		previous: {
			page: pageNumber - 1,
			limitNumber,
		},
	});
};

export const showExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await ExpenseInstance.findOne({ where: { id } });
	if (!record) {
		return res.send({
			status: 404,
			msg: 'not found',
		});
	}
	return res.send({
		status: 200,
		data: record,
	});
};

export const createExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const record = await ExpenseInstance.create(req.body);
	return res.send({
		status: 201,
		data: record,
	});
};

export const updateExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await ExpenseInstance.findOne({ where: { id } });
	if (!record) {
		return res.send({
			status: 404,
			msg: 'not found',
		});
	}
	record.update(req.body);
	return res.send({
		status: 200,
		data: record,
	});
};

export const deleteExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await ExpenseInstance.findOne({ where: { id } });
	if (!record) {
		return res.send({
			status: 404,
			msg: 'not found',
		});
	}
	await record.destroy();
	return res.send({
		status: 200,
		msg: 'deleted',
	});
};
