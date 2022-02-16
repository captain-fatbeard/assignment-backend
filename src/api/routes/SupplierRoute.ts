import { FastifyInstance } from 'fastify';

import {
	indexSupplier,
	showSupplier,
	createSupplier,
	updateSupplier,
	deleteSupplier,
} from '../controllers';

export async function SupplierRoute(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', indexSupplier);
	fastify.get('/:id', showSupplier);
	fastify.post('/', createSupplier);
	fastify.put('/:id', updateSupplier);
	fastify.delete('/:id', deleteSupplier);
}
