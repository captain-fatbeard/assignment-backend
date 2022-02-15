import { fastify } from 'fastify';
import fastifyCors from 'fastify-cors';

import { healthRoutes } from './api/routes';

import config from '@config';

const app = fastify({
	logger: {
		prettyPrint: config.env === 'development',
	},
});

export async function createServer() {
	await app.register(fastifyCors);
	await app.register(healthRoutes, { prefix: '/api/health' });

	app.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return app;
}
