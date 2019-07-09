import { entityResolver } from './entity'
import { entitiesResolver } from './entities'

import { updateEntity } from './update-entity'
import { createEntity } from './create-entity'
import { deleteEntity } from './delete-entity'

export const Query = {
  ...entitiesResolver,
  ...entityResolver
}

export const Mutation = {
  ...updateEntity,
  ...createEntity,
  ...deleteEntity
}
