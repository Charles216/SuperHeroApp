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
    $("#heroInput").val("");
});

// Call the makeButton(); to display items currently in array...
    makeButtons();

function getGif() {

    //set up the api variables...
    var superHero = $(this).attr("data-name");
    var apiURL = "https://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=Mr5kXQEuNzkffeYSQKuT1dD4VhcU5vAP&limit=10";

    //establish jax with giphy api...
    $.ajax({
    url: apiURL,
    method: "GET"
    }).then(function(response) {
    
    var results = response.data;
    console.log(results);
        for(i = 0; i < results.length; i++) {

            if(results[i].rating !== "r") {
            
                var gifDiv = $("<div>");
                    gifDiv.addClass("gif")
    
                var heroIMG = $("<img>");

                heroIMG.attr("src", results[i].images.fixed_height_still.url);

                heroIMG.attr("data-still", results[i].images.fixed_height_still.url)

                heroIMG.attr("data-animate", results[i].images.fixed_height.url)

                heroIMG.attr("data-state", "still")
                heroIMG.addClass("img")

                var rating = results[i].rating;
                var p = $("<p>").text("This Gif is Rated: " + rating);
                p.addClass("rating")

                gifDiv.append(heroIMG);
                gifDiv.append(p);

                $("#heroDump").prepend(gifDiv);
        }

    }
});

};

$(document).on("click", ".img", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "playing")
    } else {
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});

$(document).on("click", ".supHeroBtn", getGif);



  