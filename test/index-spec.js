import test from 'ava'
import 'babel-register'

import '../src/db'
import Event from '../src/model'
import fixture from './fixture'

const assign = Object.assign

let data = fixture()

test.beforeEach(async () => {
  await Promise.all([
    Event.create(assign(data, {status: 'order_created'})),
    Event.create(assign(data, {status: 'order_updated'})),
    Event.create(assign(data, {status: 'order_finished'}))
  ])
})

test.afterEach(async () => {
  await Event.remove()
})

test('should search events by status name', async (t) => {
  let res = await Event.search({
    status: 'order_created',
    page: 1,
    pageSize: 10
  })
  t.is(res.total, 1)
  t.is(res.result.length, 1)
})
