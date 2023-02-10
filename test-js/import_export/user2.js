import { user } from "./user1.js";

let p3 = document.getElementById('p3');

p3.textContent = 'Prénom depuis user2.js où on a importé user1.js: ' + user.prenom + ". On peut constater ici que de changer le prénom dans index.js en 'Maxime' a impacté le 1er fichier user1.js";