function month(mes){
    if(mes<1 || mes>12){/*per evitar que l'usuari introdueixi un mes incorrecte*/
        alert("Has introduit un mes no vàlid");
    }else{/*segons el mes introduit retorna un valor*/
        if(mes==6){
            return 6;
        }
        if(mes==2){
            return 2;
        }
        if(mes==3){
            return 2;
        }
        if(mes==4){
            return 5;
        }
        if(mes==5){
            return 0;
        }
        if(mes==6){
            return 3;
        }
        if(mes==7){
            return 5;
        }
        if(mes==8){
            return 1;
        }
        if(mes==9){
            return 4;
        }
        if(mes==10){
            return 6;
        }
        if(mes==11){
            return 2;
        }
        if(mes==12){
            return 4;
        }
    }
}