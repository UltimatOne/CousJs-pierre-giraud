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

/**
 * class qui sert à creer des lignes
 */
class Ligne {
    //constructeur des propriétés de Ligne
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    };
    //fonction qui affiche les lignes créés dans le paragraphe 1 de la page web
    taille(){
        document.getElementById('s1p1').innerHTML +=
        `Longueur de ${this.nom} : ${this.longueur} <br>`
    };
};

let geo1 = new Ligne('geo1', 10);
let geo2 = new Ligne('geo2', 5);

class Rectangle extends Ligne {
    constructor(nom, longueur, largeur){
    super(nom, longueur); //'super' apelle le constructeur parent (Ligne)
    this.largeur = largeur;
    };

    aire(){
        document.getElementById('s1p2').innerHTML += `Aire de ${this.nom} : ${this.longueur * this.largeur} <br>`
    }
}

let geo3 = new Rectangle('geo3', 7 , 5)
geo1.taille();
geo2.taille();
geo3.aire();
geo3.taille();



