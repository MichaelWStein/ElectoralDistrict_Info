// Electoral Information

//var characteristics;

//Function to build the map with electoral districts
function build_map() {

    //var elec_dist

    // Tile layer - for building the basic map
    // There may be issues here in future chrome releases - see console.log information and look at fixing it.
    lightMap=L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>,\
        Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
    });

    // Building the basic map
    map = L.map("map", {
        center: [47.530367, -80.346771],
        zoom: 6,
        layers: [lightMap]
    });

    // Getting the json file (through Flask, see app.py), add the layer with Leaflet 
    d3.json("/prov_geojson")
        .then(function(data) {
            L.geoJSON(data).addTo(map)

            //console.log in case I want to review the data, remove at a later date
            data.features.forEach(logfunction);
            function logfunction(data, index) {
                console.log(data.properties.FEDNUM, index);
            }            
        })
        .catch(function(error){
            console.log(error)
        });      
}

//Calling the Function to build the map
build_map();
//console.log(characteristics);
