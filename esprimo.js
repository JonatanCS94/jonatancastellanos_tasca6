function esprimo(num){
    var primo = true;
    var i = 2;
while ((i<num) && esprimo){
    if(num%i == 0){
        primo = false;
    i--;
    }
    return primo;
    }
}   