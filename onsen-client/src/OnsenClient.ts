import axios, { AxiosInstance } from 'axios'

export class OnsenClient {
  private client: AxiosInstance
  private BASE_URL = 'https://www.onsen.ag/web_api'

  constructor() {
    this.client = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  async fetchPrograms(): Promise<OnsenProgram[]> {
    try {
      const response = await this.client.get<OnsenProgram[]>('/programs')
      return response.data
    } catch (e: unknown) {
      return Promise.reject(e)
    }
  }

  async fetchProgram(
    directoryName: DirectoryName
  ): Promise<OnsenProgramDetail> {
    try {
      const response = await this.client.get<OnsenProgramDetail>(
        `/programs/${directoryName}`
      )
      return response.data
    } catch (e: unknown) {
      return Promise.reject(e)
    }
  }

  async fetchPerformers(): Promise<Performer[]> {
    try {
      const response = await this.client.get<Performer[]>('/performers')
      return response.data
    } catch (e: unknown) {
      return Promise.reject(e)
    }
  }

  async fetchChangeLogs({ page, limit } = { page: 1, limit: 10 }) {
    try {
      const response = await this.client.get('/change_logs', { params: { page, per: limit }})
      return response.data
    } catch (e: unknown) {
      return Promise.reject(e)
    }
  }

  async fetchCommercials(_id: ProgramID): Promise<never> {
    throw 'not yet implemented'
  }
}

type DeliveryDayOfWeek = 1 | 2 | 3 | 4 | 5 | 6
type Category =
  | 'radio'
  | 'movie'
  | 'game'
  | 'anime'
  | 'new'
  | 'bonus'
  | 'premium'
type MediaType = 'movie' | 'sound'

type ProgramID = number
type DirectoryName = string

type Performer = {
  id: number
  name: string
}

export type OnsenProgram = {
  id: ProgramID
  directory_name: DirectoryName
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
  delivery_day_of_week: DeliveryDayOfWeek
  category_list: Category[]
  copyright: string
  sponsor_name: string
  pay: boolean
  updated: string
  performers: Performer[]
  related_links: {
    link_url: string
    image: string
  }[]
  related_infos: []
  related_programs: {
    title: string
    directory_name: string
    category: 'recommend'
    image: string
  }[]
  contents: {
    id: number
    title: string
    bonus: boolean
    sticky: boolean
    latest: boolean
    media_type: MediaType
    premium: boolean
    program_id: number
    delivery_date: string
    movie: boolean
    poster_image_url: string
    streaming_url: string | null
    tag_image: { url: null }[]
    guests: string[]
  }
}

export type OnsenProgramDetail = {
  id: ProgramID
  directory_name: DirectoryName
  program_info: OnsenProgram & {
    hashtag_list: string[]
    premium_introduction_title: string | null
    premium_introduction_description: string | null
    premium: boolean
    bonus: boolean
  }
  topics: {
    title: string
    body: string
    topics_links: {
      link_url: string
      text: string
    }[]
    topics_images: {
      image: {
        url: string
      }
      caption: string | null
      link_url: string | null
      extensible: boolean
    }
    starts_at: string
  }[]
  pickups: []
  current_episode: {
    twitter: string
    title: string
    delivery_date: string
    comments: [
      {
        caption: string
        body: string
      }[]
    ]
    additional_announcements: [
      {
        caption: string
        link_url: string
        image: {
          url: string
        }
      }
    ]
  }
  update_images: {
    caption: string | null
    link_url: string | null
    image: {
      url: string
    }
    extensible: boolean
  }
}
