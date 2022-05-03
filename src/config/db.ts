import { Sequelize } from 'sequelize'
import { db_host, db_port, db_name, db_user, db_password } from './index';

export default new Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    database: 'mypg',
    username: 'postgres',
    password: 'pa$$word22'
})