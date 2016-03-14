export default () => {
  return {
    name: 'purchase_order',
    status: 'created',
    properties: {
      number: 'foo',
      items: [{
        lineNumber: '10200'
      }]
    }
  }
}
