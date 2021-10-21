import dotenv from 'dotenv'
import { Octokit } from '@octokit/core'

dotenv.config()

const octokit = new Octokit({
  auth: process.env.TOKEN
})

const { data } = await octokit.request('GET /repos/{org}/{repo}/secret-scanning/alerts', {
  org: process.env.OWNER,
  repo: process.env.REPO
})

console.log(data)
