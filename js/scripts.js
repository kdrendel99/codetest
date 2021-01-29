
function check(){
  var a=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  if (q1=="javascript") {a++}
  if (q2=="javascript") {a++}
  if (q3=="javascript") {a++}
  if (q4=="javascript") {a++}
  if (q5=="javascript") {a++}
  if (q6=="javascript") {a++}

  var b=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  if (q1=="ruby") {b++}
  if (q2=="ruby") {b++}
  if (q3=="ruby") {b++}
  if (q4=="ruby") {b++}
  if (q5=="ruby") {b++}
  if (q6=="ruby") {b++}

  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  if (q1=="python") {c++}
  if (q2=="python") {c++}
  if (q3=="python") {c++}
  if (q4=="python") {c++}
  if (q5=="python") {c++}
  if (q6=="python") {c++}



  document.write("Javascript Score = "+ a + "Ruby Score = "+ b + "Python Score = "+ c);
  
};
