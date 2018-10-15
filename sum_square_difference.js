const sumOfsquare=function(numberOfTerms){
  let result=numberOfTerms*(numberOfTerms+1);
  return result*(2*numberOfTerms+1)/6;
}

const squareOfSum=function(numberOfTerms){
  let result=numberOfTerms*(1+numberOfTerms)/2;
  return result*result;
}

const difference=function(numberOfTerms){
  return squareOfSum(numberOfTerms)-sumOfsquare(numberOfTerms);
}

console.log(difference(+process.argv[2]));
