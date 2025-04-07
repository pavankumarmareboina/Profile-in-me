// let com = document.querySelector('.btn')
// let comin = document.querySelector('.ms')
// com.addEventListener('click',function(){
//    comin.innerHTML='hello '
//    // alert('hello') <====== alert message
// })

let com = document.querySelector(".btn");

let myWindow;
function wind() {
  myWindow = window.open("", "", "width=200,height=100");
}

let nameTag = document.querySelector(".naparu");
nameTag.innerText = "pavan technology";
nameTag.style.backgroundColor = "yellow";
nameTag.style.color = "red";
nameTag.style.width = "300px";
nameTag.style.height = "100px";

console.log(document.title);
document.title = "pavan technologies";

let bton = document.querySelector(".pres");
let comep = document.querySelector(".come-pre");
let bton1 = document.querySelector(".pres1");
let comep1 = document.querySelector(".come-pre");

bton.addEventListener("click", function () {
  comep.innerHTML = Date();
});

bton1.addEventListener("click", function () {
  comep1.innerHTML = "this second button ";
});

let printDown = document.querySelector("#kup");

printDown.addEventListener("keyup", function () {
  let show = printDown.value;
  let coming = document.querySelector(".kup1");
  coming.innerHTML = show;
});

//--------------multible table---------------------//

let entNUm = document.querySelector(".numb");
entNUm.addEventListener("keyup", function () {
  let val = entNUm.value;
  document.querySelector(".multiple").innerText = val;
  calculate();
});

let rangem = document.querySelector(".rangem");
rangem.addEventListener("input", function () {
  let val2 = rangem.value;
  document.querySelector(".multiply").innerText = val2;
  calculate();
});

let calculate = () => {
  let num1 = document.querySelector(".multiple").innerText;
  let num2 = document.querySelector(".multiply").innerText;
  let mathResult = num1 * num2;
  document.querySelector(".ans").innerText = mathResult;
};

//  --------------stop watch------------------ //
let count = 0;
let seconds = 0;
let minutes = 0;
let Milliseconds = 0;
let intervall = 0;
let timeRunning = false;

let stopWatch = () => {
  count++;
  minutes = Math.floor(count / 100 / 60);
  seconds = Math.floor(count / 100 - minutes * 60);
  Milliseconds = Math.floor(count - seconds * 100 - minutes * 6000);

  document.querySelector(".mint").innerText = zeroAdd(minutes);
  document.querySelector(".scnd").innerText = zeroAdd(seconds);
  document.querySelector(".m-scnd").innerText = zeroAdd(Milliseconds);
};
////////////   start button   ////////////
let btn = document.querySelector(".btn-start");
btn.addEventListener("click", () => {
  if (!timeRunning) {
    intervall = setInterval(stopWatch, 10);
    timeRunning = true;
  }
});
///////////////  stop button ///////////

let stopButton = document.querySelector(".btn-stop");
stopButton.addEventListener("click", () => {
  clearInterval(intervall);
});
//////////////    reset button ///////////////
let sButton = document.querySelector(".btn-resest");
sButton.addEventListener("click", () => {
  clearInterval(intervall);

count = 0;
seconds = 0;
minutes = 0;
Milliseconds = 0;
stopp = 0;
timeRunning = false;

document.querySelector(".mint").innerText = "00";
document.querySelector(".scnd").innerText = "00";
document.querySelector(".m-scnd").innerText = "00";

});

let zeroAdd = (time) => {
  if (time <= 9) {
    return "0" + time;
  } else {
    return time;
  }
};
