sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, MessageToast) {
        "use strict";

        return Controller.extend("day5exercise2chan.controller.Main", {
            onInit: function () {

            },

            
		//Triggered whenever an Input has been changed
		//
		//oEvent - Event instance
		onChange: function (oEvent) {
			var oInput = oEvent.getSource();
			if (oInput.getValue().length === 0) {
				oInput.setValue(0);
			}
		},
		
		//Called whenever Change Operation button is pressed. Opens the Dialog.
		onOperationPress: function() {
			var sFragmentLocation =
                			"<namespace>.fragment.Dialog";
                           		if (!this._fragmentObject) {
                                			Fragment.load({
                                    				name: sFragmentLocation,
                    				controller: this
                				}).then(function (oValueHelpDialog) {
                    				this._fragmentObject = oValueHelpDialog;
		                    		this.getView().addDependent(this._fragmentObject);
                    
                    				// open value help dialog
	                    			this._fragmentObject.open();
                				}.bind(this));
            			} else {
	                			// open value help dialog
		                		this._fragmentObject.open();
            			}

		},
		
		//Called whenever an Item is pressed in the list
		//
		//oEvent - Event instance
		onItemPress: function(oEvent) {
			var sText = oEvent.getParameter("listItem").getTitle();
			this.getView().byId("idOperation").setValue(sText);
			
			this._fragmentObject.close();
		},
		
		//Called whenever the Calculate button is pressed.
		onCalculatePress: function() {
			var oView = this.getView(),
				oResourceBundle = oView.getModel("i18n").getResourceBundle(),
				nInput1 = Number(oView.byId("idInput1").getValue()),
				nInput2 = Number(oView.byId("idInput2").getValue()),
				sOperation = oView.byId("idOperation").getValue(),
				nAnswer,
				sMessage;
			
			//Calculates based on what is in the Operation input	
			if (sOperation === oResourceBundle.getText("addition")) {
				nAnswer = nInput1 + nInput2;
			} else {
				nAnswer = nInput1 - nInput2;
			}
			
			//Puts answer in Message Toast
			sMessage = oResourceBundle.getText("answerText", [nAnswer]);
			MessageToast.show(sMessage);
		}


        });
    });
