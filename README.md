# autoAdventure
This app is personal practice to learn Angular.js
As a final goal, the app will be an auto-adventuring game.

## Status
Currently fiddling around with services and components to work with buttons. The end goal is that various jobs will only appear when certain conditions are correct. For example, you have to be a level 5+ adventurer before you can take levels in fighter.

I have a model that works as desired, but its really ugly.
It uses three services: 
* A main JobService which the components refer to
* An individual service for each job that manages event flags for each job
* An activeJobs service which holds a list of active jobs.

When the user clicks on a button, its level goes up by 1, then JobService defers to the service module for the class which will inform activeJobs to add to its list if conditions are met.