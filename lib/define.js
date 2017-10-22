/**
 * Define task
 * @function define
 * @param {string|string[]} names - Name of pon tasks to call
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

/** @lends define */
function define (names, options = {}) {
  async function task (ctx) {
    const {runner} = ctx
    if (!runner) {
      throw new Error(`Pon runner not found. You needs pon 5.0.3 or later`)
    }
    return runner.run(names)
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define
