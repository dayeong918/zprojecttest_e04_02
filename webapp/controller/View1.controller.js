sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("C05.project1.controller.View1", {
            onInit: function () {
            },
            onEnter: function () {
                var sValue = this.byId("idInput").getValue();
                this.byId("idText").setText(sValue);
            },
            onButtonPress: function() {
                var oSelect = this.byId("idSelect").getSelectedItem(),
                    iNum1 = Number(this.byId("idInput1").getValue()),
                    iNum2 = Number(this.byId("idInput2").getValue()),
                    result = 0;

                let sMsg = '';

                /* 계산기 로직 작성 => switch - case 
                    oSelect.getKey() => * - / + 의 키 값을 가져왔으니까
                    해당 키 값으로 분기처리하여 결과 값을 얻는다.
                */
               debugger;
                switch(oSelect.getKey()){
                    case 'plus': 
                        result = iNum1 + iNum2;
                        break;
                    case 'minus':
                        result = iNum1 - iNum2; 
                        break;
                    case 'multiple': 
                        result = iNum1 * iNum2;
                        break;
                    case 'divide':
                        result = iNum1 / iNum2; 
                        break;
                }

                // MessageToast.show(result);
                
                    // oSelect.getKey();
                    // MessageToast.show('result'); 
                    // MessageToast.show(oSelect.getKey());
                    // MessageToast.show(result);
                sMsg = `${iNum1} ${oSelect.getText()} ${iNum2} = ${result} `;
                // MessageToast.show(sMsg);
                MessageBox.show(
                    sMsg, {
                        icon: MessageBox.Icon.INFORMATION,
                        title: "My message box title",
                        actions: [MessageBox.Action.YES],
                        emphasizedAction: MessageBox.Action.YES,
                        onClose: function (oAction) { / * do something * / }
                    }
                );
            }

        });
    });
