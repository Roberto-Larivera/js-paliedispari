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
    let control = false
    while((i < lenghtParola) || (control == true)){
        let carattereA = arrayParola[i]
        let carattereB = arrayReverseParola[i]
        
        if(carattereA != carattereB){
            control = true
            console.log('Non è una parola Palindroma')
            //break;

        }
        else{
            console.log('È una parola Palindroma')
            control = false
        }
        console.log('control',control);
       i++;
    }
    
}

const inputUtente = 'cioooo';

separareParola(inputUtente);
