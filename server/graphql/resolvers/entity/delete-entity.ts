import { getRepository } from 'typeorm'
import { Entity } from '../../../entities'

export const deleteEntity = {
  async deleteEntity(_: any, { name }, context: any) {
    return await getRepository(Entity).delete({ domain: context.state.domain, name })
  }
}
