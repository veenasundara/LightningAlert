# LightningAlert

Component to display alert popup 

## Usage

<!-- add the component to your component body -->
<c:CmpAlert aura:id="alert" />

<!-- to display an alert, do this -->
component.find("alert").displayAlert('CompleteAlert', // name
                                     'warning', // theme (success, error, worning or info)
                                      'Alert', // title of the alert
                                     '', // additional line below title
                                     'Are you sure you would like to delete ?', // message to display in alert box
                                     ['Yes', 'No'] ); // list of labels for buttons to display

<!-- to close the alert from the parent component, do this -->
component.find("alert").close();


## Install using the button below:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo=LightningAlert">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
