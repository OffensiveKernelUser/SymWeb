# SymWeb-Concept---5.0.1
Symplex Web Operating System Concept featuring the very first symplex account system. 

# Setup
## Install the dependencies
Install NodeJS on your computer, then enter the command at the root of the project
```
$ npm install
```
Make sure you have firebase and firebase CLI installed. 

## Setup Webpack or Rollup
The files are already configured for webpack to bundle to the `public` directory. If you're using rollup, make sure to setup it. 
To bundle your code, use the command : 
```
$ npm run build
```

## Setup firebase
In firebase, make your own project and name it whatever you want. 
Then create a web app in your project and configure it for `hosting` too
Make sure to add an email & password authentification method and a real time database to your app.

Back to the code, login to your firebase account using the command : 
```
$ firebase login
```
Then go to `auth.js` and fill the `firebaseConfig` constant by your own project variables.

Finally enter in the terminal : 
```
$ firebase init hosting
```
Follow the steps but make sure to let the public directory blank (it will be public by default), let the web app as a single page app and don't overwrite index.html

# Deploy your own version
## Bundle your code
Use the command 
```
$ npm run build
```
## Deploy it to firebase
Enter in the terminal
```
$ firebase deploy
```
