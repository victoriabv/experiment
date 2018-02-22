function year(any){
    if(any>2299 || any<1700){/*per assegurar que l'usuari introdueix un any entre el 2299 i el 1700*/
        alert("Has introduit un any no vàlid");
    }else{
        y=parseInt((any.toString().substr(0,2)));/*convertir l'any a un string i agafar
        només els dos darrers dígits*/
        y=y+(y/4);/*sumar un quart del número obtingut a ell mateix*/
        y=Math.trunc(y);/*llevar els decimals*/
        return y;
    }
}
/*Per: Victòria Binimelis Vadell. Desembre 2017*/