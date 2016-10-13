var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "efd8f56dd274a0322b3d227cb42df47d";

$(document).ready(function() {
    $("#weatherLocation").click(function() {
        var city = $("#location").val();
        $("#location").val("");
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
        {
            $(".showWeather").text(city + " has a humidity of " + response.main.humidity + "%, and a sea level of " + response.main.sea_level + " this city's country code is " + response.sys.country');
        }).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
        });
    });
});
