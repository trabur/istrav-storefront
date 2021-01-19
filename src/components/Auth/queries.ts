
export const GET_LOGIN = `
mutation Login($email: String!, $password: String!) {
  tokenCreate(
    email: $email
    password: $password
  ) {
    token
    csrfToken
    refreshToken
    user {
      id
      
    }
    accountErrors {
      field
      message
      code
    }
  }
}
`;