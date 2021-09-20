import jwt from 'express-jwt'
import JwksRsa from 'jwks-rsa'
import { domain, audience } from '../config/env.dev'

export const checkJwt = jwt({
  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256'],
})
