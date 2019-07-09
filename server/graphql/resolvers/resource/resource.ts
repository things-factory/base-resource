import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const resourceResolver = {
  async resource(_: any, { name }, context: any) {
    return await getRepository(Resource).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'parent', 'childrens', 'creator', 'updater']
    })
  }
}
