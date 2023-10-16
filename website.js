const circle = document.getElementById("circle"); //create a variables to call your html elements
const upBtn = document.getElementById("UpBtn");
const downBtn = document.getElementById("DownBtn");

let rotateValue = circle.style.transform; //having our variable call to the circle in CSS
let rotateSum;

//to make it turn clockwise
upBtn.onclick = function up (){
    rotateSum = rotateValue + "rotate(-90deg)" 
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

} // copy & paste function above for the down button and rotate to 90 to turn counter-clockwise
downBtn.onclick = function down (){
    rotateSum = rotateValue + "rotate(90deg)" 
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

}
