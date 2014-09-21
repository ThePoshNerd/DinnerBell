/*
 * Service settings
 */
var SendGrid_Settings = {
    "api_user": "ElijahB",
    "api_key": "stuffit1"
}
var DinnerBellDatabase_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "541dd58ce4b0b84750f62e15"
}

/*
 * Services
 */
var CameraService = new Apperyio.CameraService({});

var DinnerBellDatabase_House_Specials_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/House%20Specials/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': DinnerBellDatabase_settings
});

var SendGrid_MailSend = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SendGrid_Settings
});

var DinnerBellDatabase_House_Specials_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/House%20Specials',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': DinnerBellDatabase_settings
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