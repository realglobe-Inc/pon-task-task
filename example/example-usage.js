'use strict'

const pon = require('pon')
const task = require('pon-task-task')

;(async () => {
  const run = pon({
    doSomething: () => { /* ... */},
    callAnother: [task('doSomething')]
  })

  run('callAnother')
}).catch((err) => console.error(err))
