const subBtn = document.getElementById('subtract');
const addBtn = document.getElementById('addition');
const divBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const output = document.getElementById('output');


subBtn.addEventListener('click', subtract)
addBtn.addEventListener('click', add)
divBtn.addEventListener('click', div)
multiplyBtn.addEventListener('click', multiply)



function subtract() {

output.innerText = parseInt(inputOne.value) - parseInt(inputTwo.value)


}





function add() {
    output.innerText = parseInt(inputOne.value) + parseInt(inputTwo.value);
}





function div(){
    output.innerText = parseInt(inputOne.value) / parseInt(inputTwo.value)
}




function multiply() {
    output.innerText = parseInt(inputOne.value) * parseInt(inputTwo.value)
}