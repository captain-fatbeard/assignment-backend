import { fastify } from 'fastify';
import fastifyCors from 'fastify-cors';

import {
	healthRoutes,
	ExpenseRoute,
	SupplierRoute,
	DashboardRoute,
} from './api/routes';

import config from '@config';

const app = fastify({
	logger: {
		prettyPrint: config.env === 'development',
	},
});

export async function createServer() {
	await app.register(fastifyCors);
	await app.register(healthRoutes, { prefix: '/api/health' });
	await app.register(ExpenseRoute, { prefix: '/api/expenses' });
	await app.register(SupplierRoute, { prefix: '/api/suppliers' });
	await app.register(DashboardRoute, { prefix: '/api/dashboard' });

	app.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return app;
}
