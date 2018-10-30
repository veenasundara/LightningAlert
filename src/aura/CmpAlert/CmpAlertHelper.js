({
    hlpOpen: function (component)
    {
        console.log('in hlpOpen');
        var mainDiv = component.find("mainDiv");
        $A.util.addClass(mainDiv, 'slds-fade-in-open');

        var backdrop = component.find("backdrop");
        $A.util.addClass(backdrop, 'slds-backdrop--open');
    },
    hlpClose: function (component, btnClicked)
    {
        //console.log('hlpClose, btnClicked = ' + btnClicked);
        var evt = component.getEvent("EvtCmpAlertClosed");
        evt.setParams({"name": component.get("v.name"),
                      "btnClicked": btnClicked });
        evt.fire();

        var mainDiv = component.find("mainDiv");
        $A.util.removeClass(mainDiv, 'slds-fade-in-open');

        var backdrop = component.find("backdrop");
        $A.util.removeClass(backdrop, 'slds-backdrop--open');
    },

})