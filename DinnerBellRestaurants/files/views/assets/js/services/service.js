/*
 * Service settings
 */
var Twilio_Settings = {
    "AccountSid": "ACf09bd9bb3cc6b227063461ee914964e9",
    "AuthToken": "96b705da55d554c8ceb06c5848bc6707"
}
var testDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "541db2aee4b0b84750f62dea"
}

/*
 * Services
 */

var testDB_TestCollection_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': testDB_settings
});

var testDB_TestCollection_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': testDB_settings
});

var testDB_TestCollection_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': testDB_settings
});

var testDB_TestCollection_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': testDB_settings
});

var Twilio_SMSService = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': Twilio_Settings
});

var testDB_TestCollection_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': testDB_settings
});

var testDB_TestCollection_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/TestCollection',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': testDB_settings
});

/*
 * Data models
 */
Apperyio.models = {
    "AAB7DD8B-612F-6E85-DA32-0D74E1330AA0": {
        "name": "String",
        "type": "string",
        "parentGuid": null,
        "reference": null
    },
    "ABB7DD8B-612F-6E85-DA32-0D74E1330AA1": {
        "name": "Number",
        "type": "number",
        "parentGuid": null,
        "reference": null
    },
    "ACB7DD8B-612F-6E85-DA32-0D74E1330AA2": {
        "name": "Boolean",
        "type": "boolean",
        "parentGuid": null,
        "reference": null
    }

};

/*
 * Data storages
 */
Apperyio.storages = {};