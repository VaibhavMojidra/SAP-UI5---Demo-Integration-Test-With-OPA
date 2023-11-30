# SAP UI5 Demo Integration Test With OPA

OPA (One Page Acceptance) is a testing framework provided by SAPUI5 for integration testing. OPA tests simulate user interactions with the application and check if the application behaves as expected.

#### Note 
This demo created using VS Code.

### Folder Structure

```
📂 webapp
  📂 controller
  📂 i18n
  📂 test
    📂 integration
      📂 pages
        📄 App.js
      📄 NavigationJourney.js
      📄 opaTests.qunit.html
      📄 opaTests.qunit.js
  📂 view
  📄 index.html
  📄 Component.js
  📄 manifest.json
  📄 package.json
```

### Code Explaination

Refer to [/webapp/test/integration/NavigationJourney.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Integration-Test-With-OPA/blob/master/webapp/test/integration/NavigationJourney.js "NavigationJourney.js")

The opaTest function is defined with three parameters: Given, When, and Then. The Given parameter is used to define the initial state of the application, the When parameter is used to define the user action, and the Then parameter is used to define the expected outcome.

In this code snippet, the opaTest function is used to test the navigation of the application. The test checks whether the “Hello” dialog box is opened when the “Say Hello with Dialog” button is pressed. The Given parameter sets up the initial state of the application by starting the UI component with the name com.vaibhavmojidra.integrationtestwithopademo. The When parameter simulates the user action of pressing the “Say Hello with Dialog” button. The Then parameter checks whether the “Hello” dialog box is displayed. Finally, the iTeardownMyApp function is called to clean up the application after the test is complete.

Refer to [/webapp/test/integration/pages/App.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Integration-Test-With-OPA/blob/master/webapp/test/integration/pages/App.js "App.js")

The module has two dependencies: sap/ui/test/Opa5 and sap/ui/test/actions/Press. The Opa5.createPageObjects method is used to create a page object for the onTheAppPage object. The iPressTheSayHelloWithDialogButton function is defined to simulate the user action of pressing the “Say Hello with Dialog” button. The iShouldSeeTheHelloDialog function is defined to check whether the “Hello” dialog box is displayed.

In this code snippet, the waitFor function is used to wait for the “Say Hello with Dialog” button to appear on the screen. Once the button appears, the Press action is used to simulate the user pressing the button. The waitFor function is then used again to wait for the “Hello” dialog box to appear on the screen. If the dialog box appears, the test passes. If the dialog box does not appear, the test fails.

Refer to [/webapp/test/integration/opaTests.qunit.html](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Integration-Test-With-OPA/blob/master/webapp/test/integration/opaTests.qunit.html "opaTests.qunit.html")

This file contains our test suite for all OPA tests of the app. We use the same namespace as for our application.

Then we load the basic QUnit functionality via script tags from SAPUI5 so that we can execute the test journey. The NavigationJourney we defined above will be loaded via a script called opaTests.qunit.js below:

Refer to [/webapp/test/integration/opaTests.qunit.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Integration-Test-With-OPA/blob/master/webapp/test/integration/opaTests.qunit.js "opaTests.qunit.js")

---

[![Vaibhav Mojidra - 1.gif](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Integration-Test-With-OPA/master/screenshot/1.gif "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)
