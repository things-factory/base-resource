import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const entityResolver = {
  async entity(_: any, { name }, context: any) {
    return await getRepository(Entity).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'master', 'childrens', 'creator', 'updater']
    })
  }
}
