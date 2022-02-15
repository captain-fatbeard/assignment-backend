import { FastifyInstance } from 'fastify';

import {
	indexExpense,
	showExpense,
	createExpense,
	updateExpense,
	deleteExpense,
} from '../controllers';

export async function ExpenseRoute(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', indexExpense);
	fastify.get('/:id', showExpense);
	fastify.post('/', createExpense);
	fastify.put('/:id', updateExpense);
	fastify.delete('/:id', deleteExpense);
}
