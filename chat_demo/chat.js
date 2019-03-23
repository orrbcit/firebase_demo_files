//this line is how you get a reference to the database
//that was initilized in index.html
var myFirebase = firebase.database(); 

//variables for other objects in the UI
var usernameInput = document.getElementById("username");
var textInput = document.getElementById("text");
var postButton = document.getElementById("post");
var clearButton = document.getElementById("clear");

// When the Post button is clicked
// Tell the script to get the name, and message
// Construct a string, then use "set" method (save new, or replace data)
// or use "push" method to add onto the DB.
// Then clear the textInput variable.

postButton.addEventListener("click", function(){
    var msgUser = usernameInput.value;    //user provided name
    var msgText = textInput.value;        //user provided message
    console.log(msgUser);
    console.log(msgText);

    //The following 4 lines pushes a new JSON object onto DB in the "log" branch
    myFirebase.ref('log').push({
        username:msgUser,
        text:msgText});
    textInput.value = "";
});

clearButton.addEventListener("click", function(){
    myFirebase.ref('log').remove()
        .then(function(){
        console.log("remove succeeded")
    })
    .catch(function(error){
           console.log("remoe failed:" + error.message)
    });
    var msg = document.getElementsByClassName("msg");
    while (msg[0]){
        msg[0].remove();
    }
});

var beginListening = function() { 
    myFirebase.ref('log').on('child_added', function(snapshot) {
            var msg = snapshot.val();
            var msgUsernameElement = document.createElement("b");   //bold
            msgUsernameElement.textContent = msg.username;
            var msgTextElement = document.createElement("p");       //paragraph
            msgTextElement.textContent = msg.text;
            console.log(msg.text);

            var msgElement = document.createElement("div");
            msgElement.appendChild(msgUsernameElement);
            msgElement.appendChild(msgTextElement);
            msgElement.className = "msg";
            document.getElementById("results").appendChild(msgElement);
        })
}
beginListening();
