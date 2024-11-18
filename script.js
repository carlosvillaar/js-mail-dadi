// Creare un prompt che chiede all'utente la sua mail e controlla se e' presente all'interno di un ipotetico server e successivamente stampa il messaggio sull'esito del controllo

//array ipotetico server 

const mailGroup = [];

let message;

let mail = prompt(`Inserisci la tua email`)

//Ogni volta che l'utente inserisce la mail viene aggiunta all'array
mailGroup.push(mail)

//verifica se l'utente stia inserendo effettivamente una mail (solitamente sono piu lunghe di 5 lettere), se la inserisce il codice risponde positivamente e quindi si procede al gioco, al contrario dice di riprovare a fare il login per giocare.

if (mail.length >= 5){
  console.log(mailGroup);
  message = `Autenticazione completata. Bentornato User!`
  console.log(message)
  // Dobbiamo generare due gruppi di numeri randomici, uno per l'utente e uno per il computer. 

// Alla base di partenza i numeri sono 0.
    let numberUser = 0;

    let numberComputer = 0;

// Randomizziamo i numeri delle variabili.
    numberUser = Math.floor((Math.random() * 6) + 1 );
    console.log(`Il tuo numero è ` + numberUser + `.`);
    numberComputer = Math.floor((Math.random() * 6) + 1 );
    console.log(`Il numero del computer è ` + numberComputer + `.`);

// Stabiliamo il vincitore, ossia chi ha fatto il numero piu' alto con il dado.
    if (numberUser > numberComputer){
      message = `Che fortuna, Hai vinto!`;
      console.log(message);
    } else if (numberUser < numberComputer){
      message = `Che sfortuna, Hai Perso! Ritenta, sarai piu fortunato`;
      console.log(message);
    } else if (numberUser = numberComputer){
      message = `Pareggio! Ritenta, sarai piu fortunato`;
      console.log(message);
}
// Se il login non e' andato a buon fine riprova dato che non puoi giocare.

} else if (mail.length <= 5){ 
  message = `Autenticazione non andata a buon fine, riprova!`;
  console.log(message);
}


