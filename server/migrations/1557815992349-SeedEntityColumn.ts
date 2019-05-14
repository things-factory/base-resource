import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Resource, ResourceColumn } from '../entities'

const SEED_ENTITY_COLUMNS = [
  {
    name: 'name',
    colType: 'string'
  },
  {
    name: 'description',
    colType: 'string'
  }
]

export class SeedEntityColumn1557815992349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const entityRepository = getRepository(Resource)
    const foundEntities = await entityRepository.find({
      take: 1
    })
    const repository = getRepository(ResourceColumn)

    SEED_ENTITY_COLUMNS.forEach(entityColumn => {
      repository.save({
        ...entityColumn,
        entity: foundEntities[0]
      })
    })
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
