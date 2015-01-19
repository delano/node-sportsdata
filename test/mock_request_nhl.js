
var fs = require('fs'),
    nhlUrlHelper = require('../util/url_helper_nhl');

function request(uri, callback) {

    var response = {};
    response.statusCode = 200;

    if(uri === nhlUrlHelper.getSeasonScheduleUrl()) {
        fs.readFile('./test/example_responses/nhl_season_schedule.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    } else if(uri === nhlUrlHelper.getGameStatsUrl(1, 'DAL', 'NYG')) {
        fs.readFile('./test/example_responses/nhl_game_stats.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    } else if(uri === nhlUrlHelper.getWeeklyBoxscoreUrl(1)) {
        fs.readFile('./test/example_responses/nhl_weekly_boxscore.xml', 'utf8', function (err, data) {
            callback(null, response, data);
        });
    }
}

module.exports = request;

