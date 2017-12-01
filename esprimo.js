function esprimo(num){
    esprimo = true;
    var x = 2;
while ((x<num) && esprimo){
    if(num%x == 0){
        esprimo = false;
    x++;
    }
    return esprimo;
    }
}   