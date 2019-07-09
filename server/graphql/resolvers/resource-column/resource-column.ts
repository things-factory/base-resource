import { getRepository } from 'typeorm'
import { ResourceColumn } from '../../../entities'

export const resourceColumnResolver = {
  async resourceColumn(_: any, { name }, context: any) {
    return await getRepository(ResourceColumn).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'entity', 'creator', 'updater']
    })
  }
}
