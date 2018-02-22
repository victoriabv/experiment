function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'json/google_maps.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var responseText = xobj.responseText;
            // Parse JSON string into object
            var actual_JSON = JSON.parse(responseText);
            callback(actual_JSON);
        }
    };
    xobj.send(null);  
}

function viewJSON() {
    loadJSON(function(response) {
        /* Aqui l'objecte response representa l'objecte JSON que ens 
           ha retornat el servidor */
           var taula = "<table class='table-striped' id='tb'><tr><th>Nom</th><th>Adreça</th><th>Latitud</th><th>Longitud</th><th>Tipus d'establiment</th><th>Icona</th></tr>";/*variable
           per a dibuixar la taula*/
           for (var i=0; i<response.results.length; i++){/*bucle per recòrrer l'objecte JSON*/
                taula += "<tr><td>"+ response.results[i].name;+"</td>";/*agafar el nom del restaurant*/
                taula += "<td>"+ response.results[i].vicinity;+"</td>";/*agafar l'adreça*/
                taula += "<td>"+ response.results[i].geometry.location.lat;"</td>";/*agafar la latitud*/
                taula += "<td>"+ response.results[i].geometry.location.lng;"</td>";/*agafar la longitud*/
                taula += "<td>"+ response.results[i].types;"</td>";/*tipus de restaurant*/
                taula += "<td>"+ "<img src='" +response.results[i].icon+"'/>";"</td></tr>";/*icona del restaurant*/
            }
            taula += "</table>";/*fi de la taula*/
            document.getElementById("results").innerHTML = taula;/*per fer que la variable taula 
            sigui el getElementById que agafa aquells elements que volem del JSON*/
    });
}
//Per: Victòria Binimelis Vadell. Gener 2018//


