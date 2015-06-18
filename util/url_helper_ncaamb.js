var config = require('../config');

function createUrlWithEndpoint(endpoint) {
  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[season]/[ncaamb_season]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/games/'
    + config.ncaamb.year
    + '/'
    + config.ncaamb.season
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.ncaamb.apikey;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/games/'
    + year
    + '/'
    + month
    + '/'
    + day
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.ncaamb.apikey;
}

function createSeasonScheduleUrl() {

  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[season]/[ncaab_schedule]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {

  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpointWithDate('schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {

  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/games/'
    + gameID
    + '/boxscore.xml?api_key='
    + config.ncaamb.apikey;
}

function createGameSummaryUrl(gameID) {

  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/games/[game_id]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/games/'
    + gameID
    + '/summary.xml?api_key='
    + config.ncaamb.apikey;
}

function createTournamentListUrl() {
  // URL should look like:  http://api.sportradar.us/ncaamb-[access_level][version]/tournaments/[season]/[ncaamb_season]/schedule.xml?api_key=[your_api_key]
return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/tournaments/'
    + config.ncaamb.year
    + '/'
    + config.ncaamb.season
    + '/schedule.xml?api_key='
    + config.ncaamb.apikey;
}

function createTournamentScheduleUrl(tournament_id) {

  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/tournaments/[tournament]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/tournaments/'
    + tournament_id
    + '/schedule.xml?api_key='
    + config.ncaamb.apikey;
}

function createSeasonalStatsUrl(teamID) {
  // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/seasontd/[season]/[ncaamb_season]/teams/[teamID]/statistics.xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/seasontd/'
    + config.ncaamb.year
    + '/'
    + config.ncaamb.season
    + '/teams/'
    + teamID
    + '/statistics.xml?api_key='
    + config.ncaamb.apikey;
}

function createLeagueHierarchyUrl() {
    // URL should look like: http://api.sportradar.us/ncaamb-[access_level][version]/league/hierarchy.xml?api_key=[your_api_key]
  return 'http://api.sportradar.us/ncaamb-'
    + config.ncaamb.access_level
    + config.ncaamb.version
    + '/league/hierarchy.xml?api_key='
    + config.ncaamb.apikey;
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
    return createTournamentScheduleUrl(tournament_id);
  },

  getSeasonalStatsUrl: function(teamID){
    return createSeasonalStatsUrl(teamID);
  },

  getLeagueHierarchyUrl: function(){
    return createLeagueHierarchyUrl();
  }
}
