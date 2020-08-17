function result(){
var q1a1 = document.getElementById("q1-o1");
var q1a2 = document.getElementById("q1-o2");
var q1a3 = document.getElementById("q1-o3");
var q1a4 = document.getElementById("q1-o4");
var score = 0;
if(q1a1.checked == true){
 alert("Welldone Your Q1 answer is right.");
 score++;
}
else{
    alert("Your Q1 answer is wrong.");
}
var q2a1 = document.getElementById("q2-o1");
var q2a2 = document.getElementById("q2-o2");
var q2a3 = document.getElementById("q2-o3");
var q2a4 = document.getElementById("q2-o4");
if(q2a4.checked == true){
    alert("Welldone Your Q2 answer is right.");
    score++;
   }
   else{
       alert("Your Q2 answer is wrong.");
   }
   var q3a1 = document.getElementById("q3-o1");
   var q3a2 = document.getElementById("q3-o2");
   var q3a3 = document.getElementById("q3-o3");
   var q3a4 = document.getElementById("q3-o4");
   if(q3a3.checked == true){
       alert("Welldone Your Q3 answer is right.");
       score++;
      }
      else{
          alert("Your Q3 answer is wrong.");
      }
      var q4a1 = document.getElementById("q4-o1");
      var q4a2 = document.getElementById("q4-o2");
      var q4a3 = document.getElementById("q4-o3");
      var q4a4 = document.getElementById("q4-o4");
      if(q4a2.checked == true){
          alert("Welldone Your Q4 answer is right.");
          score++;
         }
         else{
             alert("Your Q4 answer is wrong.");
         }
        alert("Your Score is "+score);         
}