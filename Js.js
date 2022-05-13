let array = [];
let num = parseInt(prompt("How many items do you want"));
for(let i = 1; i <= num; i++){
array.push(prompt(`Enter your number ${i} item`))
}

let ul = document.querySelector("ul");

for(let a of array){
    ul.innerHTML += `<li>${a}</li>`
}
