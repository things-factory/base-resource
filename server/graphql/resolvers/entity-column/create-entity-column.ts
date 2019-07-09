import { getRepository } from 'typeorm'
import { Entity, EntityColumn } from '../../../entities'

export const createEntityColumn = {
  async createEntityColumn(_: any, { entityColumn }, context: any) {
    const repository = getRepository(EntityColumn)

    if (entityColumn.entity) {
      entityColumn.entity = await getRepository(Entity).findOne({ where: { id: entityColumn.entity } })
    }

    return repository.save({
      domain: context.domain,
      ...entityColumn,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
