function example1Answer() {
  let F = 50;
  let m = 10;
  let a = F / m;
          
  document.getElementById("example1").innerHTML = "Answer: The object accelerates at " + a + "m/s² in the direction of the applied force.";
  }
        
function example2Answer() {
  let m = 2;
  let a = 3;
  let F = m * a;
          
  document.getElementById("example2").innerHTML = "Answer: A net force of " + F + " Newtons is required.";
  }
  
function example3Answer() {
  let F = 20;
  let a = 5;
  let m = F / a;

  document.getElementById("example3").innerHTML = "Answer: The mass of the ball is " + m + " kg.";
}
  
function Question1Answer(){
  let F = 2;
  let m = 10;
  let a = m/F;
  
  document.getElementById("Question1").innerHTML = "Answer: The box accelerates at " + a + " m/s².";
}

function Question2Answer() {
  let F = 20;
  let a = 4;
  let m = F / a;
  
  document.getElementById("Question2").innerHTML = "Answer: The mass of the cart is " + m + " kg.";
}

function Question3Answer() {
  let m = 5;
  let a = 3;
  let F = m * a;
  
  document.getElementById("Question3").innerHTML = "Answer: The net force of the object is " + F + " N.";
}

function Question4Answer() {
  let F = 12;
  let m = 2;
  let a = F / m;
  
  document.getElementById("Question4").innerHTML = "The toy accelerates at " + a + " m/s².";
}

function Question5Answer() {
  let F = 90;
  let m = 15;
  let a = F / m;
  
  document.getElementById("Question5").innerHTML = "The object accelerates at " + a + " m/s².";
}