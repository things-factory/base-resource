import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ResourceColumn } from '../../../entities'

export const resourceColumnsResolver = {
  async resourceColumns(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(ResourceColumn).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
