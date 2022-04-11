// function Timer(){
//     let text = document.getElementById("date")
// var date= new Date();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();
 
//  if(s<10 || h<10 || m<10){
//      s = "0" + date.getSeconds();
//  }

// text.innerHTML = `${h} : ${m} : ${s}`
// }
// setInterval(Timer,1000)
// let btn = document.getElementById("okey")
// btn.addEventListener("click", Hesabla)

// function Hesabla(e){
//     let deyer = document.getElementById("input").value;
//     let a = Number(deyer);
//     let deyer1 = document.getElementById("input1").value;
//     let b = Number(deyer1);
//     let deyer2 = document.getElementById("input2").value;
//     let c = Number(deyer2);
//     let z = ((((((a*c)/100)*b)/12)+a)/b);
//     document.getElementById("span").innerHTML = z+"AZN"
//     e.preventDefault()
// }
let count = 0;
function decrease(){

    count--;
    document.getElementById("counter").innerHTML = count ;
    document.getElementById("counter").style.color = "red"
    
}
function reset(){
    count= 0;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.color = "white"   
}
function increase(){
    count++;
    document.getElementById("counter").innerHTML = count ;
    document.getElementById("counter").style.color = "green"
}
