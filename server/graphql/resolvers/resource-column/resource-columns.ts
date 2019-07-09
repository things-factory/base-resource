import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ResourceColumn } from '../../../entities'

export const resourceColumnsResolver = {
  async resourceColumns(_: any, params: ListParam) {
    const queryBuilder = getRepository(ResourceColumn).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('ResourceColumn.domain', 'Domain')
      .leftJoinAndSelect('ResourceColumn.entity', 'Entity')
      .leftJoinAndSelect('ResourceColumn.creator', 'Creator')
      .leftJoinAndSelect('ResourceColumn.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
