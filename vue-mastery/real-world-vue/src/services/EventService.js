import axios from 'axios'

const baseURL = 'http://localhost:3000'

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export class EventService {
  getEvents() {
    return apiClient.get('/events')
  }
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
