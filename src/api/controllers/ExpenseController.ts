import { FastifyReply, FastifyRequest } from 'fastify';

import { ExpenseInstance } from '../models/ExpenseModel';

export const indexExpense = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const records = await ExpenseInstance.findAll({ where: {} });
	return res.send({
		status: 200,
		data: records,
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
