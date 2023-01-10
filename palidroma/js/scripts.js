console.log('int ok');
/*

Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1- chiedere la parola all'utente
2- dividere la parola lettera per lettera aggiungendola in un array
3- creare un array uguale ma invertita
4- mettere a confronto lettera per lettera.
5- dal risultato comunicare all'utente se è una parola palidroma o oppure no.

*/



/*                  SOLUZIONE 1 ANALIZZARE LETTERA PER LETTERA E USO DI BREAK -------- NON OTTIMALE 


function separareParola (parola){

    const arrayParola = parola.split ("");
    console.log('Prima Array',arrayParola, typeof arrayParola, arrayParola.lenght);
    const lenghtParola = arrayParola.length;
    console.log(lenghtParola);

    let arrayReverseParola = parola.split ("");
    arrayReverseParola = arrayReverseParola.reverse();
    console.log('Seconda Array',arrayReverseParola, typeof arrayReverseParola, arrayReverseParola.lenght);
    const lenghtReverseParola = arrayReverseParola.length;
    console.log(lenghtReverseParola);

    
    
    let i = 0;
    while((i < lenghtParola)){
        let carattereA = arrayParola[i]
        let carattereB = arrayReverseParola[i]
        
        if(carattereA != carattereB){
            return 'Non è una parola Palindroma';
            break;

        }
        else{
            return 'È una parola Palindroma';
        }
       i++;
    }
    
}

const inputUtente = prompt('Inserisci la parola da analizzare');

separareParola(inputUtente);
const message = separareParola(inputUtente);
console.log(message);
alert(message);


*/



//                          SOLUZIONE 2 ANALIZZA LE DUE PAROLE INTERE DIRETTAMENTE CON UN IF -------- LA PIÙ OTTIMALE

function separareParola (parola){

    const arrayParola = parola.split ("");
    console.log('Prima Array',arrayParola, typeof arrayParola);

    let arrayReverseParola = parola.split ("");
    arrayReverseParola = arrayReverseParola.reverse();
    console.log('Seconda Array',arrayReverseParola, typeof arrayReverseParola);

    const parolaInt = arrayParola.join("");
    console.log('parolaInt',parolaInt, typeof parolaInt);
    const parolaReverseInt = arrayReverseParola.join("");
    console.log('parolaReverseInt',parolaReverseInt, typeof parolaReverseInt);
    if(parolaInt == parolaReverseInt){
        return 'È una parola Palindroma';
    }
    else{
        return 'Non è una parola Palindroma';
    }

}

const inputUtente = prompt('Inserisci la parola da analizzare');

//separareParola(inputUtente);
const message = separareParola(inputUtente);
console.log(message);
alert(message);