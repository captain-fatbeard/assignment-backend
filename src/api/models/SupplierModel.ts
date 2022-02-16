import { DataTypes, Model } from 'sequelize';

import db from '../../config/database.config';

// import { ExpenseInstance } from './ExpenseModel'

interface SupplierAttributes {
	id: number;
	name: string;
}

export class SupplierInstance extends Model<SupplierAttributes> {}

SupplierInstance.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: 'suppliers',
	},
);

// SupplierInstance.hasMany(ExpenseInstance, {
// sourceKey: 'id',
// foreignKey: 'supplier_id',
// as: 'expenses',
// });
