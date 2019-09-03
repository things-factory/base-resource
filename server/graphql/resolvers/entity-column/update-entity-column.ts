import { getRepository } from 'typeorm'
import { Entity, EntityColumn } from '../../../entities'

export const updateEntityColumn = {
  async updateEntityColumn(_: any, { name, patch }, context: any) {
    const repository = getRepository(EntityColumn)
    const entityColumn = await repository.findOne({
      where: { domain: context.state.domain, name },
      relations: ['entity']
    })

    if (patch.entity) {
      patch.entity = await getRepository(Entity).findOne({ id: patch.entity })
    }

    return await repository.save({
      ...entityColumn,
      ...patch,
      updater: context.state.user
    })
  }
}
