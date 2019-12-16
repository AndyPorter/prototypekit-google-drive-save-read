# prototypekit-admin
idea for gov prototype admin page - to set up scenario data for testing with users - loading the session with data

Copy of the gov protoype kit - v 9.4.0

download, unzip, npm install, npm start - localhost:3000 

## where would this be useful and how might i use it

### You have users you want to test with, that are returning to the service.

Imagine there is a service for registering details about a new vehicle, and the user is returning part way through the journey - and we want to test their journey from this partially completed point.

### You have different scenarios/situations you want to set up for testing

example: it could be data users never see, or can edit, like which branch of the proto to go down dependent on their role (that would have been part of sign-in), or setting read only data in a page, e.g. a property register view could have one template register, but show different names and addresses, or only certain parts of the property regitser - rather than have to have lots of copies of the same file.

To create your own scenario data you could, write the json by hand and add it to the routes file, or you could use the service to generate the json needed. i.e use the service, then view the stored data, and copy and paste it into the routes file.

e.g. the user researcher could use the proto to create the test scenario data, and slack you the json file to be added to the proto.  The designer and UR could sit togther and set up the scenario - generating the data.
Or you could repeat what a user did in testing and save that data.


## How does the code work? how do i add to this, or add this to my own proto?

all the pages needed are in the route of the app/views folder - you need the admin page, the stored-data page, and to look in the routes.js file.

The admin page has a link for each vehicle registration scenario - which clicking, sets up the 'saved' data and puts the user on the vehicle registration page - which is partway though the full journey.
If you look at the scenario links in the admin page you'll see that they all go to different pages - but actually they don't...
For each scenario there is a route in the routes.js file, and on that url, that sets up the data and then redirects the user to the same vehicle registration page - which using this stock kit example, has the code to read the variables.

to make a new scenario/route - you could write the json by hand, or easier - use the service, view the saved json, and copy paste into the routes file.

