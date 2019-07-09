import { getRepository } from 'typeorm'
import { ResourceColumn } from '../../../entities'

export const deleteResourceColumn = {
  async deleteResourceColumn(_: any, { name }, context: any) {
    return await getRepository(ResourceColumn).delete({ domain: context.domain, name })
  }
}
