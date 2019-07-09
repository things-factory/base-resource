import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const entitiesResolver = {
  async entities(_: any, params: ListParam) {
    const queryBuilder = getRepository(Entity).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Entity.domain', 'Domain')
      .leftJoinAndSelect('Entity.master', 'Master')
      .leftJoinAndSelect('Entity.columns', 'Columns')
      .leftJoinAndSelect('Entity.creator', 'Creator')
      .leftJoinAndSelect('Entity.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
