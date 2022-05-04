const logger = require('./common/logger')
const criticalErrorDialog = require('./dialogs/errors/criticalErrorDialog')

/**
 *
 * @param {Error} err
 * @returns {void}
 */
function handleError (err) {
  // Ignore network errors that might happen during the
  // execution.
  if (err.stack.includes('net::')) {
    return
  }

  logger.error(err)
  criticalErrorDialog(err).catch((err) => {
    logger.error(err)
  })
}

module.exports = handleError
