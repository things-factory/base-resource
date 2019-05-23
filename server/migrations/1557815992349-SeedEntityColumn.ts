import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Resource, ResourceColumn } from '../entities'
import { ENTITY_COLUMNS as SEED_ENTITY_COLUMNS } from '../seed-data/entity-columns'
import { Domain } from '@things-factory/shell'

export class SeedEntityColumn1557815992349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(ResourceColumn)
    const entityRepository = getRepository(Resource)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({ name: 'SYSTEM' })

    try {
      SEED_ENTITY_COLUMNS.forEach(async entityColumn => {
        const entity = await entityRepository.findOne({
          domain,
          name: entityColumn.entityName
        })

        await repository.save({
          ...entityColumn,
          domain,
          entity
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // TODO
  }
}
