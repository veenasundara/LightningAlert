# LightningAlert

Component to display alert popup 

## Usage

&lt;!-- add the component to your component body --&gt;

```
<c:CmpAlert aura:id="alert" />
```

* to display an alert, do this: 

```javascript
component.find("alert").displayAlert('CompleteAlert', // name
                                     'warning', // theme: success,error,warning,info
                                      'Alert', // title
                                     '', // additional title line
                                     'Are you sure you would like to delete ?', // message in alert box
                                     ['Yes', 'No'] ); // list of labels for buttons to be displayed
```

..._The theme controls the color of the alert header._..

..._To just display a success or error alert, do not pass any values for the last 2 parameters (message and list of button labels)._ 

* to close the alert from the parent component, do this:

```javascript
component.find("alert").close();
```

## Install using the button below:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo=LightningAlert">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
