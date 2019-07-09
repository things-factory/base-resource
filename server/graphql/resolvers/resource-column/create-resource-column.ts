import { getRepository } from 'typeorm'
import { Resource, ResourceColumn } from '../../../entities'

export const createResourceColumn = {
  async createResourceColumn(_: any, { resourceColumn }, context: any) {
    const repository = getRepository(ResourceColumn)

    if (resourceColumn.entity) {
      resourceColumn.entity = await getRepository(Resource).findOne({ where: { id: resourceColumn.entity } })
    }

    return repository.save({
      domain: context.domain,
      ...resourceColumn,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
