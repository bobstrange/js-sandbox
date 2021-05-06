import axios from 'axios'

export type Grudge = {
  id: string
  person: string
  reason: string
  forgiven: boolean
}

export const fetchGrudges = async (): Promise<Grudge[]> => {
  const res = await axios.get<Grudge[]>('http://localhost:3009/grudges')
  return res.data
}
