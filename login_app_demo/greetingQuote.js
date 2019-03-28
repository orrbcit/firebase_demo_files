(function(){

    var firebase = app_firebase;
    
    // display personalized Hello line
    // construct "banner" and "quote" strings
    
    var banner = document.getElementById("banner");
    var quote = document.getElementById("quote");
    var userName = " ";
    var userQuote = " ";
    var numQuotes=0;
    var rand=0;

    //If the current user is authenticated then
    //	grab userName
    //	grab quote from database
    //	update "quote" DOM
    //	Finally, update "hello" DOM
    
    quote.innerText = userQuote;
    banner.innerText = "Hello ";
    
    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          	var userName=user.displayName;
            var userEmail=user.email;
			banner.innerText += " "+ userName;    // add user name to after hello
			
            //console.log(userEmail);
	  		//console.log (userName);
	  		//display quote from database 	
	  		var dbRef = firebase.database().ref('quotes/count');
	  		var promise = dbRef.once('value', function(snap) {
	  			 numQuotes = snap.val();
	  			 localStorage.setItem("num", numQuotes);
	  			 });
			//console.log (localStorage.getItem("num"));
	  		//random number between 1 and num
	  		promise.then(function(){
	  			rand = Math.floor(Math.random()* localStorage.getItem("num"))+1;
	  			localStorage.setItem("rand", rand);
	  			});

			//convert Random number to a string for db reference
			var randString = localStorage.getItem("rand")+"";			
			var dbRef = firebase.database().ref('quotes/').child(""+randString);
			dbRef.on('value', function(snap){
                userQuote = snap.val();
                quote.innerText = userQuote;
                console.log(userQuote);
            });
    	} 
        
    });
})();

