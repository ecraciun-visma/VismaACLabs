﻿$(function() {
    $.connection.hub.logging = true;

    $.connection.hub.error(function (err) {
        console.log("An error occured: " + err);
    });

    var fileEvents = $.connection.fileOperationsHub;

    fileEvents.client.pongHello = function(data) {
        console.log("Got back: " + data);
    };

    $.connection.hub.start()
        .done(function() {
            fileEvents.server.pingHello("yo yo yo, I'm connected!");
            //fileEvents.server.connectToCompanyGroup("bla", "123");
        });
});