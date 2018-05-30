function setHeatmapData(){
    console.log("inicio");
    var points = [];
	$.getJSON("http://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD", function (json) {
	    $.each(json.data, function(i, entry){
	        console.log(entry[28]);
	        points.push(new google.maps.LatLng(entry[28], entry[29]));
	    });
	});
	return points;
}