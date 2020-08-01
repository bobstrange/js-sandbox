import axios from 'axios'

export async function fetchPrograms() {
  return (await axios.get('https://www.onsen.ag/web_api/programs')).data
}
