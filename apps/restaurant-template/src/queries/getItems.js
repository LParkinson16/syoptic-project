import { gql } from '@apollo/client';

export const getItems = gql`
query {
  allSets{
    id
    name
    description
    price
    allergens
    image
  }
}
`