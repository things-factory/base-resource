import { getRepository } from 'typeorm'
import { EntityColumn } from '../../../entities'

export const entityColumnResolver = {
  async entityColumn(_: any, { name }, context: any) {
    return await getRepository(EntityColumn).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'entity', 'creator', 'updater']
    })
  }
}
