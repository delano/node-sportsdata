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
    urlHelper = require('./util/url_helper_nhl');

function init(access_level, version, apikey, seasonID, season) {
    config.nhl.access_level = access_level;
    config.nhl.version = version;
    config.nhl.apikey = apikey;
    config.nhl.seasonID = seasonID;
    config.nhl.season = season;
}

function getSeasonSchedule(callback) {
    var url = urlHelper.getSeasonScheduleUrl();
    createRequest(url, callback);
}

function getDailySchedule(year, month, day, callback) {
    var url = urlHelper.getDailyScheduleUrl(year, month, day);
    createRequest(url, callback);
}

function getTransfers(year, month, day, callback) {
    var url = urlHelper.getTransfersUrl(year, month, day);
    createRequest(url, callback);
}

function getBoxScore(gameID, callback) {
    var url = urlHelper.getBoxScoreUrl(gameID);
    createRequest(url, callback);
}

function getGameSummary(gameID, callback) {
    var url = urlHelper.getGameSummaryUrl(gameID);
    createRequest(url, callback);
}

function getStandings(callback) {
    var url = urlHelper.getStandingsUrl();
    createRequest(url, callback);
}

function getInjuries(callback) {
    var url = urlHelper.getInjuriesUrl();
    createRequest(url, callback);
}

function getHierarchy(callback) {
    var url = urlHelper.getHierarchyUrl();
    createRequest(url, callback);
}

function getTeamRoster(teamID, callback) {
    var url = urlHelper.getTeamRosterUrl(teamID);
    createRequest(url, callback);
}

function getSeasonalStats(teamID, callback) {
    var url = urlHelper.getSeasonalStatsUrl(teamID);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            parserWrapper(body, callback);

        } else {
            callback(error, body);
        }
    });
}

var parserWrapperJSON = function(body, callback) {
    callback(null, JSON.parse(body));
};

var parserWrapperXML = function(body, callback) {
    // Parse the XML to JSON
    parser.parseString(body, function (err, result) {
        callback(err, result);
    });
};

var parserWrapper = parserWrapperXML; // Default format is XML for backwards compatability

module.exports = {

    config: config,

    init: function(access_level, version, apikey, seasonID, season) {
        return init(access_level, version, apikey, seasonID, season);
    },

    setRequest: function(reqObj) {
        request = reqObj;
    },

    getSeasonSchedule: function(callback) {
        return getSeasonSchedule(callback);
    },

    getDailySchedule: function(year, month, day, callback) {
        return getDailySchedule(year, month, day, callback);
    },

    getTransfers: function(year, month, day, callback) {
        return getTransfers(year, month, day, callback);
    },

    getBoxScore: function(gameID, callback) {
        return getBoxScore(gameID, callback);
    },

    getGameSummary: function(gameID, callback) {
        return getGameSummary(gameID, callback);
    },

    getStandings: function(callback) {
        return getStandings(callback);
    },

    getInjuries: function(callback) {
        return getInjuries(callback);
    },

    getHierarchy: function(callback) {
        return getHierarchy(callback);
    },

    getTeamRoster: function(teamID, callback) {
        return getTeamRoster(teamID, callback);
    },

    getSeasonalStats: function(teamID, callback) {
        return getSeasonalStats(teamID, callback);
    },

    setFormat: function(val) {
        config.format = val.toLowerCase();
        if (this.isJSON()) {
            parserWrapper = parserWrapperJSON;
        }
    },

    isJSON: function() {
        return 'JSON' === config.format.toUpperCase();
    }
};
