/**
* SPORTSDATA API - NHL TRANSFERS Example (2015-03-05)
*
* Usage:
*        $ export SPORTSDATA_NHL=[APIKEY]
*        $ node example/nhl-transfers.js
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

var YEAR = 2014;
var MONTH = 03;
var DAY = 05;

sportsdata.setFormat('json');

console.log('Using key:', APIKEY);
console.log('Format:', sportsdata.config.format);

sportsdata.init('t', APIVERSION, APIKEY, SEASONID, SEASONPART);

sportsdata.getTransfers(YEAR, MONTH, DAY, function(error, transfers) {
  if (error) {
    return console.log('Error:', error);
  }
  console.log(transfers);
});
