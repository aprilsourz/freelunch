# Free Lunch

Capstone project for the Web Development Immersive at General Assembly Boston. This is the repository for the client side application. Free lunch is a networking app for software engineers want to get taken out to lunch. And for recruiters who are looking for talent. this is the first and most basic iteration of the application.

As of now the app supports no more than 2 messages per lunch invitation. Users can display the link for their personal website or linked profile in place of having an in app profile.

[Link to wire frames](http://imgur.com/a/zT79X)

[Link to user stories](https://www.dropbox.com/s/5vsgxw92bowak0o/free-lunch-stories.pdf?dl=0)

[Link to deployed app](https://arlofeirman.github.io/free-lunch/#/)

### Screen shot of the application

![](http://i.imgur.com/VE2kY0N.png)

### Technologies
This app will was built with Ember.js and Bootstrap. Used [https://github.com/poteto/ember-cli-flash](https://github.com/poteto/ember-cli-flash) for flash messages. I built a a server side application for this app in Ruby on Rails,
If you wish to fork and clone this repo you will need to install dependencies by running bower install and npm install 

## Planning
I started the process planning by writing user stories. I then drew wire frames and made an ERD. I wrote pseudocode for every feature to ensure I understood what it would it take to build this app. Through this process I was able to more accurately see the complexity of certain features and strip down my plan to a mininum viable product.

## Building
I built the back end application first. I worked on one resource at a time. Refering to my user stories and pseudocode while creating each API endpoint. I tested each feature with curL scripts.

I Implimented the ember app one feature at a time, breaking each feature into as many small steps as possible. Often writing out the steps and logic on paper before I began writing the JavaScript. I implemented suer authentication and authorization for engineer and recruiter account types first, scaffolding the routes for each profile type. The logical first step after that was to write the code to allow a recruiter to send a lunch invitation to an engineer. I then worked on the engineers ability to respond. 

I kept a running list of bugs and features. This helped me to stay on task with the feature I was currently building without forgetting about the loose ends.

## Hurdles

This was the first app I built with ember. I struggled at certain points because of my lack of knowledge about the framework. I went to the documentation multiple times to read about the way ember defines associations between data in the model files.
In one of the routes I was working in I had access to to the data for the signed in user. In the model I defined a has one relationship between the user and a profile(either engineer or recruiter). 

I tried to access to the data like this in the template for a component inside the route ```js{{user.engineer.name}}```






