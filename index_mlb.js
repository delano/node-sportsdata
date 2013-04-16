// Copyright 2010-2012 Ryan Gerard
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_mlb');

function init(access_level, version, apikey, year) {
    config.mlb.access_level = access_level;
    config.mlb.version = version;
    config.mlb.apikey = apikey;
    config.mlb.year = year;
}

function getSeasonSchedule(callback) {
    var url = urlHelper.getSeasonScheduleUrl();
    createRequest(url, callback);
}

function get3DaySchedule(callback) {
    var url = urlHelper.get3DayScheduleUrl();
    createRequest(url, callback);
}

function getStandings(callback) {
    var url = urlHelper.getStandingsUrl();
    createRequest(url, callback);
}

function getRosters(callback) {
    var url = urlHelper.getRostersUrl();
    createRequest(url, callback);
}

function getGameScoreAndStats(gameid, callback) {
    var url = urlHelper.getGameScoreAndStatsUrl(gameid);
    createRequest(url, callback);
}

function getPlayByPlay(gameid, callback) {
    var url = urlHelper.getPlayByPlayUrl(gameid);
    createRequest(url, callback);
}

function getEventsGloassary(callback) {
    var url = urlHelper.getEventsGloassaryUrl();
    createRequest(url, callback);
}

function getSeasonalStats(teamid, callback) {
    var url = urlHelper.getSeasonalStatsUrl(teamid);
    createRequest(url, callback);
}

function getStatus(callback) {
    var url = urlHelper.getStatusUrl();
    createRequest(url, callback);
}


function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (response.statusCode == 200) {

            // Parse the XML to JSON
            parser.parseString(body, function (err, result) {
                callback(err, result);
            });
        } else {
            callback(error, body);
        }
    });
}

module.exports = {

    init: function(access_level, version, apikey, seasonID, season) {
        return init(access_level, version, apikey, seasonID, season);
    },

    setRequest: function(reqObj) {
        request = reqObj;
    },

    getSeasonSchedule: function(callback) {
        return getSeasonSchedule(callback);
    },

    get3DaySchedule: function(callback) {
        return get3DaySchedule(callback);
    },

    getStandings: function(callback) {
        return getStandings(callback);
    },

    getRosters: function(callback) {
        return getRosters(callback);
    },

    getGameScoreAndStats: function(gameid, callback) {
        return getGameScoreAndStats(gameid, callback);
    },

    getPlayByPlay: function(gameid, callback) {
        return getPlayByPlay(gameid, callback);
    },

    getEventsGloassary: function(callback) {
        return getEventsGloassary(callback);
    },

    getSeasonalStats: function(teamid, callback) {
        return getSeasonalStats(teamid, callback);
    },

    getStatus: function(callback) {
        return getStatus(callback);
    }
};