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
export const GET_REGISTER = `
mutation RegisterAccount(
  $email: String!
  $password: String!
  $redirectUrl: String!
) {
  accountRegister(
    input: { email: $email, password: $password, redirectUrl: $redirectUrl }
  ) {
    errors {
      field
      message
    }
    requiresConfirmation
  }
}
`;
//# sourceMappingURL=queries.js.map
