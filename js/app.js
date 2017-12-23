(function main(){
var xhr=createXHR();	
$('#mybtn').on('click',function(){
	//getJson();
	getJqAjax();
})
function getJqAjax(){
	var mylat = $('#mylat').val();
	var mylng = $('#mylng').val();
	$.ajax({
		url:"https://www.prevision-meteo.ch/services/json/lat="+ mylat +"lng="+mylng+"",
		datatype:'json',
		success: function(data){
			console.log("success");
			console.log(data.fcst_day_0.condition)
		},
		error: function(){
			console.log("no way, i'm fucked");
		}
	})
}
function getJson(){
	var mylat = $('#mylat').val();
	var mylng = $('#mylng').val();

	var myurl = "https://www.prevision-meteo.ch/services/json/lat="+ mylat +"lng="+mylng;
	//var myurl = "http://www.geobi.fr/dev/googleplace/places.php?lat="+ mylat +"&lon="+mylng+"&type=pharmacy&radius=10000";
	//"http://www.geobi.fr/dev/googleplace/places.php?lat=44.334862&lon=2.435056&type=pharmacy&radius=10000"
	var objJSON;
	
	xhr.open("GET", myurl,true);

	xhr.onreadystatechange=function()
	{
				
		if (xhr.readyState == 4) 
		{
			if (xhr.status != 404) 
			{
				var maMeteo=eval("(" + xhr.responseText + ")");
				var myDiv = $('#meteo');
				var contenu ="";
				//var contenu = maMeteo.
				var myCondition = maMeteo.fcst_day_0.condition;
				alert(mycondition);
			}
		}
	}
	xhr.send(null);
}

function createXHR() 
{
    var request = false;
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (err3) {
		try {
			request = new XMLHttpRequest();
		}
		catch (err1) 
		{
			request = false;
		}
            }
        }
    return request;
}
})();