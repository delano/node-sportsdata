/** SPORTSDATA API - NHL Example
*
* Usage:
*        $ export SPORTSDATA_NHL=[APIKEY]
*        $ node example/nhl.js
**/

var sportsdata = require('../index').NHL;
var APIKEY = process.env.SPORTSDATA_NHL;

console.log('Using key:', APIKEY);

// Init the object with the access level, version, apikey, year, and season you care about
sportsdata.init('t', 3, APIKEY, '2014', 'REG');

sportsdata.getSeasonSchedule(function(error, schedule) {
  if (error) {
    return console.log('Error:', error);
  }
  console.log(schedule);
});
