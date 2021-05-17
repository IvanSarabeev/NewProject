
function primeMover(n){
    n=1;
    if(n!=1000){
        return "You wanted the 1000th number"
    }
    let primes = [2];
    let x = 3;
    let count = 0;
    do{
        for(let y=2; y<x; y++){
            if(x%y===1){
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
    while(primes.length!=n);
    return primes[primes.length-1];
}
primeMover(n); 
console.log(primeMover(1000));
