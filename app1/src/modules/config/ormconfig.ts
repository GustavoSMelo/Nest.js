import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    database: 'app',
    password: '123456789',
    username: 'gustavomelo',
    port: 5432,
    synchronize: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
});
