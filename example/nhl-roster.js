/**
* SPORTSDATA API - NHL TEAM ROSTER Example (2015-03-05)
*
* Usage:
*        $ export SPORTSDATA_NHL=[APIKEY]
*        $ node example/nhl-roster.js
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

var TEAMID = '4416272f-0f24-11e2-8525-18a905767e44'; // Default is Chicago

sportsdata.setFormat('json');

console.log('Using key:', APIKEY);
console.log('Format:', sportsdata.config.format);

sportsdata.init('t', APIVERSION, APIKEY, SEASONID, SEASONPART);

sportsdata.getTeamRoster(TEAMID, function(error, roster) {
  if (error) {
    return console.log('Error:', error);
  }
  console.log(roster);
});
