// let com = document.querySelector('.btn')
// let comin = document.querySelector('.ms')
// com.addEventListener('click',function(){
//    comin.innerHTML='hello '
//    // alert('hello') <====== alert message
// })


let com = document.querySelector('.btn')


let myWindow;
function wind() {
  myWindow = window.open("", "", "width=200,height=100");
}


let nameTag = document.querySelector('.naparu')
nameTag.innerText='pavan technology'
nameTag.style.backgroundColor='yellow'
nameTag.style.color='red'
nameTag.style.width='300px'
nameTag.style.height='100px'

console.log(document.title)
document.title='pavan technologies'




let bton = document.querySelector('.pres')
let comep = document.querySelector('.come-pre')
let bton1 = document.querySelector('.pres1')
let comep1 = document.querySelector('.come-pre')



bton.addEventListener('click', function(){
  comep.innerHTML=Date()
})

bton1.addEventListener('click', function(){
   comep1.innerHTML='this second button '
 })




 let printDown = document.querySelector('#kup')
 

 printDown.addEventListener('keyup',function(){

   let show = printDown.value
   let coming =document.querySelector('.kup1')
     coming.innerHTML = show


 })

//--------------multible table---------------------//

 let entNUm = document.querySelector('.numb')
 entNUm.addEventListener('keyup',function(){
  let val = entNUm.value
  document.querySelector('.multiple').innerText = val
  calculate()
 })
 
 let rangem =document.querySelector('.rangem')
 rangem.addEventListener('input',function(){
  let val2 = rangem.value
  document.querySelector('.multiply').innerText = val2
  calculate()
 })

 let calculate = ()=>{
  let num1 = document.querySelector('.multiple').innerText 
  let num2 = document.querySelector('.multiply').innerText 
  let mathResult = num1 * num2
  document.querySelector('.ans').innerText= mathResult
 
 }
