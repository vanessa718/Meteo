(function main(){
var inputVille= "";
var mymap = L.map('mapid').setView([45,3], 13);
$('#selec').on('click',function(){

	getJqAjax();
})

function getJqAjax(){
	inputVille="";
	inputVille=$("#ville").val();

	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/weather?q="+inputVille+"&units=metric&APPID=6b0093ca3ed371f163ae90b3957b8b98",
		datatype:'json',
		success: function(data){
			console.log(data);
			$(".city").html(data.name);
			$("#temp").html(data.main.temp);
			$("#temp_min").html(data.main.temp_min);
			$("#temp_max").html(data.main.temp_max);
			$("#pression").html(data.main.pressure);
			$("#hum").html(data.main.humidity);
			$("#lon").html(data.coord.lon);
			$("#lat").html(data.coord.lat);
			$(".icons").html("<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png' alt='Icon'.>");
			carte(data.coord.lat,data.coord.lon);
		},
		error: function(){
			$(".city").html("no city, sorry");
			$("#temp").html("0");
			$("#temp_min").html("0");
			$("#temp_max").html("0");
			$("#pression").html("0");
			$("#hum").html("0");
			$("#lon").html("0");
			$("#lat").html("0");
		
		}
	})
}		

function carte(newLat,newLon){
		mymap.setView([newLat,newLon],13);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    	attribution: '',
    	maxZoom: 18,
    	id: 'mapbox.streets',
    	accessToken: 'your.mapbox.access.token'
		}).addTo(mymap);
		
		L.marker([newLat,newLon]).addTo(mymap)
    	.bindPopup('Vous êtes ici!')
    	.openPopup();
}

})();

