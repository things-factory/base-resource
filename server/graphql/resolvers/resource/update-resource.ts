import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const updateResource = {
  async updateResource(_: any, { name, patch }, context: any) {
    const repository = getRepository(Resource)
    const resource = repository.findOne({
      where: { domain: context.domain, name },
      relations: ['parent', 'childrens']
    })

    if (patch.parent) {
      patch.parent = await repository.findOne({ where: { domain: context.domain, id: patch.parent } })
    }

    if (patch.childrens && patch.childrens.length) {
      patch.childrens = await repository.findByIds(patch.childrens)
    }

    return await repository.save({
      ...resource,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
