function anybis(any){
    if((any%100!=0 || any%400==0) && any%4==0){/*si l'any és divisible entre 100, 
    o entre 400 i entre 4 i el mes és gener o febrer, retornar -1, si no retornar 0*/
        if(mes==1 || mes==2){
            return -1;
        } 
    }
    else {
        return 0;
    }   
}
/*Per: Victòria Binimelis Vadell. Desembre 2017*/