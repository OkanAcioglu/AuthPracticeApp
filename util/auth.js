import axios from 'axios'

<<<<<<< HEAD
const API_KEY = 'asd'
=======
const API_KEY = 'AIzaSyAyg1UxgUFx6bE4jvqOTPw8p2189mqboRQ'
>>>>>>> ffccf893ab812d892e067482c8cc5b1821c269b8

async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  )
}
