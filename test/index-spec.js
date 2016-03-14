import test from 'ava'
import 'babel-register'

import '../lib/db'
import Event from '../events'
import fixture from './fixture'

let data = fixture()

test.beforeEach(async function () {
  await [
    Event.create(data),
    Event.create(data),
    Event.create(data)
  ]
})

test.afterEach(async function () {
  await Event.remove()
})

test('should search events from page 1', async function (t) {
  let res = await Event.search({
    page: 1,
    pageSize: 10
  })
  t.is(res.total, 3)
  t.is(res.result.length, 3)
})
