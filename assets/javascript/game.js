var userText = document.getElementById("user-text");


	function getMovie() {//gets random movie, then returns array with one character in each index of the array
		var movies = ['interstellar','titanic','gravity','inception','seven','psycho','terminator','alien'];
		var rnum = Math.floor((Math.random() * movies.length) +1);
		var randomMovie = movies[rnum - 1];
		var array = randomMovie.split('');
		return array;
	}


	function makeUnderscore() {
		//movieCharArray = getMovie();//putting the array into movieCharArray
		charNum = new Array(movieSelect.length);//creating another emtpy array with same number of indexes as the selected movie

		for(var i = 0; i<charNum.length;i++) {//makes the characters into _, doing this so any movie length will be covered with the correct number of _
			charNum[i] = "_ "
		}
		//console.log(movieCharArray)
		//console.log(charNum)
	}

	function printblankArray() {
		for(var i=0;i<charNum.length;i++) {
		var grabElement = document.getElementById('movieName');	
		var replaceElement = document.createTextNode(charNum[i]);
		grabElement.append(replaceElement)
		}
	}
		
	function getAllIndexes(movie, userGuess) {
		var indexes = [], i;
			for(i = 0; i < movie.length; i++) {
				if (movie[i] === userGuess)
					   indexes.push(i);
				}
				return indexes;
		
		}

		var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var winNum = 0;
		var guessLeft = 12;
		var guessCount = 0;
		var guessHistory = [];
		var guessInstance = [];
		var movieSelect = getMovie();	
		console.log(movieSelect)
      	var charNum = [];
      	makeUnderscore();
      	printblankArray();


		document.onkeyup = function(event) {
        // console.log(event)
        userText.textContent = event.key;
        // Determines which key was pressed.
      	var userGuessChar = event.key;	
      	
      	if (guessLeft > 0) {

      		if (chars.indexOf(userGuessChar) !== -1) {
     		
		      		if (movieSelect.indexOf(userGuessChar) !== -1) {
		      			guessInstance = getAllIndexes(movieSelect,userGuessChar); //going to return an array with the index of the instance/s location/s
		      			console.log(guessInstance);

			      			for(var i=0;i<guessInstance.length;i++) {
			      				charNum[guessInstance[i]] = userGuessChar;
								
							}
							var combined = charNum.join("");
							document.getElementById('movieName').innerHTML = combined;
							//guessLeft--; not applying this rule as you shouldn't have points deducted for guessing correctly
							
							if (guessHistory.indexOf(userGuessChar) !== -1) {
								alert("you've already chosen that letter")
							} else {
							guessHistory[guessCount] = userGuessChar;
							guessCount++;
							}
							if (charNum.indexOf("_ ") === -1) {
								alert("You Win! The movie title is: " + movieSelect.join(""));
								guessLeft = 12;
								guessCount = 0;
								movieSelect = getMovie();
								guessHistory = [];
								charNum = [];
								$("#movieName").empty();
						      	makeUnderscore();
						      	printblankArray();
						      	console.log(movieSelect);
							}

					} else {
						console.log("nope")
						guessLeft--;
						guessCount++;
						guessHistory[guessCount] = userGuessChar;	 
						if (guessLeft === 0) {
							alert("Sorry you lose");
							guessLeft = 12;
							guessCount = 0;
							movieSelect = getMovie();
							guessHistory = [];
							charNum = [];
							$("#movieName").empty();
					      	makeUnderscore();
					      	printblankArray();
					      	console.log(movieSelect);
						}
						
					}
				
	      		
			} else {
				alert("Please press choose a letter in the alphabet");
			}
	} 

	document.getElementById('winscore').innerHTML = winNum;
    document.getElementById('guessleft').innerHTML = guessLeft;
    document.getElementById('guesshistory').innerHTML = guessHistory.join(" ");
	
};
