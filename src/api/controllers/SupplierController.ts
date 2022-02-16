import { FastifyReply, FastifyRequest } from 'fastify';

import { SupplierInstance } from '../models';

export const indexSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { limit = 3, page = 1 }: { limit?: number; page?: number } = req.query;
	const pageNumber: number = +page;
	const limitNumber: number = +limit;

	const offset = (page - 1) * limitNumber;
	const records = await SupplierInstance.findAndCountAll({ where: {}, limit: limitNumber, offset });

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

export const showSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await SupplierInstance.findOne({ where: { id } });
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

export const createSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const record = await SupplierInstance.create(req.body);
	return res.send({
		status: 201,
		data: record,
	});
};

export const updateSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await SupplierInstance.findOne({ where: { id } });
	record.update(req.body);
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

export const deleteSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const { id }: { id?: number } = req.params;
	const record = await SupplierInstance.findOne({ where: { id } });
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
