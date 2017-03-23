function fetch(){
	var IP_url = "http://freegeoip.net/json/"
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", IP_url, false);
	xmlhttp.send();

	/*var IP_data = JSON.parse(xmlhttp.responseText);
	var region = IP_data.city
	console.log(region)*/
	
	var weatherURL = "http://api.apixu.com/v1/current.json?key=67d92babdd964006831133808171802&q=" + "auto:ip"
	var xmlhttp2 = new XMLHttpRequest();
	xmlhttp2.open("GET", weatherURL, false);
	xmlhttp2.send();

	var weatherJSON = JSON.parse(xmlhttp2.responseText,null,2);
	//console.log("auto:     \n" + JSON.stringify(weatherJSON));
	var weatherData = weatherJSON.current;

	var region = weatherJSON.location.region;

	var weatherTemp_c = weatherData.temp_c;
	var weatherText = weatherData.condition.text;
	var weatherIcon =  "http://" + weatherData.condition.icon;

	var windSpeed = weatherData.wind_kph;
	var windDir = weatherData.wind_dir;
	var pressure = weatherData.pressure_mb;
	var precipitation = weatherData.precip_mm;
	var humidity = weatherData.humidity;

	document.getElementById("w_icon").innerHTML = "<img id='w_icon_img' src = '" + weatherIcon+"'>"
	document.getElementById("w_data").innerHTML = "Weather in " + region + " is " + weatherTemp_c + "<sup>o</sup>C " + "("+weatherText+")" 
	document.getElementById("w_misc").innerHTML = "Wind speed: " + windSpeed + " km/h" + "</br>"
												  +"Wind Direction: " + windDir +"</br>"
												  +"Pressure: " + pressure + " millibar" +"</br>"
												  +"Precipitation: "+ precipitation + " mm" + "</br>"
												  +"Humidity: " + humidity
}


var btn = document.getElementById("btn");
btn.onclick = function(){
	var textVal = document.getElementById("search").value;
	var weatherURL = "http://api.apixu.com/v1/current.json?key=67d92babdd964006831133808171802&q=" + textVal

	var xmlhttp = new XMLHttpRequest;
	xmlhttp.open("GET",weatherURL,false);
	xmlhttp.send();

	var weatherJSON = JSON.parse(xmlhttp.responseText,null,2);
	//console.log(JSON.stringify(weatherJSON));
	var weatherData = weatherJSON.current;

	var region = weatherJSON.location.region;

	var weatherTemp_c = weatherData.temp_c;
	var weatherText = weatherData.condition.text;
	var weatherIcon =  "http://" + weatherData.condition.icon;

	var windSpeed = weatherData.wind_kph;
	var windDir = weatherData.wind_dir;
	var pressure = weatherData.pressure_mb;
	var precipitation = weatherData.precip_mm;
	var humidity = weatherData.humidity;

	document.getElementById("w_icon").innerHTML = "<img id='w_icon_img' src = '" + weatherIcon+"'>"
	document.getElementById("w_data").innerHTML = "Weather in " + region + " is " + weatherTemp_c + "<sup>o</sup>C " + "("+weatherText+")" 
	document.getElementById("w_misc").innerHTML = "Wind speed: " + windSpeed + " km/h" + "</br>"
												  +"Wind Direction: " + windDir +"</br>"
												  +"Pressure: " + pressure + " millibar" +"</br>"
												  +"Precipitation: "+ precipitation + " mm" + "</br>"
												  +"Humidity: " + humidity

};