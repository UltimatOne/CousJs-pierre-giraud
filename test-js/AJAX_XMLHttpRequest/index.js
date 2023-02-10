//Création d'un objet XMLHttpRequest
let xhr = new XMLHttpRequest();

//Initialisation de la requête avec open()
xhr.open("get", `https://dummyjson.com/products`);//on utilise la fausse API de dummy pour l'exemple

//On demande une reponse au format JSON
xhr.responseType = "json";

//envoie de la requête
xhr.send();

//Dès que la reponse est reçue...
xhr.onload = function(){
    //si le statut HTTP n'est pas 200...
    if (xhr.status != 200){
        //...on affiche le statut et le message corrspondant
        alert("Erreur " + xhr.status + " : " + xhr.statusText);
    } else {
        //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
        alert(xhr.response.length + " octets téléchargés\n" + JSON.stringify(xhr.response));
    }
};

//Si la requête n'a pas pu aboutir...
xhr.onerror = function(){
    alert("La requête a échoué");
};

//Pendant le téléchargement...
xhr.onprogress = function(event){
    //lengthComputable = booléen; true si la requête a une longueur calculable
    if (event.lengthComputable){
        //loaded = contient le nombre d'octets téléchargés
        //total = contient le nombre total d'octets à télécharger
        alert(event.loaded + " octets reçus sur un total de " + event.total);
    }
};