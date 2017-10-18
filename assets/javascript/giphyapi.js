$(document).ready(function() {

	var animalList;
	animalList = [];

	function clearSearch() {
		var animalList = [];
	}

	$("#clearButton").on("click", function() {
		clearSearch();
	});


	$("input").keypress(function(event) {
  		if (event.which === 13) {
   			addAnimal();
  		}
  	});


	$("#addButton").click(addAnimal); 

	$("#listOfAnimals").click(showAnimal);
	function addAnimal() {
		var animal = $("#newAnimal").val();
		if (animal){
			animalList.push(animal);
			$("#newAnimal").val("");
			var buttonToAdd = $("<button>");
			buttonToAdd.attr("id", "animalButton", "animalType", animal).append(animal);
			$("#listOfAnimals").append(buttonToAdd);
		}
	}

	
	
	function showAnimal(){
		var displayAnimal = "cat";
		console.log(displayAnimal);
		var key = "e46e05853b5049bd881c069144a05512";
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + displayAnimal + "&rating=PG&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {
			console.log(queryURL);
			var results = response.data;
			$("#gifs-here").empty();
			
			for(var i =0; i <results.length; i++){

				var animalDiv = $("<div>");

				var ratingText = $("<div>").text("Rating: " + results[i].rating);
				var animalImage = $("<img>");

				animalImage.attr("src", results[i].images.fixed_height.url);

				animalDiv.append(ratingText);
				animalDiv.append(animalImage);

				$("#gifs-here").append(animalDiv);


			}


		});
	}



	


	//https://api.giphy.com/v1/gifs/search?api_key=
	//e46e05853b5049bd881c069144a05512&q=dog&limit=10&offset=0&rating=PG&lang=en

	//https://api.giphy.com/v1/gifs/search?api_key=
	//4921731e2b254a8fb68a8e89e48143cc&q=dog&limit=10&offset=0&rating=PG&lang=en

	//$("#animalButton").click(showAnimal)


});