import dotenv from 'dotenv'
import { Octokit } from '@octokit/core'

dotenv.config()

const octokit = new Octokit({
  auth: process.env.TOKEN
})


const total = 955
const perPage = 10
const pages = Math.ceil(total / perPage)
const pageNums = Array.from(Array(pages).keys()).map((i) => i + 1) // 0 ~ ではなく 1 ~ にしたいので

console.log(`pageNums: ${pageNums}`)

const results = pageNums.map(async (i) => {
  try {
    const { data } = await octokit.request('GET /repos/{org}/{repo}/secret-scanning/alerts', {
      org: process.env.OWNER,
      repo: process.env.REPO,
      per_page: perPage,
      page: i
    })
    return data
  } catch (e) {
    console.error(`page ${i} error`)
    console.log(e.response.data.message)
  }
}).flatten

console.log(`結果: ${results}`)
