import { IMGUR_CLIENT_ID } from '../../secret'
import qs from 'qs'

const clientID = IMGUR_CLIENT_ID
// const secret = IMGUR_SECRET
const rootURL = 'https://api.imgur.com'

export default {
  login() {
    const queryString = {
      client_id: clientID,
      response_type: 'token',
    }

    console.log('login:', queryString)
    window.location = `${rootURL}/oauth2/authorize?${qs.stringify(queryString)}`
  }
}
