import { GET_REGISTER, GET_LOGIN } from './queries'

let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI

export function login (email, password) {
  // data request
  fetch(apiUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: GET_LOGIN,
      variables: {
        email: email,
        password: password
      },
    })
  })
    .then(r => r.json())
    .then(value => {
      console.log('login', value)
      let errors = value.data.tokenCreate.accountErrors
      if (errors.length) return alert(errors[0].message)

      localStorage.setItem('token', value.data.tokenCreate.token)
      window.location.href = `/account`
    })
}

export function register (email, password) {
  // data request
  fetch(apiUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: GET_REGISTER,
      variables: {
        email: email,
        password: password,
        redirectUrl: window.location.href
      },
    })
  })
    .then(r => r.json())
    .then(value => {
      console.log('register', value)
      let errors = value.data.accountRegister.errors
      if (errors.length) return alert(errors[0].message)

      // now log the use in
      if (value.data.accountRegister.requiresConfirmation === false) {
        login(email, password)
      }
    })
}