var key = "67d92babdd964006831133808171802"
var g_key= "AIzaSyBMu7M2gSEphY8EAMmlfN9_094bPBJvCwY"
var xmlhttp = new XMLHttpRequest();

function getCity(){
			var IP_url = "http://ip-api.com/json"
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", IP_url, false);
			xmlhttp.send();

			var IP_data = JSON.parse(xmlhttp.responseText);
			var region = IP_data.city
			//alert(region)
			return region
		}

function getDetails(w_name,w_country){

	var d_info = document.getElementById("d_info")
	var d_title = document.getElementById("d_title")
	var d_more = document.getElementById("w_more")

	var d_URL = "https://kgsearch.googleapis.com/v1/entities:search?indent=true&limit=1&prefix=true&query=" + w_name + "&key=" + g_key;
	xmlhttp.open("GET",d_URL,false)
	xmlhttp.send()
	var d_JSON = JSON.parse(xmlhttp.responseText,null,2)
	d_data = d_JSON.itemListElement[0].result.detailedDescription

	d_title.innerHTML = "<b>" + w_name + ", " + w_country + "<b>"
	d_info.innerHTML =  d_data.articleBody
	d_more.setAttribute('href',d_data.url)

}

window.onload=function(){
	//var query = getCity();
	var weatherURL = "http://api.apixu.com/v1/current.json?key=" + key + "&q=auto:ip";
	xmlhttp.open("GET", weatherURL, false);
	xmlhttp.send();

	var weatherJSON = JSON.parse(xmlhttp.responseText,null,2);
	var weatherData = weatherJSON.current;

	var name = weatherJSON.location.name;
	var region = weatherJSON.location.region;
	var country = weatherJSON.location.country;
	getDetails(name,country)

	var weatherTemp_c = weatherData.temp_c;
	var weatherTemp_f = weatherData.temp_f;
	var weatherText = weatherData.condition.text;
	var weatherIcon =  "http://" + weatherData.condition.icon;

	var windSpeed = weatherData.wind_kph;
	var windDir = weatherData.wind_dir;
	var pressure = weatherData.pressure_mb;
	var precipitation = weatherData.precip_mm;
	var humidity = weatherData.humidity;

	document.getElementById("w_icon").innerHTML = "<img id='w_icon_img' style='margin-right:7em; height: 60px; width:60px' src = '" + weatherIcon+"'>";
	document.getElementById("w_name").innerHTML =name + "&nbsp; &nbsp;" + weatherTemp_c + "<sup>o</sup> C <br>" + "("+weatherText+")";

	//document.getElementById("w_data").innerHTML = name + "&nbsp; &nbsp;" + weatherTemp_c + "<sup>o</sup>C " + "("+weatherText+")";

	document.getElementById("w_misc").innerHTML = "<b>Wind speed:</b> " + windSpeed + " km/h" + "</br>"
												  +"<b>Wind Direction:</b> " + windDir +"</br>"
												  +"<b>Pressure:</b> " + pressure + " millibar" +"</br>"
												  +"<b>Precipitation:</b> "+ precipitation + " mm" + "</br>"
												  +"<b>Humidity:</b> " + humidity;
												  
	}
