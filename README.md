# node-chunk

Chunks together a response stream.

## Usage

Using the Node core `http` module we get a read stream which
we can chunk the response and operate on the resulting string
with our user defined `callback`.

```
  const chunk = require('chunk')
  const http = require('http')

  let uri = 'https://api.github.com/users/zesty-io/repos'
  let callback = (data) => {
    chunk(data, (result) => {
      console.log(JSON.parse(result))
    })
  }

  http.get(uri, callback)
```
