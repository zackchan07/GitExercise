/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"day6exercise3_chan/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
