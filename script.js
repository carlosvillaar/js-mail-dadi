// Creare un prompt che chiede all'utente la sua mail e controlla se e' presente all'interno di un ipotetico server e successivamente stampa il messaggio sull'esito del controllo
const mailGroup = [];

let message;

let mail = prompt(`Inserisci la tua email`)

mailGroup.push(mail)
console.log(mailGroup);


if (mail.length >= 5){
  message = `Autenticazione completata. Bentornato User!`
  console.log(message)
} else if (mail.length <= 5){ 
  message = `Autenticazione non andata a buon fine, riprova!`
  console.log(message);
}

