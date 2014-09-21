/*
 * JS for MenuPage generated by Appery.io
 *
 */

Apperyio.getProjectGUID = function() {
    return 'fefedff7-2195-4035-b707-62edda0f92ae';
}

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "MenuPage",
    "location": "MenuPage.html"
}, {
    "name": "OrderTracking",
    "location": "OrderTracking.html"
}, {
    "name": "foodDetailPage",
    "location": "foodDetailPage.html"
}];

MenuPage_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_1': 'MenuPage_mobilelist_1',
        'MenuList': 'MenuPage_MenuList',
        'MenuListButton': 'MenuPage_MenuListButton',
        'itemIDLabel': 'MenuPage_itemIDLabel',
        'mobilegrid_16': 'MenuPage_mobilegrid_16',
        'mobilegridcell_17': 'MenuPage_mobilegridcell_17',
        'titleLabel': 'MenuPage_titleLabel',
        'mobilegridcell_21': 'MenuPage_mobilegridcell_21',
        'priceLabel': 'MenuPage_priceLabel',
        'mobilegridcell_38': 'MenuPage_mobilegridcell_38',
        'mobilebutton_37': 'MenuPage_mobilebutton_37'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Apperyio.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Apperyio.CurrentScreen = 'MenuPage';

    /*
     * Nonvisual components
     */
    var datasources = [];

    restservice2 = new Apperyio.DataSource(DinnerBellDatabase_House_Specials_list_service, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("MenuPage");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'MenuList',
            'SET': [{
                'PATH': ['FoodName'],
                'ID': 'titleLabel',
                'ATTR': '@'
            }, {
                'PATH': ['FoodPrice'],
                'ID': 'priceLabel',
                'ATTR': '@'
            }, {
                'PATH': ['_id'],
                'ID': 'itemIDLabel',
                'ATTR': '@'
            }, {
                'PATH': ['_id'],
                'ID': '___local_storage___',
                'ATTR': 'listID'
            }]
        }],
        'requestMapping': [{
            'PATH': ['X-Appery-Database-Id'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': '{database_id}'
        }]
    });

    datasources.push(restservice2);

    /*
     * Events and handlers
     */

    // Before Show
    MenuPage_beforeshow = function() {
        Apperyio.CurrentScreen = "MenuPage";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_2331_onLoad = MenuPage_onLoad = function() {
        screen_2331_elementsExtraJS();
        try {
            restservice2.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };

        // TODO fire device events only if necessary (with JS logic)
        MenuPage_deviceEvents();
        MenuPage_windowEvents();
        screen_2331_elementsEvents();
    }

    // screen window events
    screen_2331_windowEvents = MenuPage_windowEvents = function() {

        $('#MenuPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    MenuPage_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_2331_elementsExtraJS = MenuPage_elementsExtraJS = function() {
        // screen (MenuPage) extra code

        /* mobilelist_1 */

        listView = $("#MenuPage_mobilelist_1");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#MenuPage_mobilelist_1 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* MenuList */

    }

    // screen elements handler
    screen_2331_elementsEvents = MenuPage_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#MenuPage_mobilecontainer1 [name="MenuList"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setVar_('listID', 'MenuPage_itemIDLabel', 'text', '', this);

                }
            },
        });

        $('#MenuPage_mobilecontainer1 [name="mobilebutton_37"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'foodDetailPage.html';
                    }, 0);

                }
            },
        });

    }

    $("#MenuPage").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        MenuPage_beforeshow();
    });

    if (runBeforeShow) {
        MenuPage_beforeshow();
    } else {
        MenuPage_onLoad();
    }

}

$("#MenuPage").die("pageinit").live("pageinit", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    MenuPage_js();
});