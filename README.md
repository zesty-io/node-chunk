# node-chunk

Chunks together a response stream.

## Usage

Using the Node core `http` module we get a read stream which
we can chunk the response and operate on the resulting string
with our user defined `callback`.

```
  const chunk = require('./index')
  const http = require('http')

  let uri = 'http://fakeui.tumblr.com/api/read/json'
  let callback = (data) => {
    chunk(data, (result) => {
      // Operate on result string
      console.log(result)
    })
  }

  http.get(uri, callback)
```
