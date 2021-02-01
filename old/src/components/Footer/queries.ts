
export const GET_MAIN_FOOTER = `fragment MainMenuSubItem on MenuItem {
  id
  name
  category {
    id
    name
    slug
  }
  url
  collection {
    id
    name
  }
  page {
    slug
  }
  parent {
    id
  }
}

query MainMenu($slug: String!) {
  menu(slug: $slug) {
    id
    items {
      ...MainMenuSubItem
      children {
        ...MainMenuSubItem
        children {
          ...MainMenuSubItem
        }
      }
    }
  }
}`