(function(){

    var firebase = app_firebase;
    
    // display personalized Hello line
    // construct "banner" and "quote" strings
    
    var banner = document.getElementById("banner");
    var quote = document.getElementById("quote");
    var userName = "my friend";
    var userQuote = " ";
    var numQuotes = 5;

    //If the current user is authenticated then
    //	grab userName
    //	grab quote from database
    //	update "quote" DOM
    //	Finally, update "hello" DOM
    
    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          	userName=user.displayName;
            var userEmail=user.email;
            
            //console.log(userEmail);
	  		//console.log (userName);
	  		//display quote from database 
	  		
	  		var dbRef = firebase.database().ref('quotes/count');
	  		dbRef.on('value', function(snap) {
	  			 numQuotes = snap.val();
	  			 console.log(numQuotes);
	  			 });
			console.log(numQuotes);
	  		
	  		//random number between 1 and num
	  		var randNum = Math.floor(Math.random()*numQuotes)+1;
	  		console.log (randNum);
	
			var dbRef = firebase.database().ref('quotes/').child(randNum);
			
			dbRef.on('value', function(snap){
                userQuote = snap.val();
                quote.innerText = userQuote;
                banner.innerText = "Hello " + userName;
            });
    	} else {
                quote.innerText = userQuote;
                banner.innerText = "Hello " + userName;
        }        
    });
})();

