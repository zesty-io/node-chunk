'use strict'

const chunk = require('./index')
const http = require('http')

let uri = 'http://fakeui.tumblr.com/api/read/json'
let callback = (data) => {
  chunk(data, (result) => {
    // Should log a returned string
    console.log(result)
  })
}

http.get(uri, callback)
