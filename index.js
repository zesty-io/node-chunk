'use strict'

/**
 * Chunks together response stream
 * @param  {Object}   res Response from `http.request` core module
 * @param  {Function} cb  Callback to provide response too
 */
module.exports = function chunk(res, cb) {
  let chunks = []
  res.on('data', (chunk) => chunks.push(chunk))
  res.on('end', () => cb(Buffer.concat(chunks).toString()))
}
