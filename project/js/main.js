function getWeather(searchQuery) {
    $(".city").text("");
    $(".temp").text("");
    $(".error").text("");
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&appid="+apiKey;
    $.ajax(url,
        {success: function(data){
            $(".city").text(data.name);
            $(".temp").text(data.main.temp);
        }, error: function(error){
            $(".error").text("An error occured.");
        }}
    );
}

function searchWeather() {
    var searchQuery = $(".search").val(); 
    getWeather(searchQuery);
}