
/**Utilisateur est une fonction constructeur
 * @param {nom} n proriété nom
 * @param {age} a proriété age
 * @param {mail} m proriété mail
 */


function Utilisateur(n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;
    //fonction qui dit bonjour en affichant le nom et l'age
    this.bonjour = function(){
        alert(`Bonjour, je suis ${this.nom[0]}, j'ai ${this.age} ans (on a le droit de rêver!)`)
    }
}
//création d'un objet jeanjacques avec ses propriété en utilisant le constructeur
const jeanjacques = new Utilisateur(['Jean-Jacques', 'Goddet'], 29, 'jj.goddet@iclouc.com')

//Accès (aux valeurs des propriétés en les affichants avec la méthode bonjour() qui envoie une fenetre d'aletre sur la page web
jeanjacques.bonjour()

/*Affichage des valeurs des propriétés de l'objet créé dans des paragraphes du fichier HTML en manipulation de DOM*/

//création d'une constante ciblant la section avec l'id s1
const section1 = document.querySelector('#s1');

//création des paragraphes a injecter dans la section
const s1p1 = document.createElement('p');
s1p1.id = 's1p1';
const s1p2 = document.createElement('p');
s1p2.id = 's1p2';
const s1p3 = document.createElement('p');
s1p3.id = 's1p3';

//injection des paragraphes dans la section
section1.append(s1p1,s1p2,s1p3);

//crétion du contenu a injecter dans les paragraphes
const contenuS1p1 = document.createTextNode(`Nom complet: ${jeanjacques['nom']}`);
const contenuS1p2 = document.createTextNode(`Prénom: ${jeanjacques['nom'][0]}`);
const contenuS1p3 = document.createTextNode(`Age: ${jeanjacques['age']}`);

//Injection du contenu dans les paragraphes
s1p1.appendChild(contenuS1p1);
s1p2.appendChild(contenuS1p2);
s1p3.appendChild(contenuS1p3);