function validardia(){/*funció per validar que el dia introduit sigui 1*/
    var dia=new Date(document.getElementById("diainici").value);
    var dia2=dia.getDate();
    if(dia2>1){
        document.getElementById("error1").innerHTML = "La data és incorrecta, recorda que només pot ser dia primer";
    }else{
        return true;
    }
}

/*tot seguit hi ha les funcions per comprovar que els camps estigui omplits, i si no és així
surt un error indicant quin cap ha quedat buid*/
function validardata(){/*funció per assegurar que l'usuari ha introduit una data*/
    var diainici=new Date(document.getElementById("diainici").value);
    var diainici2=diainici.toString();
    if(diainici2=="Invalid Date"){
        document.getElementById("error0").innerHTML = "No és pot fer el càlcul, el camp data està buid";
    }else{
        return true;
    }
}

function validarcapital(){/*funció per assegurar que l'usuari ha omplit el camp capital*/
    var capital=document.getElementById("capital").value;
    if(capital<=0){
        document.getElementById("error2").innerHTML = "No és pot fer el càlcul, el camp capital està buid";
    }else{
        return capital;
    }
}

function validarinteressos(){/*funció per assegurar que l'usuari ha omplit el camp interessos*/
    var interessos=document.getElementById("interessos").value;
    if(interessos<=0){
        document.getElementById("error3").innerHTML = "No és pot fer el càlcul, el camp interessos està buid";
    }else{
        return interessos;
    }
}

function validartermini(){/*funció per assegurar que l'usuari ha omplit el camp termini*/
    var termini=document.getElementById("termini").value;
    if(termini<=0){
        document.getElementById("error4").innerHTML = "No és pot fer el càlcul, el camp termini està buid";
    }else{
        return termini;
    }
}

/*la següent funció fa el càcul per saber la quota mensual que s'ha de pagar*/
function calcular() {
    var datai=validardata();
    var data=datafi();
    var dia=validardia();
    var c=validarcapital();
    var i=validarinteressos();
    var t=validartermini();
    /*ho he fet operació per operació per poder anar comprovant si funcionen o no*/
    if(c && i && t && dia==true && datai==true){/*la funció només s'executa si s'han omplit
    tots els camps i la data és dia 1*/
        var q1=c*i;
        var q2=1+(i/100);
        var q3=Math.pow(q2, -t);
        var q4=1-q3;
        var q5=100*q4;
        var q6=q1/q5;
        var quota=Math.round(q6*100)/100;

        document.getElementById("quota").innerHTML = "La quota mensual és de "+quota+" euros";
        document.getElementById("datafi").innerHTML = "La data que acabarà la hipoteca és: "+data;
    }
}

/*la següent funció calcula quin dia s'haurà de pagar la darrera quota*/
function datafi(){
    var t=document.getElementById("termini").value;
    var t2=t*31;
    var d=new Date(document.getElementById("diainici").value);
    var dfi2=new Date(d.setDate(d.getDate()+t2));
    var dia=dfi2.getDate();/*per agafar el dia de la data*/
    var mes=dfi2.getMonth()+1;/*per agafar el mes de la data*/
    var any=dfi2.getFullYear();/*per agafar l'any de la data*/
    var dfinal=(""+dia+"/"+mes+"/"+any);/*així evit que aparegui tot la data, amb hora, minuts...*/
    return dfinal;
}

/*Per: Victòria Binimelis Vadell. Gener 2018*/


