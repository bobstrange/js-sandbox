import 'dotenv/config'

export const PORT = Number(process.env.PORT || '8080')

// if (!process.env.DB_PORT) {
//   throw new Error('DB_PORT is not defined')
// }

// if (!process.env.DB_HOST) {
//   throw new Error('DB_HOST is not defined')
// }

// export const DB_HOST = process.env.DB_HOST
// export const DB_PORT = Number(process.env.DB_PORT)
