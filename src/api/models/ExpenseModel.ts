import { DataTypes, Model } from 'sequelize';

import db from '../../config/database.config';

interface ExpenseAttributes {
	id: number;
	supplier_id: number;
	name: string;
	value: number;
	is_paid: boolean;
}

export class ExpenseInstance extends Model<ExpenseAttributes> {}

ExpenseInstance.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		supplier_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		value: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		is_paid: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		sequelize: db,
		tableName: 'expenses',
	},
);
