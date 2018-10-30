# LightningAlert

Component to display alert popup 

## Usage

&lt;!-- add the component to your component body --&gt;

```
<c:CmpAlert aura:id="alert" />
```

* to display an alert, do this: 

```javascript
component.find("alert").displayAlert('CompleteAlert', _// name_
                                     'warning', _// values: success,error,warning,info_
                                      'Alert', _// title_
                                     '', _// additional title line_
                                     'Are you sure you would like to delete ?', _// message in alert box_
                                     ['Yes', 'No'] ); _// list of labels for buttons to display_
```

* to close the alert from the parent component, do this:

```javascript
component.find("alert").close();
```

## Install using the button below:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo=LightningAlert">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
