function comesespais(){/*funció per subsituir els espais per comes*/
    var cerca=$("#search").val();
    var cerca=cerca.replace(/\s/g,",");
    return(cerca);
}

function cercar(){/*funció per fer la recerca a l'API de Flickr*/
    $(".recerca").remove();/*perquè cada vegada que es fa una cerca s'esborri l'anterior*/
    var cerca2=comesespais();/*variable que crida a la funció que substitueix els espais per comes*/
    $.ajax({
        url:"https://api.flickr.com/services/feeds/photos_public.gne",/*enllaç a l'API de Flickr*/
        type:"GET",/*tipus de petició*/
        async: true,/*petició asincrona*/
        data:"tags="+cerca2+"&tagmode="+$("#seleccio").val()+"&format=json&jsoncallback=?",/*dades de la petició,
        el tagmode és igual al valor del select (amb la id seleccio)*/
        dataType:"json",/*tipus de dada, objecte json*/
        success: function(data){/*funció que s'executa si va bé*/
            $.each(data.items, function(i, it){/*recorr tot l'objecte i agafa els elements que s'especifiquen a continuació.*/
                var i=i+1;/*variable per numerar les files de la taula*/
                var fila = $("<tr class='recerca'><td>"+i+"</td><td>"/*variables per anar inserint les files*/
                +it.title+"</td>><td>"/*columna amb el títol*/
                +it.link+"</td><td><img src='"/*columna amb el link*/
                +it.media.m+"'></td>><td>"/*columna amb la imatge*/
                +it.published+"</td>><td>"/*columna amb la data de publicació de la imatge*/
                +it.author+"</td>><td>"/*columna amb l'autor*/
                +it.tags+"</td></tr>");/*columna amb les etiquetes*/
                $("#costaula").append(fila);/*inserir les files al cos de la taula*/
            });
        },
        error: function(){/*funció que s'executa si dona error*/
        alert("Error")
        }
    });
    return false;
}

