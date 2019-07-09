import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const createResource = {
  async createResource(_: any, { resource }, context: any) {
    const repository = getRepository(Resource)

    if (resource.parent) {
      resource.parent = await repository.findOne({ where: { id: resource.parent } })
    }

    return await repository.save({
      domain: context.domain,
      ...resource,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
