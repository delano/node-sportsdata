var config = require('../config');

function createUrlWithEndpoint(endpoint) {
  // URL should look like: http://api.sportsdatallc.org/ncaamb-[access_level][version]/games/[season]/[ncaamb_season]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaamb-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/games/'
    + config.ncaab.seasonID
    + '/'
    + config.ncaab.season
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.ncaab.apikey;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/games/'
    + year
    + '/'
    + month
    + '/'
    + day
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.ncaab.apikey;
}

function createSeasonScheduleUrl() {

  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/games/[season]/[ncaab_schedule]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {

  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpointWithDate('schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/games/'
    + gameID
    + '/boxscore.xml?api_key='
    + config.ncaab.apikey;
}

function createGameSummaryUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/games/[game_id]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/games/'
    + gameID
    + '/summary.xml?api_key='
    + config.ncaab.apikey;
}

function createTournamentListUrl() {
  // URL should look like:  http://api.sportsdatallc.org/ncaab-[access_level][version]/tournaments/[season]/[ncaab_season]/schedule.xml?api_key=[your_api_key]
return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/tournaments/'
    + config.ncaab.seasonID
    + '/'
    + config.ncaab.season
    + '/schedule.xml?api_key='
    + config.ncaab.apikey;
}

function createTournamentScheduleUrl(tournament_id) {

  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/tournaments/[tournament]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/tournaments/'
    + tournament_id
    + '/summary.xml?api_key='
    + config.ncaab.apikey;
}

function createSeasonalStatsUrl(teamID) {
  // URL should look like: http://api.sportsdatallc.org/ncaab-[access_level][version]/seasontd/[season]/[ncaab_season]/teams/[teamID]/statistics.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/ncaab-'
    + config.ncaab.access_level
    + config.ncaab.version
    + '/seasontd/'
    + config.ncaab.seasonID
    + '/'
    + config.ncaab.season
    + '/teams/'
    + teamID
    + '/statistics.xml?api_key='
    + config.ncaab.apikey;
}

module.exports = {

  getSeasonScheduleUrl: function () {
    return createSeasonScheduleUrl();
  },

  getDailyScheduleUrl: function (year, month, day) {
    return createDailyScheduleUrl(year, month, day);
  },

  getBoxScoreUrl: function (gameID) {
    return createBoxScoreUrl(gameID);
  },

  getGameSummaryUrl: function (gameID) {
    return createGameSummaryUrl(gameID);
  },

  getTournamentListUrl: function () {
    return createTournamentListUrl();
  },

  getTournamentScheduleUrl: function (tournament_id) {
    return createTournamentListUrl(tournament_id);
  },

  getSeasonalStatsUrl: function(teamID){
    return createSeasonalStatsUrl(teamID);
  }
}
