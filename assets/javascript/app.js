//create an array of srings for superheroes...
var topic = ["Black Panther", "Iron Man", "Wolverine", "Wonder Woman", "Thor", "Hodor", "Batman", "Deadpool", "Gamora", "Captain America", "Groot"];

    // Function for displaying superHero Gifs...
    function makeButtons() {

    // Deleting hero buttons prior to adding new hero buttons...
    $("#heroButton").empty();

    // Looping through the array of heros...
    for (var i = 0; i < topic.length; i++) {

    // dynamicaly create buttons for each hero in array...
    var heroBtn = $("<button>");
    
    // Adding a class...
    heroBtn.addClass("supHeroBtn");
    
    // Add customer tag =>data-<= attribute with a value of the superhero at index i...
    heroBtn.attr("data-name", topic[i]);
    
    // give the button the text of the index... 
    heroBtn.text(topic[i]);
    
    // Add button to HTML...
    $("#heroButton").append(heroBtn);
  }
}

// This function handles events when a button is clicked...
$("#addHero").on("click", function(event) {
    
    //prevent default action with click...
    event.preventDefault();

    // grab the text from the input box...
    var hero = $("#heroInput").val().trim();
    
    // The heroInput is then added to topics array...
    topic.push(hero);

    // call makeButtons which handles the topics array
    makeButtons();
});

// Call the makeButton(); to display items currently in array...
makeButtons();

//set up the api variables...
// var superHero = $(this).attr("data-name");
// var apiURL = "https://api.giphy.com/v1/gifs/search?api_key=Mr5kXQEuNzkffeYSQKuT1dD4VhcU5vAP&q=" + superHero + "&limit=10";

//establish jax with giphy api...
// $.ajax({
//     url: apiURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// })


//when the user clicks a button it grabs 10 random gifs about that character...

//$('#buttonID').on('click', //finish this);

//we need a static pic at first...

//when user clicks on the gif it animates...

//when the user clicks on the gif again it goes back to the still photo...

//every gif needs to display the rating and show on html...

//ad a formk that allows for people to add their own gif ideas..

//the submit button will create a new button for the user to click...



