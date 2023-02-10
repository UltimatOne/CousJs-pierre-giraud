import { disBonjour } from "./disBonjour.js";
import { user } from "./user1.js"

disBonjour('Jean-Jacques');

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p1.textContent = 'Prénom et nom depuis index.js (importé depuis user1.js): ' + user.prenom + ' ' + user.nom;

user.prenom = "Maxime";

p2.textContent = 'Prénom depuis index.js (après changement dans index.js) : ' + user.prenom;