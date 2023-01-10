console.log('int ok');

function randomComputer (){
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;

}

const numberComputer = randomComputer();
console.log('numberComputer',numberComputer);