export const priceFragment = `
fragment Price on TaxedMoney {
  gross {
    amount
    currency
  }
  net {
    amount
    currency
  }
}
`;
export const basicProductFragment = `
fragment BasicProductFields on Product {
  id
  name
  slug
  thumbnail {
    url
    alt
  }
  thumbnail2x: thumbnail(size: 510) {
    url
  }
}
`;
export const productPricingFragment = `
  ${priceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;
export const GET_FEATURED_PRODUCTS = `
  ${basicProductFragment}
  ${productPricingFragment}
  query FeaturedProducts($channel: String) {
    collection(slug: "featured-products", channel: $channel) {
      name
      products(first: 20) {
        edges {
          node {
            ...BasicProductFields
            ...ProductPricingField
            category {
              id
              slug
              name
            }
          }
        }
      }
    }
  }
`;
export const GET_CATEGORIES = `
  query ProductsList($channel: String) {
    collection(slug: "featured-products", channel: $channel) {
      backgroundImage {
        url
        alt
      }
    }
    categories(level: 0, first: 8) {
      edges {
        node {
          id
          name
          slug
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=queries.js.map
