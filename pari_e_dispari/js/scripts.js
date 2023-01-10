console.log('int ok');

/*

    - chiedere all'utente se sceglie pari o dispari                 //ok            --- possibilità di un input radio
    - far scegliere all'utente un numero tra 1 e 5                  //ok
    - generiamo un numero random da 1 a 5 pewr il computer          //ok
    - sommiamo i due numeri
    - verifichiamo se sono pari o dispari
    -dichiariasmo il vincitore

*/

function randomComputer (){
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;

}

function controlNum (min, max, input){                                                  // funzione controllo input numero utente + possibilità di modificare i due numeri min max
    while((input < min) || (input > max) || isNaN(input)){                                 
        //console.log('Numero non valido!');
        alert('Numero non valido!');
        input = parseInt(prompt(`Numero non valido! Scegli un numero tra ${min} e ${max}`));
        //console.log('input',input, typeof input);
        //console.log(isNaN(input));
    }
}

function controlVal (input){                                                            // funzione controllo valore di gioco tramite quello scelto dall'utente
    while ((input != 'pari') && (input != 'Pari') && (input != 'dispari') && (input != 'Dispari')){
        //console.log('Valore non valido!');
        alert('Valore non valido!');
        input = prompt('Scelta non valida! Scegli tra pari e dispari');
        //console.log('input',input, typeof input);
    }
}


let numberUser = parseInt(prompt('Scegli un numero tra 1 e 5'));                          // richiesta numero tra 1 e 5
//console.log('numberUser',numberUser, typeof numberUser);
//console.log(isNaN(numberUser));

controlNum(1,5,numberUser);                                                             // funzione controllo input numero utente + possibilità di modificare i due numeri min max


let choiceUser = prompt('Scegli tra pari e dispari');                                    // richiesta se pari o dispari scritto
//console.log('choiceUser',choiceUser, typeof choiceUser);

controlVal(choiceUser);                                                                 // funzione controllo valore di gioco tramite quello scelto dall'utente


const numberComputer = randomComputer();                                                 // numero random per il pc tra 1 e 5
//console.log('numberComputer',numberComputer);




const numberSum = numberComputer + numberUser;
//console.log('numberSum',numberSum, typeof numberSum);

if ( numberSum % 2 == 0){
    console.log('Pari');
    if(choiceUser == 'Pari' || choiceUser == 'pari'){
        alert('Hai vinto tu!')
    }
    else{
        alert('Hai perso!')
    }
}
else{
    console.log('Dispari');
    if(choiceUser == 'Dispari' || choiceUser == 'dispari'){
        alert('Hai vinto tu!')
    }
    else{
        alert('Hai perso!')
    }
}
