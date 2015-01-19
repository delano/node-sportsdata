/**
* SPORTSDATA API - NHL Example
*
* Usage:
*        $ export SPORTSDATA_NHL=[APIKEY]
*        $ node example/nhl.js
*
* References:
*   http://developer.sportsdatallc.com/io-docs
*
**/

var sportsdata = require('../index').NHL;
var APIKEY = process.env.SPORTSDATA_NHL;
var APIVERSION = 3;       // NHL API is currently v3 as of 2015-01-19
var SEASONID = 2014;      // Season is the year the season started
var SEASONPART = 'REG';   // One of: REG (regular season), PST (post-season)

console.log('Using key:', APIKEY);

sportsdata.init('t', APIVERSION, APIKEY, SEASONID, SEASONPART);

sportsdata.getSeasonSchedule(function(error, schedule) {
  if (error) {
    return console.log('Error:', error);
  }
  console.log(schedule);
});
