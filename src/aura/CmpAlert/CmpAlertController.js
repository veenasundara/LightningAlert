({
    handleClick : function(component, event, helper) {
        var btnClicked = event.getSource().get("v.name");
        helper.hlpClose(component, btnClicked);
    },

    showAlert : function(component, event, helper) {
        var evtAlertName = event.getParam("name");
        var myALertName = component.get("v.name");
        if(myALertName == evtAlertName)
        {
            var eventParams = event.getParams();
            if(!$A.util.isEmpty(eventParams))
            {
                if(!$A.util.isEmpty(eventParams.title)) component.set("v.title", eventParams.title);
                if(!$A.util.isEmpty(eventParams.message)) component.set("v.message", eventParams.message);
                if(!$A.util.isEmpty(eventParams.additionalTitle)) component.set("v.additionalTitle", eventParams.additionalTitle);
                if(!$A.util.isEmpty(eventParams.theme)) component.set("v.theme", eventParams.theme);
                if(!$A.util.isEmpty(eventParams.lstButtonLabels)) component.set("v.lstButtonLabels", eventParams.lstButtonLabels);
            }
            helper.hlpOpen(component);
        }
    },

    displayAlert : function(component, event, helper) {

        var eventParams = event.getParam('arguments');
        if (eventParams)
        {
            if(!$A.util.isEmpty(eventParams.name)) component.set("v.name", eventParams.name);
            if(!$A.util.isEmpty(eventParams.theme)) component.set("v.theme", eventParams.theme);
            if(!$A.util.isEmpty(eventParams.title)) component.set("v.title", eventParams.title);
            if(!$A.util.isEmpty(eventParams.additionalTitle)) component.set("v.additionalTitle", eventParams.additionalTitle);
            if(!$A.util.isEmpty(eventParams.message)) component.set("v.message", eventParams.message);
            if(!$A.util.isEmpty(eventParams.lstButtonLabels)) component.set("v.lstButtonLabels", eventParams.lstButtonLabels);
        }

        helper.hlpOpen(component);
    },

    close : function(component, event, helper) {
        helper.hlpClose(component, '');
    },
})