import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const createEntity = {
  async createEntity(_: any, { entity }, context: any) {
    const repository = getRepository(Entity)

    if (entity.master) {
      entity.master = await repository.findOne({ where: { id: entity.master } })
    }

    return await repository.save({
      domain: context.domain,
      ...entity,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
