import { DataTypes,  Model } from 'sequelize';
import connection from '../config/index.js'

class TestModel extends Model {}

TestModel.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
},{
    sequelize: connection,
    modelName: 'test',
    timestamps: false
});


export default TestModel;