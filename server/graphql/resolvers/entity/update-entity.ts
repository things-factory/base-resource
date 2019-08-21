import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const updateEntity = {
  async updateEntity(_: any, { name, patch }, context: any) {
    const repository = getRepository(Entity)
    const entity = repository.findOne({
      where: { domain: context.domain, name },
      relations: ['master', 'childrens']
    })

    if (patch.master) {
      patch.master = await repository.findOne({ where: { domain: context.domain, id: patch.master } })
    }

    if (patch.childrens && patch.childrens.length) {
      patch.childrens = await repository.findByIds(patch.childrens)
    }

    return await repository.save({
      ...entity,
      ...patch,
      updater: context.state.user
    })
  }
}
