//On ouvre la connection avec l'API
//on utilise la fausse API de dummy pour l'exemple
fetch(`https://dummyjson.com/products`)
//On traite la promesse renvoyée par fetch pour la mettre au format JSON
.then(response => response.json())
//On utilise JSON.stringify pour transformer l'objet JSON en chaine JSON et on l'affiche
.then(response => alert(JSON.stringify(response)))
//on traite les cas d'erreur avec catch
.catch(error => alert("Erreur : " + error));

