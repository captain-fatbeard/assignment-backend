import { FastifyReply, FastifyRequest } from 'fastify';

export const dashboard = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
	return res.send({
		status: 200,
		data: {
			suppliers: {
				sup1: {
					paid_expenses: 2,
					un_paid_expenses: 2,
				},
				sup2: {
					paid_expenses: 2,
					un_paid_expenses: 4,
				},
			},
		},
	});
};
