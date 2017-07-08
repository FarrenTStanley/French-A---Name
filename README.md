# French-A---Name
React.js French Greeting SPA

So this is a pretty simple React.JS Application that allows you to add a name to the list and then French that Sh*t so to speak.

The main process behind this is using a return to set the initial state from a blank string in the AddGreeter
class by calling the AddGreeting name and passing it through an event after clicking on the "French That Sh*t" input button
who has a value of this.state.greetingName. Then we use the HelloWorld class to create a simple button with an
onclick value of this.frenchify which calls the frenchify method to set the greeting state as "That's a french ass name". Then to 
remove the added name we call the removeGreeting(removeName) method to filter out whatever the name happens to be set as.
