import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname, '../**/*.entity.(ts|js)'],
  synchronize: true
}
