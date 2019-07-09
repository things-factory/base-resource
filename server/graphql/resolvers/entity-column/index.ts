import { entityColumnResolver } from './entity-column'
import { entityColumnsResolver } from './entity-columns'

import { updateEntityColumn } from './update-entity-column'
import { createEntityColumn } from './create-entity-column'
import { deleteEntityColumn } from './delete-entity-column'

export const Query = {
  ...entityColumnResolver,
  ...entityColumnsResolver
}

export const Mutation = {
  ...updateEntityColumn,
  ...createEntityColumn,
  ...deleteEntityColumn
}
