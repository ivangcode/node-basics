// We're creating enviroment variables.
// All the enviroment variables must be written in upper case.
let nombre = process.env.NOMBRE ||'Sin nombre' ;
let web = process.env.WEB ||'no tengo web';
/* URLS, TOKENS APIS, EMAILS, ADDRESS
Everything must made in upper case.*/

console.log('Hola ' + nombre );
console.log('Mi web es ' + web);     