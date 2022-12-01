/**
 * objet lineaire qui contient 3 membres nom age et mail avec des valeurs
 * On ajoute une méthode bonjour qui affiche une boite de dialogue lorsqu'on l'appel
 * et un méthode bonjour1 qui retourne sa valeur
 */
let jeanjacques = {
    nom : ['Jean-Jacques', 'Goddet'],
    age : 29,
    mail : 'jj.goddet@icloud.com',
    bonjour: function(){
        alert(`Bonjour, je suis ` + this.nom[0] + ` , j'ai ` + this.age + ` ans`);
    },
    helloWorld: function(){
        return(`Bonjour, je suis ` + this.nom[0] + ` , j'ai ` + this.age + ` ans`);
    }
};

//On appel la méthode bonjour de l'objet jeanjacques
jeanjacques.bonjour()

//On affiche le contenu de nom dans l'objet jeanjacques
document.getElementById('p1').innerHTML = 'Mon nom: ' + jeanjacques.nom;

//On affiche le contenu de age dans l'objet jeanjacques
document.getElementById('p2').innerHTML = 'Mon age avant correction: ' + jeanjacques.age;

//Correction de age dans l'objet jeanjacques
jeanjacques.age = 43;

//On ajoute un membre (une propriété) à l'objet jeanjacques avec une valeur
jeanjacques.taille = '1,70m';

//On affiche age corrigé
document.getElementById('p3').innerHTML = 'Mon age corrigé: ' + jeanjacques.age;

//On ajoute une méthode prez dans l'objet jean-jacques
/*à noté qu'ici on remarque que la méthode prez utilise la valeur de retour de la méthode helloWorld ;)*/
jeanjacques.prez = function(){
    alert(jeanjacques.helloWorld() + ` et je mesure `+ this.taille)
};

//on appel la méthode prez de l'objet jeanjacques
jeanjacques.prez();

//On change la valeur du premier index du tableau nom
jeanjacques['nom'][0] = 'Karine';

//On modifie l'age 
jeanjacques.age = '**',

//On modifie la taille
jeanjacques.taille = '1,60m'
//on appel de nouveau la méthode prez
jeanjacques.prez();


