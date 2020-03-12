import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class CreateUser1583989324593 implements MigrationInterface {
  private indexName = 'idx_user_first_name_last_name'

    public async up(queryRunner: QueryRunner): Promise<any> {
      const table = new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
            isGenerated: true
          },
          {
            name: 'first_name',
            type: 'varchar'
          },
          {
            name: 'last_name',
            type: 'varchar'
          },
          {
            name: 'age',
            type: 'int'
          }
        ]
      })

      const tableIndex = new TableIndex({
        name: this.indexName,
        columnNames: ['first_name', 'last_name']
      })
      await queryRunner.createTable(table, true)
      await queryRunner.createIndex('user', tableIndex)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.getTable('user')
      await queryRunner.dropIndex('user', this.indexName)
      await queryRunner.dropTable('user')
    }
}
