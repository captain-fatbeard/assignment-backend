import { FastifyReply, FastifyRequest } from 'fastify';

import { SupplierInstance } from '../models';

export const indexSupplier = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	const records = await SupplierInstance.findAll({ where: {} });
	return res.send({
		status: 200,
		data: records,
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
