import axios, {AxiosInstance} from 'axios'

export class OnsenClient {
  private client: AxiosInstance
  private BASE_URL = 'https://www.onsen.ag/web_api'

  constructor() {
    this.client = axios.create({
      baseURL: this.BASE_URL
    })
  }

  async fetchPrograms(): Promise<OnsenProgram[]> {
    try {
      const response = await this.client.get('/programs')
      return response.data
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

type Category = 'radio' | 'movie' | 'game' | 'anime' | 'new' | 'bonus' | 'premium'
export type OnsenProgram = {
  id: number
  directory_name: string
  display: boolean
  title: string
  image: {
    url: string
    h304: {
      url: string
    }
    h198: {
      url: string
    }
  }
  new: boolean
  list: true
  delivery_interval: string
  derivery_day_of_week: number
  category_list: Category[]
  copyright: string
  sponsor_name: string
  pay: boolean
  updated: string
  performers: {
    id: number
    name: string
  }[]
  related_links: {
    link_url: string
    image: string
  }[]
  related_infos: []
  related_programs: []
  contents: {
    id: number
    title: string
    bonus: boolean
    sticky: boolean
    latest: boolean
    media_type: 'movie'
    premium: boolean
    program_id: number
    delivery_date: string
    movie: boolean
    poster_image_url: string
    streaming_url: string | null
    tag_image: []
    guests: []
  }
}
