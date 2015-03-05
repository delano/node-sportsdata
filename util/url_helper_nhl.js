var config = require('../config');

function createUrlWithEndpoint(endpoint) {
    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[season]/[nhl_season]/[endpoint].xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + config.nhl.seasonID
        + '/'
        + config.nhl.season
        + '/'
        + endpoint
        + '.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createUrlWithEndpointWithDate(area, endpoint, year, month, day) {
    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/'
        + area
        + '/'
        + year
        + '/'
        + month
        + '/'
        + day
        + '/'
        + endpoint
        + '.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createSeasonScheduleUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[season]/[nhl_season]/schedule.xml?api_key=[your_api_key]
    return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
    return createUrlWithEndpointWithDate('games', 'schedule', year, month, day);
}

function createTransfersUrl(year, month, day) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
    var t= createUrlWithEndpointWithDate('league', 'transfers', year, month, day);
    console.log(t);
    return t
}

function createBoxScoreUrl(gameID) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + gameID
        + '/boxscore.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createGameSummaryUrl(gameID) {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/games/[game_id]/summary.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/games/'
        + gameID
        + '/summary.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createStandingsUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-[access_level][version]/seasontd/[season]/[nhl_season]/standings.xml?api_key=[your_api_key]
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/seasontd/'
        + config.nhl.seasonID
        + '/'
        + config.nhl.season
        + '/standings.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createInjuriesUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-t3/league/injuries.json?api_key=
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/league/'
        + '/injuries.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createHeirarchyUrl() {

    // URL should look like: http://api.sportsdatallc.org/nhl-t3/league/hierarchy.json?api_key=
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/league/'
        + '/hierarchy.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

function createTeamRosterUrl(teamID) {

    // URL should look like: http://api.sportsdatallc.org/nhl-t3/teams/:teamID/profile.json?api_key=
    return 'http://api.sportsdatallc.org/nhl-'
        + config.nhl.access_level
        + config.nhl.version
        + '/teams/'
        + teamID
        + '/profile.'
        + config.format
        + '?api_key='
        + config.nhl.apikey;
}

module.exports = {

    getSeasonScheduleUrl: function () {
        return createSeasonScheduleUrl();
    },

    getDailyScheduleUrl: function (year, month, day) {
        return createDailyScheduleUrl(year, month, day);
    },

    getTransfersUrl: function (year, month, day) {
        return createTransfersUrl(year, month, day);
    },

    getBoxScoreUrl: function (gameID) {
        return createBoxScoreUrl(gameID);
    },

    getGameSummaryUrl: function (gameID) {
        return createGameSummaryUrl(gameID);
    },

    getStandingsUrl: function () {
        return createStandingsUrl();
    },

    getInjuriesUrl: function () {
        return createInjuriesUrl();
    },

    getHeirarchyUrl: function () {
        return createHeirarchyUrl();
    },

    getTeamRosterUrl: function (teamID) {
        return createTeamRosterUrl(teamID);
    }
}
