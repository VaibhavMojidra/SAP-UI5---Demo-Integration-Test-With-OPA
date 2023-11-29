sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("com.vaibhavmojidra.integrationtestwithopademo.controller.App", {
		onIconDialogButtonClick: function () {
			this.pIconDialog ??= this.loadFragment({ name: "com.vaibhavmojidra.integrationtestwithopademo.view.IconDialog" })

			this.pIconDialog.then((oDialog) => oDialog.open());
		},
		closeIconDialog: function () {
			this.byId('iconDialog').close()
		}
	});
}
);