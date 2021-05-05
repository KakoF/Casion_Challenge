import { createConnection } from 'typeorm'
//createConnection().then(() => console.log('connected to database'))
const config: any = {
    "type": process.env.TYPEORM_CONNECTION,
    "host": "localhost",
    "port": process.env.TYPEORM_PORT,
    "database": process.env.TYPEORM_DATABASE,
    "useUnifiedTopology": true,
    "useNewUrlParser": true,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "authSource": process.env.TYPEORM_AUTHSOURCE,
    "synchronize": process.env.TYPEORM_SYNCHRONIZE,
    "entities": [
        "src/domain/entities/**/*.ts"
    ],
    "migrations": [
        "src/infra/database/migration/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/infra/database/migration"
    }
}
createConnection(config).then(async connection => {
    console.log('connected to database');
}).catch(error => console.log(error));
