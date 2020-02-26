import gql from 'graphql-tag'
import { client } from '@things-factory/shell'
import { gqlBuilder } from '@things-factory/utils'

export async function getColumns(tableName) {
  const response = await client.query({
    query: gql`
        query {
            menu (${gqlBuilder.buildArgs({
              name: tableName
            })}) {
                id
                name
                description
                category
                menuType
                rank
                routing
                routingType
                resourceType
                resourceUrl
                resourceName
                idField
                titleField
                gridSaveUrl
                pagination
                detailFormId
                detailLayout
                template
                hiddenFlag
                itemsProp
                totalProp
                fixedColumns
                iconPath
                columns {
                    id
                    name
                    description
                    rank
                    term
                    colType
                    colSize
                    nullable
                    refType
                    refName
                    refUrl
                    refParams
                    refRelated
                    searchRank
                    sortRank
                    reverseSort
                    virtualField
                    extField
                    searchName
                    searchEditor
                    searchOper
                    searchInitVal
                    gridRank
                    gridEditor
                    gridFormat
                    gridValidator
                    gridWidth
                    gridAlign
                    uniqRank
                    formEditor
                    formValidator
                    formFormat
                    defVal
                    rangeVal
                    ignoreOnSave
                }
            }
        }
    `
  })
  return response.data
}
