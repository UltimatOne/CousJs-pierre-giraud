//Objet JavaScript
let utilisateur = {
  prenom: "Jean-Jacques",
  Nom: "Goddet",
  adresse: {
    rue: "rue Roscoff",
    complement: "11 résidence l'Armorique",
    cp: 59450,
    ville: "Sin Le Noble",
  },
  mails: ["jj.goddet@icloud.com", "jj.goddet@free.fr"],
};

//Conversion en chaine JSON
let json = JSON.stringify(utilisateur);

document.getElementById("resultat").innerHTML =
  "Type de la variable : " +
  "<br>" +
  typeof json +
  "<br>" +
  "<br>Contenu de la variable : " +
  "<br>" +
  json;
