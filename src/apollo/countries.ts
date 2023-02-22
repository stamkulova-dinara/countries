import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

export const SEARCH_COUNTRIES_BY_CODE = gql`
  query SearchByCode($code: ID!){
    country(code: $code) {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;
