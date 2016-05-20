const host = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost'

export default {
  test: `mongodb://localhost:27017/events_test`,
  development: `mongodb://${host}:27017/events`,
  production: process.env.MONGODB_URL
}
