const largestPallindrome=function(noOfTerms){
  let string="";
  for(let index=0; index<noOfTerms; index++){
    string+=9;
  }
  notIncludeUpto=+string.substr(1,noOfTerms-1);
  number=+string;
  console.log(number);
  console.log(notIncludeUpto);
  let answer=0;
  while(number>notIncludeUpto){
    for(let index=0; index<number-notIncludeUpto;index++){
      let result=""+number*(number-index);
      result=result.split("");
      let pallindrome=result.slice();
      pallindrome.reverse();
      result=result.toString();
      pallindrome=pallindrome.toString();
      if(pallindrome==result && answer<number*(number-index)){
        answer=number*(number-index);
      }
    }
    number--;
  }
  return answer
}

console.log(largestPallindrome(3));
