function validarnom(){/*funció per validar que el camp nom estigui ple i no siguin números*/
    var nom=$("#nom").val();
    if(nom.length==0 || $.isNumeric(nom)){
        alert("El camp nom està buid o conté valors numèrics");
        return false;
    }else{
        return true;
    }
}

function validarllinatges(){/*funció per validar que el camp llinatges estigui ple i no siguin números*/
    var llinatges=$("#llinatges").val();
    if(llinatges.length==0 || $.isNumeric(llinatges)){
        alert("El camp llinatges està buid o conté valors numèrics");
        return false;
    }else{
        return true;
    }
}

function validardni(){/*funció per validar que el DNI sigui correcte*/
    var dni=$("#dni").val();
    var numero=parseInt(dni.substr(0,dni.length-1));
    var lletra=dni.toUpperCase().substr(-1);
    dnilletra=numero%23;
    var lletra2=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    if(lletra!=lletra2[dnilletra]){
        alert("El DNI "+dni+" és incorrecte o no s'ha emplenat el camp.");
        return false;
    }else{
        return true;
    }        
}

function validaremail() {/*funció per validar que el correu sigui correcte*/
    var email=$("#email").val();
    patro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!patro.test(email) ){
        alert("El correu  " + email + "  és incorrecte o no s'ha emplenat el camp.");
        return false;
    }else{
        return true;
    }
}

function fila(){/*funció per anar posant les dades introduides dins una fila de la taula*/
    var nomv=validarnom();
    var llinv=validarllinatges();
    var dniv=validardni();
    var emailv=validaremail();
    if(dniv==true & emailv==true & nomv==true & llinv==true){/*la funció només s'executa
    si les validacions anteriors retornen true*/
        var fila=$('<tr id="fila"><td>'+$("#nom").val()+'</td>'+'<td>'+$("#llinatges").val()
        +'</td>'+'<td>'+$("#dni").val()+'</td>'+'<td>'+$("#email").val()+'</td>'+'<td>'+
        $("#nota").val()+'</td>'+'<td><input type="button" id="eliminar" class="esborrar" value="Eliminar"/></td>'+'</tr>');
        $("#taula tbody").append(fila);
        document.getElementById("formulari").reset();
        return false;
    }else{
        document.getElementById("formulari").reset();
        return false;
    }
    
}

$(function (){/*funció que se crida amb un botó que apareix a cada fila per si es vol borrar 
    aquella fila*/
    $(document).on('click', '.esborrar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
});

//Per: Victòria Binimelis Vadell. Febrer 2018//







