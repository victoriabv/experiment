function numprimers (numero) {//funció per comprovar si un número és primer o no//
    var i=2;
    while(i<numero) {
        if(numero%i==0) {
            return false;//és un número primer//
        }
        i++;
    }
    return true;//no és un número primer//
}