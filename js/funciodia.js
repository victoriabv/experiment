function day(dia){/*a partir del valor de la funció de segle, de la de l'any, de la de l'any 
bisest i de la del mes, fa un càlcul per tornar un valor i saber quin deia de la setmana
és*/ 
    s= segle(any);
    y= year(any);
    a= anybis(any);
    m= month(mes);

    d=(s+y+a+m+j);
    d=d%7;/*el valor del dia és la suma de les variables segle, any, anybis i mod de 7*/
    
    if(dia<1 || dia>31){/*per evitar que l'usuari introdueixi un dia incorrecte*/
    alert("Has introduit un dia no vàlid");
    }else{/*retornar un valor per saber quin dia de la setmana és*/
        if(d==1){
            return "dilluns";
        }
        if(d==2){
            return "dimarts";
        }
        if(d==3){
            return "dimecres";
        }
        if(d==4){
            return "dijous";
        }
        if(d==5){
            return "divendres";
        }
        if(d==6){
            return "dissabte";
        }
        if(d==7){
            return "diumenge";
        }
    }
}
/*Per: Victòria Binimelis Vadell. Desembre 2017*/

