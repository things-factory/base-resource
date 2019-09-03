import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const createEntity = {
  async createEntity(_: any, { entity }, context: any) {
    const repository = getRepository(Entity)

    if (entity.master) {
      entity.master = await repository.findOne({ where: { id: entity.master } })
    }

    return await repository.save({
      domain: context.state.domain,
      ...entity,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
