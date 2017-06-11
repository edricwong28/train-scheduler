

// 1. Initialize Firebase
 var config = {
    apiKey: "AIzaSyAHl8haNQGiCgXD23o920QBluWW7yNA9lI",
    authDomain: "train-scheduler-fefd9.firebaseapp.com",
    databaseURL: "https://train-scheduler-fefd9.firebaseio.com",
    projectId: "train-scheduler-fefd9",
    storageBucket: "train-scheduler-fefd9.appspot.com",
    messagingSenderId: "773994260670"
  };

  firebase.initializeApp(config);

var database = firebase.database();

    // Button for adding new trains
$("#add-train-btn").click(function(event){
    // Grabs user input and stores them into variables
  var newTrain = $("#train-name-input").val().trim();
  var newDestination = $("#destination-input").val().trim();
  var newFirstTrain = $("#first-train-input").val().trim();
  var newFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data

  newObject = {
    train: newTrain,
    destination: newDestination,
    firstTrain: newFirstTrain,
    frequency: newFrequency
  };
    // Uploads employee data to the database, this will "trigger" the "child_added" event
    database.ref().push(newObject);

      // Logs everything to console
      console.log(newObject.train);
      console.log(newObject.destination);
      console.log(newObject.firObjectstTrain);
      console.log(newObject.frequency);

      alert("Train successfully added!");

      // clears the input boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");

});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
// "child_added" is a firebase event, such as "child-removed", "child_changed", and "child_moved"

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

   console.log(childSnapshot.val());

     // Store everything into a variable.
      var newTrain = childSnapshot.val().train;
      var newDestination = childSnapshot.val().destination;
      var newFirstTrain = childSnapshot.val().firstTrain;
      var newFrequency = childSnapshot.val().frequency;

       // Train Info
        console.log(newTrain);
        console.log(newDestination);
        console.log(newFirstTrain);
        console.log(newFrequency);
  

  // Prettify the employee start
 

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  
  // Calculate the total billed rate
 

  // Add each train's data into the table


})

  


  


  

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case