
let count=0 
console.log(count)
let  Greeting =document.getElementById("greeting");

// console.log(greeting+myname)
function increment(){
   count++;
document.getElementById("count el").textContent=count



}

function save(){
    console.log(count)
    Greeting.textContent+=count+" - "
    count=0  
    document.getElementById("count el").textContent=count
}

