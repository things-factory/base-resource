import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const resourcesResolver = {
  async resources(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Resource).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
