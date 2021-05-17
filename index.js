
function primeMover(n){
    if(n>1000){
        return "You wannted the 1000th number"
    }
    var primes = [2];
    var x = 3;
    var count = 0;
    do{
        for(var y=2; y<x; y++){
            if(x%y===0){
                count++;
            }
        }
        if(count===0){
            primes.push(x);
            x++;
        }else{
            x++;
            count=0;
        }
    }
    while(primes.length<n);
    return primes[primes.length-1];
}
primeMover(n); 
console.log(primeMover(1000));