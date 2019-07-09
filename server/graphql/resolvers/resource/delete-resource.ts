import { getRepository } from 'typeorm'
import { Resource } from '../../../entities'

export const deleteResource = {
  async deleteResource(_: any, { name }, context: any) {
    return await getRepository(Resource).delete({ domain: context.domain, name })
  }
}
