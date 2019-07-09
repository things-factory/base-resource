import { getRepository } from 'typeorm'
import { EntityColumn } from '../../../entities'

export const deleteEntityColumn = {
  async deleteEntityColumn(_: any, { name }, context: any) {
    return await getRepository(EntityColumn).delete({ domain: context.domain, name })
  }
}
