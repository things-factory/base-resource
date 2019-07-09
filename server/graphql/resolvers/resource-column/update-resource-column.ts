import { getRepository } from 'typeorm'
import { Resource, ResourceColumn } from '../../../entities'

export const updateResourceColumn = {
  async updateResourceColumn(_: any, { name, patch }, context: any) {
    const repository = getRepository(ResourceColumn)
    const resourceColumn = await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['entity']
    })

    if (patch.entity) {
      patch.entity = await getRepository(Resource).findOne({ id: patch.entity })
    }

    return await repository.save({
      ...resourceColumn,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
