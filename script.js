'use strict';

function ex(n) {
    console.log(`
     🧸
    ex ${n}`);
}
/*
Simulazione Test Javascript Docente: Riccardo Degni
Nota 1: attenersi alle tracce, e leggere attentamente i dettagli di ogni requisito Nota 2: utilizzare unicamente i costrutti visti a lezione
Nota 3: è possibile consultare ogni fonte di documentazione online
*/

/*
Level: EASY (1pt per esercizio)
Esercizio 1: Letterali oggetti
Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni. Stampare le informazioni di tutte le persone del nuovo array.
*/
ex(1)
{

    const people = [
        {
            firstname: "Mario",
            lastname: "Rossi",
            age: 29
        },
        {
            firstname: "Luigi",
            lastname: "Verdi",
            age: 32
        },
        {
            firstname: "Peach",
            lastname: "Pink",
            age: 22
        },
        {
            firstname: "Anna",
            lastname: "Bianchi",
            age: 41
        },
        {
            firstname: "Marty",
            lastname: "McFly",
            age: 6
        },
        {
            firstname: "Fox",
            lastname: "Moulder",
            age: 91
        }
    ];

    let oldPeople = []

    const oldPersonCard = function (persons, old) {
        persons.forEach((el) => {
            if (el.age > old) {
                oldPeople.push(el);
            }
        })
    }

    oldPersonCard(people, 30)
    console.log(oldPeople);

}
/*
Esercizio 2: Map
Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero dell'array originale è moltiplicato per il fattore di moltiplicazione dato.
Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per stampare in output i 3 array prodotti.
*/
ex(2)
{

    const number = [5, 7, 9, 1, 3]
    const num = 3

    let newNumber = []

    const multiplyArray = function (arr, n) {
        newNumber = arr.map(x => x * n)
    }

    multiplyArray(number, num)
    console.log(newNumber);

}

/*
Esercizio 3: Set
Scrivi una funzione chiamata unisciSet che prenda in input due set composti da 5 numeri ciascuno, e restituisca un nuovo set contenente tutti gli elementi del primo che NON sono presenti nel secondo.
Stampare in output il set risultante.
*/
ex(3)
{

    const setA = new Set([4, 6, 9, 17, 37, 66, 27, 94])
    const setB = new Set([1, 67, 7, 9, 17, 27, 43, 27, 94])

    const unionSet = function (firstSet, secondSet) {
        const union = new Set(firstSet);
        for (const elem of secondSet) {
            union.add(elem)
        }
        return union
    }

    console.log(unionSet(setA, setB));

}
/*
Esercizio 4: Funzioni
Crea una funzione chiamata salutaPersona che prende in ingresso un oggetto.
Se l'oggetto passato come parametro NON ha una proprietà chiamata "rate", la funzione stampa il messaggio "nessun rate". In caso contrario, se il valore della proprietà rate è compreso tra 0 e 10, stampa "rate basso", se è compreso tra 11 e 50 stampa "rate medio", se è compreso tra 51 e 100 stampa "rate alto".
es
salutaPersona({nome: mario rossi}) -> nessun rate salutaPersona(rate: 95) -> rate alto
*/
ex(4)
{

    const user = {
        firstname: 'John',
        secondname: 'Wayne',
        age: 35,
        birthdate: '1988-02-21',
        rate: 14,
        hobby: 'actor'
    }

    const evaluateRate = function (params) {
        for (let key in params) {
            if (params.rate == undefined) {
                console.log('No rate');
            }
            else if (params.rate >= 0 && params.rate <= 10) {
                console.log('Low rate')
            }
            else if (params.rate >= 11 && params.rate <= 50) {
                console.log('Average rate');
            }
            else if (params.rate >= 51 && params.rate <= 100) {
                console.log('High rate');
            }
            else {
                console.log('The rate is out of range');
            }

        }
    }
    evaluateRate(user)

}
/*
Level: MEDIUM (2pt per esercizio)
Esercizio 1: Date
Scrivi una funzione chiamata calcolaGiorni che prenda in input due oggetti Date rappresentanti due date diverse e restituisca il numero di giorni trascorsi tra le due date.
Chiamare la funzione per stampare in output il risultato.
La funzione deve prendere in considerazione questa caratteristica: se la seconda data è un giorno cronologicamente pari o successivo alla prima data, si procede con la normale esecuzione sopra elencata.
Se la seconda data è un giorno cronologicamente precedente alla prima data, viene prodotto manualmente un errore che blocca l'applicazione.
*/
ex(5)
{

    const firstDate = { currentday: '2023-06-09' }
    const secodDate = { meeting: '2023-08-09' }

    const calculateDays = function (date1, date2) {
        const firstDateMill = new Date(date1.currentday).getTime()
        const secodDateMill = new Date(date2.meeting).getTime()
        if (secodDateMill >= firstDateMill) {
            const evenNumbers = secodDateMill - firstDateMill
            console.log(evenNumbers / (1000 * 60 * 60 * 24));
        }
        else {
            throw new Error('The date of the meeting is earlier than the current')
        }
    }
    calculateDays(firstDate, secodDate)

}
/*
Esercizio 2: Letterali oggetti
Scrivi una funzione confrontaOggetti che prenda in input due oggetti con caratteristiche (proprietà e valori) scelti a piacere e restituisca true se hanno le stesse proprietà e se tutti i valori delle loro proprietà corrispondenti sono uguali, altrimenti false.
es
o1 = {nome: mario, cognome = rossi} o2 = {nome: mario, cognome = rossi} confrontaOggetti(o1, o2) da true
o1 = {nome: mario, cognome = rossi} o2 = {x: 10, y = 20} confrontaOggetti(o1, o2) da false
*/
ex(6)
{

    const firstUser = {
        firstname: 'Anna',
        lastname: 'Bianchi',
        age: 60
    }

    const secondUser = {
        firstname: 'Anna',
        lastname: 'Bianchi',
        age: 60
    }

    const compareObjects = function (user1, user2) {
        let compare = 0
        for (let key1 in user1) {
            for (let key2 in user2) {
                if (key1 == key2 && user1[key1] === user2[key2]) {
                    compare++;
                }
            }
        }
        compare === 3
            ? console.log('The two objects are the same')
            : console.log('The two objects are not the same');
    }
    compareObjects(firstUser, secondUser)

}
/*
Esercizio 3: Funzioni come parametri e metodo map
Scrivi una funzione chiamata mappaNumeri, che prende come primo parametro un array di numeri, e come secondo parametro una funzione che internamente a mappaNumeri sarà utilizzata come parametro per il metodo map, chiamato per creare un nuovo array con il criterio utilizzato dalla funzione passata. Questo array verrà stampato internamente a mappaNumeri.
Chiamare la funzione mappaNumeri 2 volte, sia per stampare il doppio dei numeri dell'array passato come primo parametro, sia per stampare i suoi numeri aumentati di 10.
es
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 40 60 mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 30 40
dove ?fn? saranno le apposite funzioni passate come parametro create da voi
*/
ex(7)
{

    const numbers = [2, 5, 8, 2, 18, 94, 102]

    const double = function (number) {
        return number * 2
    }
    const increasetByTen = function (number) {
        return number + 10
    }

    const mapNumbers = function (arr, fun) {
        console.log(arr.map(fun));
    }
    mapNumbers(numbers, double)
    mapNumbers(numbers, increasetByTen)

}
/*
Level: HARD (4pt per esercizio)
Esercizio 1
Dato il seguente JSON: [
{"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"}, {"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"}, {"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"}
]
convertirlo in una controparte Javascript da utilizzare nel programma.
Creare una funzione chiamata dammiPersonaggio, che prende in ingresso come primo parametro un array di personaggi come quello prodotto dal JSON.
Come secondo parametro, prende una stringa.
Se la stringa è "cicla", la funzione stampa le informazioni di tutti i personaggi.
Se la stringa è "giovane", la funzione stampa le informazioni del personaggio più giovane.
Se la stringa è "migliore", la funzione stampa le informazioni del personaggio con la media rate più alta.
Se la stringa è "peggiore", la funzione stampa le informazioni del personaggio con la media rate più bassa.
Se il secondo parametro non è una stringa, generare un errore manualmente.
Chiamare la funzione dammiPersonaggio con tutti i test case, impedendo che l'applicazione si blocchi se non viene passata una stringa (hint: usare un try/catch).
Quando si stampano le informazioni di un personaggio, non bisogna stampare la sua data di nascita, ma la sua età (es 30 anni).
Solo per i rate tenere in considerazione eventuali "parità" e stampare tutti i personaggi con il rate migliore o peggiore in caso di concomitanze.
*/
ex(8)
{

    const people = `[
    { 
    "name": "aladddin", 
    "rate": [5, 6, 7], 
    "birthdate": "1990-10-10" 
    }, 
    { 
    "name": "jasmine", 
    "rate": [8, 9, 9], 
    "birthdate": "1994-09-09" 
    }, 
    { "name": "abu", 
    "rate": [2, 2, 3], 
    "birthdate": "1993-10-20" 
    }
    ]`

    const str = 'cicla'

    const getPeople = JSON.parse(people);

    const givePersonage = function (personage, operate) {
        if (typeof operate == 'string') {
            console.log('ciao');
            if (operate == 'cicla') {
                console.log(personage);
            }
            if (operate == 'giovane') {
                console.log('ciao');
            }
            if (operate == 'migliore') {
                console.log('ciao1');
            }
            if (operate == 'peggiore') {
                console.log('ciao2');
            }
        }
        else {
            try {
                checkOperate
            }
            catch (err) {
                console.log(err.message);
            }
        }
    }
    givePersonage(getPeople, str)

}