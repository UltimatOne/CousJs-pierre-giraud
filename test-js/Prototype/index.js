function Ligne(longueur){
    this.longueur = longueur;
}
Ligne.prototype.taille = function(){
    document.getElementById('s1p1').innerHTML = `Longueur: ${this.longueur}`;
}

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largeur = largeur
};
Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function(){
    document.getElementById('s1p2').innerHTML = `Aire: ${this.longueur * this.largeur}`;
};

function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
};
Parallelepipede.prototype = Object.create(Rectangle.prototype)
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.surface = function(){
    document.getElementById('s1p3').innerHTML = `Surface: ${this.longueur * this.largeur * this.hauteur}`;
}



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

let geo = new Parallelepipede(10, 6, 5);
geo.surface();
geo.aire();
geo.taille();

