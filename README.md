# LightningAlert

Component to display alert popup 

## Usage

1. add the following code to your lightning component:
&lt;!-- add the component to your component body --&gt;
```
<c:CmpAlert aura:id="alert" />
```
&lt;!-- handle the close event of the alert --&gt;
```
<aura:handler name="EvtCmpAlertClosed" event="c:EvtCmpAlertClosed" action="{!c.alertClosed}"/>
```

2. add the following code to your lightning javascript:

* to display an alert, do this: 

```javascript
component.find("alert").displayAlert('CompleteAlert', // name
                                     'warning', // theme: success,error,warning,info
                                      'Alert', // title
                                     '', // additional title line
                                     'Are you sure you would like to delete ?', // message in alert box
                                     ['Yes', 'No'] ); // list of labels for buttons to be displayed

   // The theme controls the color of the alert header.

```

* to close the alert from the parent component, do this:

```javascript
component.find("alert").close();
```

* to handle the close event of the alert and decide the next action
```javascript

   alertClosed : function(component, event, helper) {

        var eventParams = event.getParams();

        if(eventParams.btnClicked == 'Yes')
        {
            helper.hlpDoSomething(component);
        }
    },

```

## Install using the button below:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo=LightningAlert">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
