/**
 * Pon task to call another task
 * @module pon-task-task
 * @version 1.0.1
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
