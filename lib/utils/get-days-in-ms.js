/**
 * Returns the number of ms for a given number of days
 *
 * @param {number} days The number of days in ms (defaults to 1)
 */
const getDaysInMS = (days = 1) => 1000 * 60 * 60 * 24 * days;

module.exports = getDaysInMS;
