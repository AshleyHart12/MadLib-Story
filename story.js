$(document).ready(function() {
    $("#nextArrowTwo").hide();
    $("#secondLine").hide();
    $("#thirdLine").hide();
    $("#nextArrowThree").hide();
    $("#fourthLine").hide();
    $("#getStarted").hide();
    

    $("#nextArrowOne").on("click", function() {
        $("#nextArrowOne").hide();
        $("#nextArrowTwo").show();
        $("#secondLine").show();
    });

    $("#nextArrowTwo").on("click", function() {
        $("#nextArrowTwo").hide();
        $("#thirdLine").show();
        $("#nextArrowThree").show();
    });  

    $("#nextArrowThree").on("click", function() {
        $("#nextArrowThree").hide();
        $("#fourthLine").show();
        $("#getStarted").show();
    });  

// On click function to prompt users through beginning - Click next to read rules - Enter word and click next to enter another word - pretty box

// Make an array/loop to allow users to enter their own words

// Append user entered words into the story line using a loop - Make all user words CAPITAL







}); // END DOCUMENT ON-READY