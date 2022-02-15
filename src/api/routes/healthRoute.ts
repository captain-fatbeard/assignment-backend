import { FastifyInstance } from 'fastify';

import { isUp } from '../controllers';

export async function healthRoutes(fastify: FastifyInstance): Promise<void> {
	fastify.get('/', isUp);
}
