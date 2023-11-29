QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
    "use strict";

    sap.ui.require([
        "com/vaibhavmojidra/integrationtestwithopademo/test/integration/NavigationJourney"
    ], () => {
        QUnit.start();
    });
});