import { IMGUR_CLIENT_ID } from '../../secret'
import qs from 'qs'
import axios from 'axios'

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
  },
  fetchImages(accessToken) {
    console.log('AccessToken:', accessToken)
    return axios.get(`${rootURL}/3/account/me/images`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  },
  uploadImages(images, accessToken) {
    Array.from(images).map(image => {
      const formData = new FormData()
      formData.append('image', image)
      return axios.post(`${rootURL}/3/image`, formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
    })
  }
}
