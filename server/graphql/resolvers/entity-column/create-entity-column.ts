import { getRepository } from 'typeorm'
import { Entity, EntityColumn } from '../../../entities'

export const createEntityColumn = {
  async createEntityColumn(_: any, { entityColumn }, context: any) {
    const repository = getRepository(EntityColumn)

    if (entityColumn.entity) {
      entityColumn.entity = await getRepository(Entity).findOne({ where: { id: entityColumn.entity } })
    }

    return repository.save({
      domain: context.state.domain,
      ...entityColumn,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
