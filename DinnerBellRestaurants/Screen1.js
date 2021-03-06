/*
 * JS for Screen1 generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'b91e4327-0ee8-4ab0-b922-c92eb8bb9fcc';
};

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
    "name": "Twilio_SMS",
    "location": "Twilio_SMS.html"
}, {
    "name": "Screen1",
    "location": "Screen1.html"
}];

Screen1_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_2': 'Screen1_mobilelist_2',
        'mobilelistitem_3': 'Screen1_mobilelistitem_3',
        'mobilelistitembutton_4': 'Screen1_mobilelistitembutton_4',
        'mobilelistitem_5': 'Screen1_mobilelistitem_5',
        'mobilelistitembutton_6': 'Screen1_mobilelistitembutton_6',
        'mobilelistitem_7': 'Screen1_mobilelistitem_7',
        'mobilelistitembutton_8': 'Screen1_mobilelistitembutton_8'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'Screen1';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var Screen1_beforeshow = function() {
            Apperyio.CurrentScreen = "Screen1";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var Screen1_onLoad = function() {
            Screen1_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            Screen1_deviceEvents();
            Screen1_windowEvents();
            Screen1_elementsEvents();
        };

    // screen window events
    var Screen1_windowEvents = function() {

            $('#Screen1').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var Screen1_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var Screen1_elementsExtraJS = function() {
            // screen (Screen1) extra code

            /* mobilelist_2 */

            listView = $("#Screen1_mobilelist_2");
            theme = listView.attr("data-theme");
            if (typeof theme !== 'undefined') {
                var themeClass = "ui-btn-up-" + theme;
                listItem = $("#Screen1_mobilelist_2 .ui-li-static");
                $.each(listItem, function(index, value) {
                    $(this).addClass(themeClass);
                });
            }

            /* mobilelistitem_3 */

            /* mobilelistitem_5 */

            /* mobilelistitem_7 */

        };

    // screen elements handler
    var Screen1_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#Screen1_mobilecontainer [name="mobilelistitem_3"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('Twilio_SMS', {
                            reverse: false
                        });

                    }
                },
            }, '#Screen1_mobilecontainer [name="mobilelistitem_3"]');

        };

    $(document).off("pagebeforeshow", "#Screen1").on("pagebeforeshow", "#Screen1", function(event, ui) {
        Screen1_beforeshow();
    });

    if (runBeforeShow) {
        Screen1_beforeshow();
    } else {
        Screen1_onLoad();
    }
};

$(document).off("pagecreate", "#Screen1").on("pagecreate", "#Screen1", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Screen1_js();
});