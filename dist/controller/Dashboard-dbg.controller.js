sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("project.ZMMDashboard.controller.Dashboard", {
		onInit: function () {

		},

		_onChangeLOB: function () {
			var drpLOB = this.getView().byId("drpLOB");
			var panel1 = this.getView().byId("panel1");
			var panel2 = this.getView().byId("panel2");
			var panel3 = this.getView().byId("panel3");
			var panel4 = this.getView().byId("panel4");
			var panel5 = this.getView().byId("panel5");

			if (drpLOB.getSelectedKey() === "SD") {
				panel1.setVisible(true);
				panel2.setVisible(false);
				panel3.setVisible(false);
				panel4.setVisible(false);
				panel5.setVisible(false);
			} else if (drpLOB.getSelectedKey() === "MM") {
				panel1.setVisible(false);
				panel2.setVisible(true);
				panel3.setVisible(false);
				panel4.setVisible(false);
				panel5.setVisible(false);
			} else if (drpLOB.getSelectedKey() === "FI") {
				panel1.setVisible(false);
				panel2.setVisible(false);
				panel3.setVisible(true);
				panel4.setVisible(false);
				panel5.setVisible(false);
			} else if (drpLOB.getSelectedKey() === "HCM") {
				panel1.setVisible(false);
				panel2.setVisible(false);
				panel3.setVisible(false);
				panel4.setVisible(true);
				panel5.setVisible(false);
			} else if (drpLOB.getSelectedKey() === "PP") {
				panel1.setVisible(false);
				panel2.setVisible(false);
				panel3.setVisible(false);
				panel4.setVisible(false);
				panel5.setVisible(true);
			}

		}
	});
});