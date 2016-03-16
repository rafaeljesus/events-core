export default {
  test: 'mongodb://localhost:27017/events_test',
  development: 'mongodb://localhost:27017/events',
  production: process.env.MONGODB_URL
}
