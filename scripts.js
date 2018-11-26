const showWeather = (data) => {

   console.log(data.current.condition.text)
   const current_weather = data.current.temp_f
   const condition = data.current.condition.text
   $("#display").html(current_weather)
   $("#condition").html(condition)
}
const getWeather = (apiKey, city) => {
   const weatherUrl = "http://api.apixu.com/v1/current.json?&key=" + apiKey + "&q=" + city 
    
   $.ajax({
      url: weatherUrl,
      success: showWeather
   })
}

$(document).ready(function () {
   const apiKey = "f98226bb478d4b73b4f150116181311"
   $("#getWeather").on("click", function () {
      let city = $("#city").val()
      getWeather(apiKey, city)
   })
});
  
