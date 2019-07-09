import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const resourcesResolver = {
  async resources(_: any, params: ListParam) {
    const queryBuilder = getRepository(Resource).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Resource.domain', 'Domain')
      .leftJoinAndSelect('Resource.parent', 'Parent')
      .leftJoinAndSelect('Resource.columns', 'Columns')
      .leftJoinAndSelect('Resource.creator', 'Creator')
      .leftJoinAndSelect('Resource.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
