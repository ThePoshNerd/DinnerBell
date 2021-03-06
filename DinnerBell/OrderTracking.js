/*
 * JS for OrderTracking generated by Appery.io
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

OrderTracking_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'spacer_8': 'OrderTracking_spacer_8',
        'foodStatus': 'OrderTracking_foodStatus',
        'orderLabel': 'OrderTracking_orderLabel',
        'mobilebutton2': 'OrderTracking_mobilebutton2',
        'toInput': 'OrderTracking_toInput',
        'fromInput': 'OrderTracking_fromInput',
        'subjectInput': 'OrderTracking_subjectInput',
        'textInput': 'OrderTracking_textInput'
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

    Apperyio.CurrentScreen = 'OrderTracking';

    /*
     * Nonvisual components
     */
    var datasources = [];

    sendgrid_mailsend = new Apperyio.DataSource(SendGrid_MailSend, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {
            var response = JSON.parse(jqXHR.responseText);

            if (response.message == 'success') {
                alert('Email sent.');
            } else if (response.message == 'error') {
                var error = response.errors[0];
                alert('Error sending email.\n' + error + '.');
            };

            Apperyio.refreshScreenFormElements("OrderTracking");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['to'],
            'TYPE': 'STRING',
            'ID': 'toInput',
            'ATTR': 'value'
        }, {
            'PATH': ['subject'],
            'TYPE': 'STRING',
            'ID': 'subjectInput',
            'ATTR': 'value'
        }, {
            'PATH': ['text'],
            'TYPE': 'STRING',
            'ID': 'textInput',
            'ATTR': 'value'
        }, {
            'PATH': ['from'],
            'TYPE': 'STRING',
            'ID': 'fromInput',
            'ATTR': 'value'
        }, {
            'PATH': ['api_user'],
            'TYPE': 'STRING',
            'ATTR': '{api_user}'
        }, {
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://sendgrid.com/api/mail.send.json'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1411261688255'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2855432'
        }]
    });

    datasources.push(sendgrid_mailsend);

    /*
     * Events and handlers
     */

    // Before Show
    OrderTracking_beforeshow = function() {
        Apperyio.CurrentScreen = "OrderTracking";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_B86C_onLoad = OrderTracking_onLoad = function() {
        screen_B86C_elementsExtraJS();
        try {
            sendgrid_mailsend.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };

        // TODO fire device events only if necessary (with JS logic)
        OrderTracking_deviceEvents();
        OrderTracking_windowEvents();
        screen_B86C_elementsEvents();
    }

    // screen window events
    screen_B86C_windowEvents = OrderTracking_windowEvents = function() {

        $('#OrderTracking').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    OrderTracking_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_B86C_elementsExtraJS = OrderTracking_elementsExtraJS = function() {
        // screen (OrderTracking) extra code

    }

    // screen elements handler
    screen_B86C_elementsEvents = OrderTracking_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#OrderTracking_mobilecontainer1 [name="mobilebutton2"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'MenuPage.html';
                    }, 0);

                }
            },
        });

    }

    $("#OrderTracking").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        OrderTracking_beforeshow();
    });

    if (runBeforeShow) {
        OrderTracking_beforeshow();
    } else {
        OrderTracking_onLoad();
    }

}

$("#OrderTracking").die("pageinit").live("pageinit", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    OrderTracking_js();
});