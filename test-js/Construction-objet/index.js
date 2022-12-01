
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
const jeanjacques = new Utilisateur(['Jean-Jacques', 'Goddet'], 29, 'jj.goddet@iclouc.com');


//création d'un objet karine avec ses propriété en utilisant le constructeur
const karine = new Utilisateur(['karine', 'Dautel'], 41, '');


//création d'un objet maxime avec ses propriété en utilisant le constructeur
const maxime = new Utilisateur(['maxime', 'Goddet'], 15, '');

//ajout d'une propriété taille à jeanjacques
jeanjacques.taille = 170;


//On à le droit de rever... l'age n'est pas bon, correction
jeanjacques.age = 43;

//une faute s'est glissée dans l'email, correction
jeanjacques.mail = 'jj.goddet@icloud.com';




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
const s1p4 = document.createElement('p');
s1p4.id = 's1p4';
const s1p5 = document.createElement('p');
s1p5.id = 's1p5';
const s1p6 = document.createElement('p');
s1p6.id = 's1p6';
const s1p7 = document.createElement('p');
s1p7.id = 's1p7';
const s1p8 = document.createElement('p');
s1p8.id = 's1p8';

//injection des paragraphes dans la section
section1.append(s1p1,s1p2,s1p3,s1p4,s1p5,s1p6,s1p7,s1p8);

//création du contenu a injecter dans les paragraphes
const contenuS1p1 = document.createTextNode(`Nom complet: ${jeanjacques['nom']}`);
const contenuS1p2 = document.createTextNode(`Prénom: ${jeanjacques['nom'][0]}`);
const contenuS1p3 = document.createTextNode(`Age: ${jeanjacques['age']}`);
const contenuS1p4 = document.createTextNode(`Mail: ${jeanjacques['mail']}`);
const contenuS1p5 = document.createTextNode(`Nom complet: ${jeanjacques['nom']}`);
const contenuS1p6 = document.createTextNode(`Nom complet: ${karine['nom']}`);
const contenuS1p7 = document.createTextNode(`Nom complet: ${maxime['nom']}`);
const contenuS1p8 = document.createTextNode(`Taille: ${jeanjacques['nom'] } ${jeanjacques['taille']} cm`);

//Injection du contenu dans les paragraphes
s1p1.appendChild(contenuS1p1);
s1p2.appendChild(contenuS1p2);
s1p3.appendChild(contenuS1p3);
s1p4.appendChild(contenuS1p4);
s1p5.appendChild(contenuS1p5);
s1p6.appendChild(contenuS1p6);
s1p7.appendChild(contenuS1p7);
s1p8.appendChild(contenuS1p8);


//Accès (aux valeurs des propriétés en les affichants avec la méthode bonjour() qui envoie une fenetre d'aletre sur la page web
jeanjacques.bonjour();