# Tapas Directory - TerraQuest Front-End Exercise

## Description

The tapas directory is a small unfinished front-end application that lists four tapas restaurants in Birmingham with look-up enabled.

Completing this exercise should demonstrate a basic understanding of:
* JavaScript ES6
* NPM (Yarn) and Webpack
* React and Redux
* CSS

You will be required to present the exercise and you will be asked questions on the decisions you made, so please take as many notes as possible while completing the exercise.

## Installing and running the application
1) You will need NodeJS and ideally Yarn installed
2) Run `yarn install` to install all the dependencies
3) Run `yarn dev` to run the application in development mode (this should enable hot reloading)
4) Run `yarn test` to run all the test that verify the application
5) Run `yarn build` to build a production version of the application

## Mandatory activities

* Run `yarn test`, some of the tests will fail! Can you find which tests and why? Fix it and make the test pass.
* Not everything is in our tests, when you click on an entry of the directory it should appear as __selected__. The CSS class is there, but the user cannot see it. Can you style those ResultsEntry components that are __selected__?
* The component `ResultsEntry` has the postcode, but it is not displaying it. Could you please write the code required to display the postcode?

## Optional activities

* We want to make sure that we will never forget that `ResultsEntry` should display the postcode. Write the additional tests required to make sure this never happens again.
* Create a `Rating` component that enables providing rating scores of the restaurants (the score does not need to be persisted). Be creative :)

## What to do once I am finished

Compress your finished code into a zip file (please do not include __/node_modules__ or __/dist__, actually with __/src__ is probably enough) and send it back to us.

Comments and good style are appreciated but not essential, if you have finished the mandatory activities it is quite likely that you will have the chance to explain us your code in person!

Good luck!