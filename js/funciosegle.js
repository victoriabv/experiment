function segle(any){/*a partir de l'any introduit per l'usuari, tornar un valor 
segons el segle que sigui*/
    if(any>=1700 && any<=1799){
        return +5;
    }
    if(any>=1800 && any<=1899){
        return +3;
    }
    if(any>=1900 && any<=1999){
        return +1;
    }
    if(any>=2000 && any<=2099){
        return 0;
    }
    if(any>=2100 && any<=2199){
        return -2;
    }
    if(any>=2200 && any<=2299){
        return -4;
    } 
}
/*Per: Victòria Binimelis Vadell. Desembre 2017*/





