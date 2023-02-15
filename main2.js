// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLUl2_RdOLVEjUFG0tloLOPsPV8nMc-4",
  authDomain: "kwitterhomework-71580.firebaseapp.com",
  databaseURL: "https://kwitterhomework-71580-default-rtdb.firebaseio.com",
  projectId: "kwitterhomework-71580",
  storageBucket: "kwitterhomework-71580.appspot.com",
  messagingSenderId: "1016698860476",
  appId: "1:1016698860476:web:4ffd6d45b719fcb78231b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding live server"
  });
  localStorage.setItem("room_name", room_name);
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
     console.log("Romm Names " + Room_names)
     row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>"
     document.getElementById("output").innerHTML +=  row
      //End code
    });
  });
}
getData();
