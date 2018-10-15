const nthPrime=function(numberOfTerm){
  let count=4;
  let number=7;
  let primeNumber=number;
  while(count<numberOfTerm){
    number+=2;
    for(let index=3; index<=Math.ceil(Math.sqrt(number)); index+=2){
      if(number%index==0){
        index=number;
      }else if(number%index!=0 && index>=Math.floor(Math.sqrt(number))){
        primeNumber=number;
        count++;
      }
    }
  }
  return number;
}

const largestPrimeFactor=function(number){
  let term=4;
  let factor=0;
  while(number>=nthPrime(term)){
    if(number%nthPrime(term)==0){
      factor=nthPrime(term);
      number=number/factor;
    }
    term++;
  }
  return factor;
}

console.log(largestPrimeFactor(+process.argv[2]));

