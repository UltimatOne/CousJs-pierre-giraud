//innerHTML et typof
let prenom = "Jean-Jacques";
let age = 43;
let age2 = '43';
document.getElementById('p1').innerHTML = prenom;
document.getElementById('p2').innerHTML = 'Type de prenom: ' + typeof prenom;
document.getElementById('p3').innerHTML = age;
document.getElementById('p4').innerHTML = 'Type de age: ' + typeof age;
document.getElementById('p5').innerHTML = "Type de age2 (test avec l'age entre guillemets '43' en declarant la valeur): " + typeof age2;

//Les opérateurs arithmétiques
let x = 2;
let y = 3;
let z = 4;
document.getElementById('s1d2p1').innerHTML = ("On a déclaré et initialisé x = 2, y = 3 et z = 4");

let a = x + 1; //a stocke 2 + 1 = 3
document.getElementById('s1d2p2').innerHTML = ('opérateur d\'addition: On déclare a = x + 1 ce qui donne 2 + 1 = ' + a + ', a = '+ a);

let b = x + y; //b stocke 2 + 3 = 5
document.getElementById('s1d2p3').innerHTML = ('opérateur d\'addition: On déclare b = x + y ce qui donne 2 + 3 = ' + b + ', b = ' + b);

let c = x - y; //c stocke 2 - 3 = -1
document.getElementById('s1d2p4').innerHTML = ('opérateur de soustraction: On déclare c = x - y ce qui donne 2 - 3 = ' + c + ', c = ' + c);

let d = x * y; //d stocke 2 * 3 = 6
document.getElementById('s1d2p5').innerHTML = (`opérateur de multiplication (prioritaire): On déclare d = x * y ce qui donne 

2 * 3 = ` + d + ', d = ' + d);

let e = x / y; //e stocke 2 / 3 = 0.6666666666666667~
document.getElementById('s1d2p6').innerHTML = (`opérateur de division (prioritaire): On déclare e = x / y ce qui donne 

2 / 3 = ` + e + ', e = '+ e);

let f = 5 % 3; //f stocke le reste de la division euclidienne de 5 par 3
document.getElementById('s1d2p7').innerHTML = (`opérateur modulo: On déclare: f = x % y ce qui donne 

2 % 3 = 0 reste ` + f + ', f = reste de la division euclidienne '+ f);

let g = x ** 3; //g stocke 2 puissance 3 = 2 * 2 * 2 = 8
document.getElementById('s1d2p8').innerHTML = (`opérateur exponnentielle: On déclare f = x ** y ce qui donne 

2^3 = 2 * 2 * 2 = ` + g + ', g = ' + g);

//Les opérateurs d'affection
let x1 = 2;
let y1 = 10;
document.getElementById('s1d3p1').innerHTML = ("On a déclaré et initialisé x1 = 2 et y1 = 10.");


/*on ajoute 3 à la valeur stockée précédemment par x1 (2) puis on affecte le résultat à x1. x1 stocke désormais 2 + 3 =5*/
x1 += 3;
document.getElementById('s1d3p2').innerHTML = (`opérateur d'affection d'addition += : On ajoute 3 à x1 ce qui donne 

x1 += 3 (2 += 3); x1 stocke maintenant 2 + 3 = ` + x1) + '.';

/*on multiplie la valeur de y1 (10) par celle de x1 (2) puis on affecte le résultat ày1. y1 stocke désormais 10* 2 = 10*/
y1 *= x1;

document.getElementById('s1d3p3').innerHTML = (`opérateur d'affection de multiplication *= : On multiplie y1 par x1 ce qui donne 

y1 *= x1 ( 10 *= 5 ); y1 stocke maintenant 10 * ` + x1 + ' = ' + y1) + '.';

document.getElementById('s1d3p4').innerHTML = (`On peut faire de même avec les opérateurs d'affection de:`);

document.getElementById('s1d3p5').innerHTML = ('soustraction: -=');

document.getElementById('s1d3p6').innerHTML = ('division: /=');

document.getElementById('s1d3p7').innerHTML = ('modulo: %=');

document.getElementById('s1d3p8').innerHTML = ('et exponnentielle: **=');

//la concaténation
let x2 = 42 + 1; //le signe "+" est ici un opérateur d'addition
let y2 = "Bonjour, ";
let z2 = x2 + ' ans.'; //le signe "+" ici est un oprerateur de concaténation pour appeler nos éléments

document.getElementById('s2d2p1').innerHTML = (`On a déclaré et initialisé x2 = 42 + 1 (ici le signe + est un opérateur d'addition), 
y2 = "Bonjour, " 
et z2 = x2 + " ans." (pour z2 le signe + est un opérateur de concaténation).`);

document.getElementById('s2d2p2').innerHTML = (`On demande de concaténer y2 avec un bout de phrase et z2 
(rappel, nous avons précédemment concaténé la valeur de z2 (z2 = x2 + " ans.") 

ce qui donne: 

` + y2 + 'je m\'appel JJ et j\'ai ' + z2 + ' (y2 + "je m\'appel JJ et j\'ai " + z2)');

//Les littéraux de gabarits
document.getElementById("s2d3p1").innerHTML = (`C'est une autre manière de concaténer les valeurs. ici nous utiliserons les accents 
grave (" \` " qu'on appel backtick) pour ouvrir et fermer la commande et 
\${} pour appeler nos éléments.`)

document.getElementById("s2d3p2").innerHTML = `Exemple: ${y2} je m\'appel JJ et j\'ai ${z2} ( \`\${y2} je m'appel JJ et j'ai \${z2}\` ).`;

//structures de contrôle, les conditions et les opérateurs de contrôle
//les conditions
document.getElementById("s3d2u1l1").innerHTML = `La condition "if" (si);`;

document.getElementById("s3d2u1l2").innerHTML = `La condition "if... else" (si... sinon);`;

document.getElementById("s3d2u1l3").innerHTML = `La condition "if... else if... else" (si);`;

//les opérateurs de comparaison
document.getElementById("s3d3u1l1").innerHTML = `== qui permet de tester l\'égalité sur les valeurs;`;

document.getElementById("s3d3u1l2").innerHTML = `=== qui permet de tester l\'égalité en terme de valeurs et de types;`;

document.getElementById("s3d3u1l3").innerHTML = `!= qui permet la différence en valeurs;`;

document.getElementById("s3d3u1l4").innerHTML = `<> qui permet de tester la différence en valeurs;`;

document.getElementById("s3d3u1l5").innerHTML = `!== qui permet de tester la différence en valeurs ou en types;`;

document.getElementById("s3d3u1l6").innerHTML = `< qui permet de vérifier si une valeur est strictement inférieur à une autre;`;

document.getElementById("s3d3u1l7").innerHTML = `> qui permet de vérifier si une valeur est strictement supérieur à une autre;`;

document.getElementById("s3d3u1l8").innerHTML = `<= qui permet de vérifier si une valeur est inférieur ou égale à une autre;`;

document.getElementById("s3d3u1l9").innerHTML = `>= qui permet de vérifier si une valeur est supérieur ou égale à une autre;`;

//utiliser les opérateurs de comparaison

let x3 = 4; //on stocke le chiffre 4 dans x

document.getElementById("s3d4p1").innerHTML = `let x3 = 4; on stocke le chiffre 4 dans x3`;

document.getElementById("s3d4p2").innerHTML = `Les comparaisons sont effectuées avant l'affectation. Le JavaScript va donc commencer par comparer et renvoyer true ou false, nous allons stocker ce résultat dans nos variables test`;

let test1 = x3 == 4;
document.getElementById("s3d4p3").innerHTML = `let test1 = x3 == 4; Valeur dans x3 égale à 4 (en valeur) ? : ${test1}`;

let test2 = x3 === 4;
document.getElementById("s3d4p4").innerHTML = `let test2 = x3 === 4; Valeur dans x3 égale à 4 (valeur & type) ? : ${test2}`;

let test3 = x3 == '4';
document.getElementById("s3d4p5").innerHTML = `let test3 = x3 == '4'; Valeur dans x3 égale à "4" (en valeur) ? : ${test3}`;

let test4 = x3 === '4';
document.getElementById("s3d4p6").innerHTML = `let test4 = x3 === '4'; Valeur dans x3 égale à "4" (valeur & type) ? : ${test4}`;

let test5 = x3 != '4';
document.getElementById("s3d4p7").innerHTML = `let test5 = x3 != '4'; Valeur dans x3 différente de "4" (en valeur) ? : ${test5}`;

let test6 = x3 !== '4';
document.getElementById("s3d4p8").innerHTML = `let test6 = x3 !== '4'; Valeur dans x3 différente de "4" (valeur & type) ? : ${test6}`;

let test7 = x3 > 4;
document.getElementById("s3d4p9").innerHTML = `let test7 = x3 > 4; Valeur dans x3 strictement supérieur à 4 ? : ${test7}`;

let test8 = x3 >= 4;
document.getElementById("s3d4p10").innerHTML = `let test8 = x3 >= 4; Valeur dans x3 supérieur ou égale à 4 ? : ${test8}`;

let test9 = x3 < 4;
document.getElementById("s3d4p11").innerHTML = `let test9 = x3 < 4; Valeur dans x3 strictement inférieur à 4 ? : ${test9}`;

//La condition if
let x4 = 4;
let y4 = 0;
document.getElementById("s3d5p1").innerHTML = `On déclare et on initialise let x4 = 4; et let y4 = 0;`;

if (x4 > 1) {document.getElementById("s3d5p2").innerHTML = `if ( x4 > 1 ) {
    alert ('x4 contient une valeur strictement supérieur à 1');
}; 

Dans cet exemple une boite de dialogue s'ouvre pour diffuser le message puisque la condition est true (vrai), x4 = 4 donc supérieur à 1.
`};

x4 = 0;
if (x4 == y4) {document.getElementById("s3d5p3").innerHTML = `

if ( x4 == y4 ){
    alert ('x4 et y4 contiennent la même valeur');
};
Dans cet exemple la boite de dialogue ne s'ouvre pas pour diffuser le message puisque la condition est false (faux) x4 = 4 et y4 = 0 donc ils ne sont pas égaux.
`}
x4 = 4;

y4 = 1;
if (y4) {document.getElementById("s3d5p4").innerHTML = `

if (y4) { 
    alert ('La valeur de y4 est évaluée a true');
};
Dans cet exemple la boite de dialogue ne s'ouvre pas pour diffuser le message parce que y4 = 0.
A savoir que même si on compare qu'une seule valeur en Js la comparaison se fera quand même et renverra true,
sauf pour certaines qui seront false: le booléen, le 0, les chaines de caractères vide, les valeur null, indefined et NaN.`
};
y4 = 0;

document.getElementById("s3d5p5").innerHTML = `On peut inversé la valeur logique d'un test en nous servant de false, ce qui est préférable pour certains cas... ex "if ( false == false ) on reprend ce qu'on a fait avec if précédemmment et on ajoute false pour inverser le résultat de la comparaison.`;

x4 = 0;
if ((x4 > 1) == false) {document.getElementById("s3d5p6").innerHTML = `if ( ( x4 > 1 ) == false) {
    alert ('x4 contient une valeur inférieur ou égale à 1');
};
Dans cet exemple la boite de dialogue ne s'ouvre pas pour diffuser le message, la condition ( x4 > 1 ) est true et elle n'est pas == à false donc false.
`};
x4 = 4;

if ( (x4 == y4) == false ) {document.getElementById("s3d5p7").innerHTML = `
if ( ( x4 == y4 ) == false) {
    alert ('x4 et y4 ne contiennent pas la même valeur');
};
Dans cet exemple la boite de dialogue s'ouvre pour diffuser le message, la condition ( x4 == y4 ) est false et elle est == à false donc true.
`};

if ((y4) == false) {document.getElementById("s3d5p8").innerHTML = `
if ( ( y4 ) == false ) {
    alert ('La valeur de y4 est évaluée false');
};
Dans cet exemple la boite de dialogue s'ouvre pour diffuser le message, la condition ( y4 ) y4 = 0 est false et elle est == à false donc true.`
};

//if...else
let x5 = 0.5;
document.getElementById("s3d5p9").innerHTML = `On déclare et initilise let x5 = 0.5;`;

if (x5 > 1) {document.getElementById("s3d5p10").innerHTML = `if (x5 > 1) {
    alert ('x5 contient une valeur strictement supérieur à 1')
} else { 
    alert ('x5 contient une valeur inférieure ou égale à 1') };`
}
else {document.getElementById("s3d5p10").innerHTML = `if (x5 > 1){
    alert ('x5 contient une valeur strictement supérieur à 1')
} else {
    alert ('x5 contient une valeur inférieure ou égale à 1')
};
Dans cet exemple x5 = 0.5, c'est donc la deuxieme boite de dialogue qui s'ouvre.`};

//if... else if... else
document.getElementById("s3d5p11").innerHTML = `Reprenons x5 = 0.5;`;

if (x5 > 1) {document.getElementById("s3d5p12").innerHTML = `if (x5 > 1) {
    alert ('x5 contient une valeur strictement supérieur à 1');
} else if (x5 == 1) {
    alert ('x5 contient une valeur égale à 1');
} else {
    alert ('x5 contient une valeur strictement inférieure à 1');
};`
}
else if (x5 == 1) {document.getElementById("s3d5p12").innerHTML = `if (x5 > 1) {
    alert ('x5 contient une valeur strictement supérieur à 1');
} else if (x5 == 1) {
    alert ('x5 contient une valeur égale à 1');
} else {
    alert ('x5 contient une valeur strictement inférieure à 1');
};`
}
else {document.getElementById("s3d5p12").innerHTML = `if ( x5 > 1 ) {
    alert ('x5 contient une valeur strictement supérieur à 1');
} else if (x5 == 1) {
    alert ('x5 contient une valeur égale à 1');
} else {
    alert ('x5 contient une valeur strictement inférieure à 1');
};
Dans cet exemple c'est la troisieme boite de dialogue qui s'ouvre, x5 = 0.5 donc strictement inférieur à 1.`
};

//opérateurs logiques
//présentation
document.getElementById("s4d2p1").innerHTML = `AND (ET) syntaxe && ; lorsqu'il est utilisé avec des valeurs booléennes, renvoie true 
si toutes les comparaisons sont évaluées à true, et renvoie false dans 
le cas contraire.`;

document.getElementById("s4d2p2").innerHTML = `OR (OU) syntaxe || ; lorsqu'il est utilisé avec des valeurs booléennes, renvoie true 
si au moins une des comparaisons est évaluée à true, 
et renvoie false dans le cas contraire.`;

document.getElementById("s4d2p3").innerHTML = `NO (NON) syntaxe ! ; Renvoie false si une comparaison est évaluée à true, 
et renvoie true dans le cas contraire.`;

document.getElementById("s4d2p4").innerHTML = `Quelques exemples:`;

let x6 = 5;
let y6 = -20; 

document.getElementById("s4d2p5").innerHTML = `On déclare let x6 = 5; et let y6 = -20;`;

//AND
if ( x6 >= 0 && x6 <= 10) { document.getElementById('s4d2p6').innerHTML = `AND :

if ( x6 >= 0 && x6 <= 10) {
    document.getElementById("p1").innerHTML = 
    'x6 contient une valeur comprise entre 0 et 10.'
};`; document.getElementById('s4d2p7').innerHTML = `Résultat : 
x6 contient une valeur comprise entre 0 et 10.`; };

//OR
if ( y6 < -10 || y6 > 10 ) { document.getElementById('s4d2p8').innerHTML = `
OR : 

if ( y6 < -10 || y6 > 10 ) {
    document.getElementById('p2').innerHTML = 
    'y6 contient une valeur plus petite que -10 ou plus grande que 10.'
};`;  document.getElementById('s4d2p9').innerHTML = `Resultat : 
y6 contient une valeur plus petite que -10 ou plus grande que 10.`; };

//NO
if ( ! ( x6 <= 2) ) { document.getElementById('s4d2p10').innerHTML = `
NO : 

if ( ! ( x6 <= 2 ) ) {
    document.getElementById('p3').innerHTML = 
    'x6 contient une valeur strictement supérieur à 2.'
};`; document.getElementById('s4d2p11').innerHTML = `Résultat : 
x6 contient une valeur strictement supérieur à 2.`; 

};

//creer des conditions puissantes avec plusieurs opérateurs
let x7 = 15;
let y7 = -20;
let z7 = 0;
document.getElementById('s4d4p1').innerHTML = `Nous déclarons les valeurs let x7 = 15; , let y7 = -20; et let z7 = 0; . `;

if ( x7 <= 25 - 15 && x7 >= 0 || y7 < 0){
    document.getElementById('s4d4p2').innerHTML = `if ( x7 <= 25 - 15 && x7 >= 0 || y7 < 0 ) { 
        document.getElementById( 'p1' ).innerHTML =
         'Cette phrase s'affiche si x7 contient une valeur comprise entre 0 et 10 
         OU si y7 contient une valeur strictement négative ( ou si ces deux conditions sont réunies ).' 
        };`}; 
    document.getElementById( 's4d4p3' ).innerHTML = `Resultat : 
    "Cette phrase s'affiche si x7 contient une valeur comprise entre 0 et 10 
    OU si y7 contient une valeur strictement négative ( ou si ces deux conditions sont réunies )." 
    
    JavaScript traite d'abord la condition ET donc x7 <= 25 - 15 && x7 >= 0 ( false && true = false ) 
    ensuite la condition OU x7 <= 25 - 15 && x7 >= 0 ( false ) || y7 < 0 ( true ) = true. 
    Notre super condition renvoie true et diffuse donc la phrase.`;

if ( x7 <= 25 - 15 && ( x7 >= 0 || y7 < 0)) { document.getElementById('s4d4p4').innerHTML = `
if ( x7 <= 25 -15 && ( x7 >= 0 || y7 < 0 ) ) {
     document.getElementById( 'p2' ).innerHTML =
      'Cette phrase s'affiche si x7 contient une valeur comprise entre 0 et 10 
      OU si y7 contient une valeur strictement négative ( ou si ces deux conditions sont réunies ).'
    };`;
};
document.getElementById('s4d4p4').innerHTML = `
if ( x7 <= 25 -15 && ( x7 >= 0 || y7 < 0) ) {
     document.getElementById( 'p2' ).innerHTML =
      'Cette phrase s'affiche si x7 contient une valeur comprise entre 0 et 10 
      OU si y7 contient une valeur strictement négative ( ou si ces deux conditions sont réunies ).'
    };`;
document.getElementById( 's4d4p5' ).innerHTML = `Resultat : 
Cette phrase ne s'affiche pas. elle ne peut pas s'afficher parce que le fait d'avoir mis la condition ( x7 >= 0 || y7 < 0 ) entre parenthèses 
change l'ordre de priorité. x7 >= 0 ( true ) OU y7 < 0 ( true ) retourne donc true, maintenant que JavaScript a traité la condition OU, 
il passe à la condition ET, x7 <= 25 - 15 ( false) && ( ( x7 >= 0 || y7 < 0) (true) ) donc renvoie false. 
Notre super condition renvoie donc false et ne diffuse pas la phrase.`;

if ( !z7 == true) { document.getElementById('s4d4p6').innerHTML = `if ( !z7 == true) {
    document.getElementById('p3').innerHTML =
     'Cette phrase s'affiche si z7 contient une valeur évaluée à false.'
    };`}; 
document.getElementById('s4d4p7').innerHTML = `Resultat : 
"Cette phrase s'affiche si z7 contient une valeur évaluée à false.". 

JavaScript ici à pour condition d'afficher la phrase si l'inverse de z7 est égale en valeur a true, pour rappel z7 = 0 et zero est considéré false en valeur, 
du coup l'inverse de z7 est true : true == true, la phrase est diffusée.`;

//ternaires
let x8 = 15;
let y8 = -20;
document.getElementById('s4d5p1').innerHTML = `Nous déclarons let x8 = 15; et 
let y8 = -20; :`;

document.getElementById('s4d5p2').innerHTML = `document.getElementById('p1').innerHTML = x8 >= 10 ? 'x8 est supérieur ou égale à 10' : 'x8 est strictement inférieur à 10';`;
document.getElementById('s4d5p3').innerHTML = 'Resultat : ' + ( x8 >= 10 ? `x8 est supérieur ou égale à 10` : 'x8 est strictement inférieur à 10' );

document.getElementById('s4d5p4').innerHTML = `document.getElementById('p2').innerHTML = y8 >= 10 ? 'y8 est supérieur ou égale à 10' : 'y8 est strictement inférieur à 10';`;
document.getElementById('s4d5p5').innerHTML = 'Resultat : ' + ( y8 >= 10 ? `y8 est supérieur ou égale à 10` : 'y8 est strictement inférieur à 10' );

document.getElementById('s4d5p6').innerHTML = `nous constatons ici que nous venons d'écrire :
 if ( x8 >= 10 ) { document.getElementById('p1').innerHTML = 'x8 est supérieur ou égale à 10'; }
 else { document.getElementById('p1').innerHTML = 'x8 est strictement inférieur à 10'; }; de façon beaucoup plus condensée et c'est la même chose pour y8`;

//switch
let x9 = 15;
document.getElementById('s4d6p3').innerHTML = 'Nous déclarons let x9 = 15;';

document.getElementById('s4d6p4').innerHTML = `switch ( x9 ) {
    case 2:
        document.getElementById('p1').innerHTML = 'x9 stocke la valeur 2.';
        break;
    case 5:
        document.getElementById('p1').innerHTML = 'x9 stocke la valeur 5.';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x9 stocke la valeur 10.';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x9 stocke la valeur 15.';
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x9 stocke la valeur 20.';
        break;
    default :
        document.getElementById('p1').innerHTML = 'x9 ne stocke ni 2, ni 5, ni 10, ni 15 ni 20.';
        break;
};`;

switch ( x9 ) {
    case 2:
        document.getElementById('s4d6p5').innerHTML = 'x9 stocke la valeur 2.';
        break;
    case 5:
        document.getElementById('s4d6p5').innerHTML = 'x9 stocke la valeur 5.';
        break;
    case 10:
        document.getElementById('s4d6p5').innerHTML = 'x9 stocke la valeur 10.';
        break;
    case 15:
        document.getElementById('s4d6p5').innerHTML = 'Résultat : x9 stocke la valeur 15.';
        break;
    case 20:
        document.getElementById('s4d6p5').innerHTML = 'x9 stocke la valeur 20.';
        break;
    default :
        document.getElementById('s4d6p5').innerHTML = 'x9 ne stocke ni 2, ni 5, ni 10, ni 15 ni 20.';
        break;
};

//Les boucles
let a10 = 10, b10 = 10, c10 = 20, d10 = 20;

document.getElementById('s4d7p1').innerHTML = 'On déclare et initialise plusieur variables mais sur une seule ligne cette fois ;) let a10 = 10, b10 = 10, c10 = 20, d10 = 20;'

document.getElementById('s4d7p2').innerHTML =`document.getElementById('p1').innerHTML = 'a10 stocke la valeur ' + a10++;`;
document.getElementById('s4d7p3').innerHTML = 'Résultat :  <br><br>a stocke la valeur ' + a10++ + `.  <br>On demande ici d'afficher la valeur de a10 et ensuite de l'incrémentée.`;

document.getElementById('s4d7p4').innerHTML =`document.getElementById('p2').innerHTML = 'b10 stocke la valeur ' + ++b10;`;
document.getElementById('s4d7p5').innerHTML = `Résultat :  <br><br>b10 stocke la valeur ` + ++b10 + `.  <br>On demande d'abord d'incrémenter b10 et d'afficher ensuite la valeur de b10 incrémentée.`;

document.getElementById('s4d7p6').innerHTML =`document.getElementById('p3').innerHTML = 'c10 stocke la valeur ' + c10--;`;
document.getElementById('s4d7p7').innerHTML =`Résultat :  <br><br>c10 stocke la valeur ` + c10-- + `.  <br>On demande ici d'afficher la valeur de c10 et ensuite de la décrémentée.`;

document.getElementById('s4d7p8').innerHTML =`document.getElementById('p4').innerHTML = 'd10 stocke la valeur ' + --d10;`;
document.getElementById('s4d7p9').innerHTML =`Résultat : <br><br>d10 stocke la valeur ` + --d10 + `. <br>On demande d'abord de décrémenter d10 et d'afficher ensuite la valeur de d10 décrémentée.`;

document.getElementById('s4d7p10').innerHTML = `On affiche ensuite de nouveau le contenu de nos variables : <br><br>document.getElementById('p5').innerHTML = 'a10 = ' + a10 + ' b10 = ' + b10 + ' c10 = ' + c10 + ' d10 = ' + d10;`;
document.getElementById('s4d7p11').innerHTML = 'a10 = ' + a10 + ', b10 = ' + b10 + ', c10 = ' + c10 + ', d10 = ' + d10 + ';';

//while (tant que)
let x11 = 0;
document.getElementById('s4d8p1').innerHTML =`On déclare et initialise let x11 = 0;`

document.getElementById('s4d8p2').innerHTML = `


on ecris une boucle while:

//tant que
while ( x11 < 10 ){
    document.getElementById('s4d8p3').innerHTML +=
    'x11 stocke la valeur ' + x11 + ' lors du passage n°' + 
    (x11 + 1) + ' dans la boucle';
    x11++;<br>}; `;

while ( x11 <= 10 ){
    document.getElementById('s4d8p3').innerHTML += 'x11 stocke la valeur ' + x11 + ' lors du passage n°'+ (x11 + 1) + ' dans la boucle<br>';
   
    x11++;
};
//parcequ'innerHtml est considéré comme une pratique sale en developpement je passe en manipulation de DOM...

//selectionne la balise avec l'Id s4d9
let s4d9 = document.querySelector('#s4d9');

let S4d9Titre = document.createElement('h1');
S4d9Titre.id = ('s4d9Titre')
let contenuS4d9Titre = document.createTextNode('do... while (faire... tant que) ');
S4d9Titre.appendChild(contenuS4d9Titre);


let s4d9sp1 = document.createElement('span');
s4d9sp1.id = 's4d9sp1';

let contenuS4d9sp1 = document.createTextNode(`On déclare et initialise:

let a12 = 0, y12 = 10, b12= 10;`);
s4d9sp1.appendChild(contenuS4d9sp1);

let s4d9p1 = document.createElement('p');
s4d9p1.id = 's4d9p1';
s4d9p1.style.textAlign = 'justify'
let s4d9p2 = document.createElement('p');
s4d9p2.id = 's4d9p2';
let s4d9p3 = document.createElement('p');
s4d9p3.id = 's4d9p3';
s4d9p3.style.textAlign = 'justify';
let s4d9p4 = document.createElement('p');
s4d9p4.id = 's4d9p4';
let s4d9p5 = document.createElement('p');
s4d9p5.id = 's4d9p5';
let s4d9p6 = document.createElement('p');
s4d9p6.id = 's4d9p6';
s4d9p6.style.textAlign = 'justify'

let contenuS4d9p1 = document.createTextNode(`
Illustrons la différence entre while et do... while:

//faire... tant que
do{
    document.getElementById('p2').innerHTML +=
    'a12 stocke la valeur ' + a12 + ' lors du passage n°' + 
    (a12 + 1) + ' dans la boucle<br>';
    a12++;
}
while ( a12 < 10 );

Comparons la boucle do... while avec la boucle while que nous avons 
créé précédemment avec la variable x11.

La première boucle do... while est identique à la première boucle while;

Même valeur d'initialisation puis incrémentation dans la boucle et 
finalement même condition de sortie.

Comme les variables x11 et a12 stockent bien des valeurs inférieur à 10, 
la condition de sortie est valable au départ et nos deux boucles vont 
s'executer exactement de la même façon. Dans cette situation, on 
préférera utiliser une boucle while qui est plus simple à écrire.`);
s4d9p1.appendChild(contenuS4d9p1);

let contenuS4d9p3 = document.createTextNode(`La différence entre les boucles while et do... while ne va être visible que 
lorsque la condition de sortie n'est pas valide dès le début. On peut le 
voir avec notre deuxieme couple  de boucles while et do... while:

while ( y12 < 10 ) {
    document.getElementById('p3').innerHTML +=
    'y12 stocke la valeur ' + y12 + ' lors du passage n°' + 
    (y12 + 1) + ' dans la boucle<br>';
    y12++;
};

On peut constater, ici, que notre condition ne s'affiche pas. La boucle while évalue la 
condition de sortie en premier. La valeur de sortie étant 10 la condition sort directement 
du fait que nous avons déclaré et initialisé y12 = 10.


do{
    document.getElementById('p3').innerHTML +=
    'b12 stocke la valeur ' + b12 + ' lors du passage n°' + 
    (b12 + 1) + ' dans la boucle<br>';
    b12++;
}
while ( b12 < 10 );

On peut constater, ici, que notre condition s'affiche au moins une fois. Même si 
la condition de sortie n'est pas valide la boucle do... while s'execute au moins une fois.
Dans le cas d'une boucle do... while la condition de sortie n'est évaluée qu'en fin de 
boucle.
Le code de la boucle sera donc exécuter au moins une fois.`);
s4d9p3.appendChild(contenuS4d9p3);

let contenuS4d9p7 = document.createTextNode(`Il est intérressant d'utiliser la boucle do... while plutôt qu'une boucle while lorsque 
notre script a besoin que le code dans notre boucle s'exécute au moins une fois.`);
s4d9p6.appendChild(contenuS4d9p7);
s4d9.append(S4d9Titre, s4d9sp1, s4d9p1, s4d9p2, s4d9p3, s4d9p4, s4d9p5, s4d9p6);
//do... while ((do)faire... while(tant que)
let x12 = 0, a12 = 0, y12 = 10, b12= 10;

do{
    document.getElementById('s4d9p2').innerHTML +=
    'a12 stocke la valeur ' + a12 + ' lors du passage n°' + 
    (a12 + 1) + ' dans la boucle<br>';
    a12++;
}
while ( a12 < 10 );



while ( y12 <10){
    document.getElementById('s4d9p4').innerHTML +=
    'y12 stocke la valeur ' + y12 + ' lors du passage n°' + 
    (y12 + 1) + ' dans la boucle<br>';
    y12++;
};

do{
    document.getElementById('s4d9p5').innerHTML +=
    'b12 stocke la valeur ' + b12 + ' lors du passage n°' + 
    (b12 + 1) + ' dans la boucle<br>';
    b12++;
}
while ( b12 < 10 );

//for
//selectionne la balise avec l'Id s4d10
let s4d10 = document.querySelector('#s4d10');

let S4d10Titre = document.createElement('h1');
S4d10Titre.id = ('s4d10Titre')
let contenuS4d10Titre = document.createTextNode('La boucle JavaScript for ( pour )');
S4d10Titre.appendChild(contenuS4d10Titre);


let s4d10sp1 = document.createElement('span');
s4d10sp1.id = 's4d10sp1';

let contenuS4d10sp1 = document.createTextNode(`La boucle for ( "pour" en français) est structurellement différente des boucles while et 
do... while puisqu'on va cette fois-ci initialiser notre variable à l'intérieur de la boucle.

La boucle for utilise une syntaxe relativement condensée et est relativement puissante, 
ce qui en fait la condition la plus utilisée en JavaScript.

Prenons un exemple:`);
s4d10sp1.appendChild(contenuS4d10sp1);

let s4d10p1 = document.createElement('p');
s4d10p1.id = 's4d10p1';
s4d10p1.style.textAlign = 'justify';
let s4d10p2 = document.createElement('p');
s4d10p2.id = 's4d10p2';
let s4d10p3 = document.createElement('p');
s4d10p3.id = 's4d10p3';
s4d10p3.style.textAlign = 'justify';
let s4d10p4 = document.createElement('p');
s4d10p4.style.textAlign = 'justify';
s4d10p4.id = 's4d10p4';

let contenuS4d10p1 = document.createTextNode(`for  ( let i = 0; i < 10; i++ ){
    document.getElementById('p1').innerHTML += 
    'i stocke la valeur ' + i + ' lors du passage n°' +( i + 1 ) + ' dans la boucle<br>';
};`);
s4d10p1.appendChild(contenuS4d10p1);

let contenuS4d10p3 = document.createTextNode(`Une boucle for contient 3 "phases" à l'intérieur du couple de parenthèses:

une phase d'initialisation,
une phase de test ( condition de sortie ),
et une phase d'itération ( généralement une incrémentation ).

Chaque phase est séparée par un point-virgule.

Ici on commence par initialiser une variable i en lui passant la valeur 0.
Notre boucle va s'exécuter en boucle tant que la valeur i est strictement inférieur à 10 
et à chaque nouveau passage dans la boucle va ajouter 1 à la valeur précédente de la 
variable i.`);
s4d10p3.appendChild(contenuS4d10p3);

let contenuS4d10p4 = document.createTextNode(`Comme on peut le constater, l'incrémentation se fait à la fin de chaque passage dans la 
boucle ( on le voit car lors du premier passage la valeur de i est toujours 0).

Il faut noter qu'on utilise généralement la lettre "i" (pour "iterator") dans les boucles 
en général et particulièrement au sein des boucles for pour les reconnaitre plus 
rapidement dans un script.
Ce n'est pas obligatoire et il est possible d'utiliser n'importe quel nom de variable.`);
s4d10p4.appendChild(contenuS4d10p4);

s4d10.append(S4d10Titre, s4d10sp1, s4d10p1, s4d10p2, s4d10p3, s4d10p4);

for  ( let i = 0; i < 10; i++ ){
    document.getElementById('s4d10p2').innerHTML += 
    'i1 stocke la valeur ' + i + ' lors du passage n°' +( i + 1 ) + ' dans la boucle<br>';
};