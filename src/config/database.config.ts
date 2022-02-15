import { Sequelize } from 'sequelize';

// name, user, password
const db = new Sequelize('test', 'test', 'test', {
	dialect: 'postgres',
	logging: false,
	define: {
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

export default db;
