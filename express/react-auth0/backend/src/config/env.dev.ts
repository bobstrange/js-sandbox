import dotenv from 'dotenv'
dotenv.config()

const audience = process.env.AUTH0_AUDIENCE
const domain = process.env.AUTH0_DOMAIN
const apiPort = process.env.API_PORT
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL

if (!audience) {
  throw new Error(
    '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
  )
}

if (!domain) {
  throw new Error(
    '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
  )
}

if (!apiPort) {
  throw new Error(
    '.env is missing the definition of a API_PORT environmental variable'
  )
}

if (!clientOriginUrl) {
  throw new Error(
    '.env is missing the definition of a APP_ORIGIN environmental variable'
  )
}

const clientOrigins = ['http://localhost:3000']

export { audience, domain, apiPort, clientOriginUrl, clientOrigins }
