//On ouvre la connection avec l'API
//on utilise la fausse API de dummy pour l'exemple
fetch(`https://dummyjson.com/products`)
//On traite la promesse renvoyée par fetch pour la mettre au format JSON
.then(response => response.json())
//On utilise JSON.stringify pour transformer l'objet JSON en chaine JSON et on l'affiche
.then(response => alert(JSON.stringify(response)))
//on traite les cas d'erreur avec catch
.catch(error => alert("Erreur : " + error));

let promise = fetch(`https://dummyjson.com/products`, {
    method: "GET", //ou POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
    },
    body: undefined, //ou string, FormData, Blob, BufferSource, ou URLSearchParams
    referrer: "about:client", //ou "" (pas de réferanr) ou une url de l'origine
    referrerPolicy: "no-referrer-when-downgrade", //ou no-referrer, origin, same-origin...
    mode: "cors", //ou same-origin, no-cors
    credentials: "same-origin", //ou omit, include
    cache: "default", //ou no-store, reload, no-cache, force-cache, ou only-if-cached
    redirect: "follow", //ou manual ou error
    integrity: "", //ou un hash comme "sha256-abcdef1234567890"
    keepalive: false, //ou true pour que la requête survive à la page
    signal: undefined //ou AbortController pour annuler la requête
});