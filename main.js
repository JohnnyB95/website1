// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDWu2rDyzGOONNkN9AdrGCW0slcKKbDRDI",
  authDomain: "johnnyb-test1.firebaseapp.com",
  databaseURL: "https://johnnyb-test1.firebaseio.com",
  projectId: "johnnyb-test1",
  storageBucket: "johnnyb-test1.appspot.com",
  messagingSenderId: "638853048240",
  appId: "1:638853048240:web:6d6a32349560bed9f89875"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('feedback');

// Listen for form submit
//document.getElementById('contactForm').addEventListener('submit', submitForm);

// Listen for feedback submit
document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);


// Submit form
function submitFeedback(e){
  e.preventDefault();

  // Get values
  //var name = getInputVal('name');
  //var company = getInputVal('company');
  //var email = getInputVal('email');
  //var phone = getInputVal('phone');
  //var message = getInputVal('message');
  var feedback = getInputVal('feedback');
  var timestamp = new Date().toString();

  // Save message
  //saveMessage(name, company, email, phone, message, feedback);
  console.log(timestamp);
  saveFeedback(timestamp,feedback);


  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('feedbackForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message, feedback){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
    feedback:feedback
  });
}

// Save message to firebase
function saveFeedback(timestamp, feedback){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    timestamp: timestamp,
    feedback:feedback
  });
}
