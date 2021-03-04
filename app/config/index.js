import { Sequelize } from 'sequelize';
import dbConfig from './conf.js';

export default connection = new Sequelize(dbConfig.dbname, dbConfig.user, '', {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})