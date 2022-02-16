import { FastifyInstance } from 'fastify';

import { dashboard } from '../controllers';

export async function DashboardRoute(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', dashboard);
}
