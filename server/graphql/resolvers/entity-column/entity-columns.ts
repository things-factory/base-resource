import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { EntityColumn } from '../../../entities'

export const entityColumnsResolver = {
  async entityColumns(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(EntityColumn).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('EntityColumn.domain', 'Domain')
      .leftJoinAndSelect('EntityColumn.entity', 'Entity')
      .leftJoinAndSelect('EntityColumn.creator', 'Creator')
      .leftJoinAndSelect('EntityColumn.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
