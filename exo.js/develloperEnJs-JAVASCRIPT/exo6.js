function determinerPGCD(dividende,diviseur) {
    let ResteDivision;
    do{
        ResteDivision= dividende % diviseur;
        if(ResteDivision != 0){
            dividende=diviseur;
            diviseur=ResteDivision;

        }
    }while(ResteDivision != 0);
    return diviseur
}