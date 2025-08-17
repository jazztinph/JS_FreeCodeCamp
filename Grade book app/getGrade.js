function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  let display = "";
  
  if(score === 100){
    display = "A++";
  }else if (score >= 90){
    display = "A";
  }else if(score >= 80){
    display = "B";
  }else if(score >= 70){
    display = "C";
  }else if(score >= 60){
    display = "D";
  }else{
    display = "F";
  }
  return display;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
