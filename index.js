//Find the Smaller Angle
var Minimal_Angle = (h, m) => 
{
  if (h == 12) h = 0;
  if (m == 60) {
    m = 0;
    h += 1;
    if (h > 12) h = h - 12;
  }

  let hour_angle = 0.5 * (h * 60 + m);
  let minute_angle = 6 * m;

  let angle = Math.abs(hour_angle - minute_angle);

  angle = Math.min(360 - angle, angle);

  return angle;     
};
//Check whether the year is Leap year or not
var Check_Leap = (year) => 
{
 if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  } else {
    return "Non Leap Year";
  }
  };

//Perfect Number Check.
var Perfect_Check = (N) => 
{
   let num = 0;
  for (let i = 1; i <= N / 2; i++) {
    if (N % i === 0) {
      num = num + i;
    }
  }
  if (num === N && num !== 0) {
    return "YES";
  } else {
    return "NO";
  }   
  };
 //Reverse a Number.
 var Reverse_Number = (N) => 
{
 let num = 0;
  while (N) {
    let digit = N % 10;
    num = num * 10 + digit;
    N = Math.floor(N / 10);
  }
  return num;
};
//Substring Check.
var Substring_Check = (S1, S2) => 
{
  if(S1.includes(S2)){
     return 'YES';
   }
   else{
     return 'NO';
   }
};   