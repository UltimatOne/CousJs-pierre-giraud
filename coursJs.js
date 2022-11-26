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


//Les fonctions
//div 1 de la section 5
const s5d1 = document.querySelector('#s5d1');
const titreS5d1 = document.createElement(`h1`);
titreS5d1.id = 'titreS5d1';
const contenuTitreS5d1 = document.createTextNode('Les fonctions en JavaScript');
titreS5d1.appendChild(contenuTitreS5d1);
s5d1.appendChild(titreS5d1);

//div 2 de la section 5
const s5d2 = document.querySelector('#s5d2');

const s5d2SousTitre1 = document.createElement('h2');
s5d2SousTitre1.id = 's5d2SousTitre1';
const contenuS5d2SousTitre1 = document.createTextNode(`Présentation des fonctions en JavaScript

Math.random()`);
s5d2SousTitre1.appendChild(contenuS5d2SousTitre1);

const s5d2p1 = document.createElement('p');
const contenuS5d2p1 = document.createTextNode(`Math.random() génére un nombre décimal entre 0 et 1 qu'on place ici au sein de notre 
paragraphe p id='p1'

document.getElementById('p1').innerHTML = Math.random();

Résultat:
`)
s5d2p1.appendChild(contenuS5d2p1);

const s5d2p2 = document.createElement('p');
s5d2p2.id = 's5d2p2';

const s5d2SousTitre2 = document.createElement('h2');
s5d2SousTitre2.id = 's5d2SousTitre2';
const contenuS5d2SousTitre2 = document.createTextNode('string.replace()');
s5d2SousTitre2.appendChild(contenuS5d2SousTitre2);

const s5d2p3 = document.createElement('p');
s5d2p3.id = 's5d2p3';
const contenuS5d2p3 = document.createTextNode(`on déclare et initialise une variable:

let prez = 'Bonjour, je suis Jean-Jacques.';

string.replace() cherche une expression dans une chaine de caractères et la remplace 
par une autre. Ici, on va chercher "Jean-Jacques" dans let prez et on remplace par 
"Karine" avant d'afficher le résultat dans p id='p2'

let prez2 = prez.replace('Jean-Jacques', 'Karine');

document.getElementById('p2').innerHTML = prez2;

Résultat:`);
s5d2p3.appendChild(contenuS5d2p3);

const s5d2p4 = document.createElement('p');
s5d2p4.id = 's5d2p4';

const s5d2p5 = document.createElement('p');
s5d2p5.id = 's5d2p5';
const contenuS5d2p5 = document.createTextNode(`L’intérêt principal des fonction prédéfinies est de nous permettre de réaliser des 
opérations complexes de manière très simple : en les appelant, tout simplement. 
En effet, vous devez bien comprendre que derrière ces noms de fonctions se cachent 
des codes parfois longs et complexes qui vont être exécutés lorsqu’on appelle 
la fonction et qui vont permettre de réaliser une opération précise 
(générer un nombre aléatoire, etc.).

En plus de cela, le code d’une fonction est réutilisable : cela veut dire qu’on va 
pouvoir appeler une même fonction autant de fois qu’on le souhaite afin qu’elle 
accomplisse plusieurs fois la même opération.

Pour exécuter le code caché derrière la fonction, il suffit de l’appeler ou de 
« l’invoquer ». Pour faire cela, on n’a qu’à écrire le nom de la fonction suivi 
d’un couple de parenthèses et éventuellement préciser des arguments entre 
les parenthèses.

Les arguments d’une fonction sont des valeurs qu’on va passer à notre fonction afin 
qu’elle fonctionne normalement ou pour préciser le comportement qu’elle doit 
adopter. Certaines fonctions ne vont pas nécessiter d’arguments, d’autres vont avoir 
besoin d’un argument, d’autres de deux, etc. De plus, certains arguments vont être 
obligatoires tandis que d’autres vont être facultatifs.

Par exemple, dans le cas de notre fonction replace(), il va falloir fournir en 
premier argument l’expression à rechercher et à remplacer et en second argument 
l’expression de remplacement pour que la fonction marche correctement.

Au cours des prochaines parties, nous allons étudier de nombreuses fonctions 
JavaScript prédéfinies et notamment celles qui vous seront le plus utiles lorsque vous 
créerez vos propres scripts en JavaScript.`);
s5d2p5.appendChild(contenuS5d2p5);
s5d2.append(s5d2SousTitre1, s5d2p1, s5d2p2, s5d2SousTitre2, s5d2p3, s5d2p4, s5d2p5);
document.getElementById('s5d2p2').innerHTML = Math.random();
let prez = 'Bonjour, je suis Jean-Jacques.';
let prez2 = prez.replace('Jean-Jacques', 'Karine');
document.getElementById('s5d2p4').innerHTML = prez2;

//div 3 de la section 5
const s5d3 = document.querySelector('#s5d3');

//titre 1 de s5d3
const s5d3SousTitre1 = document.createElement('h2');
const contenuS5d3SousTitre1 = document.createTextNode('Les fonctions personnalisées');
s5d3SousTitre1.appendChild(contenuS5d3SousTitre1);

//paragraphe 1 de s5d3
const s5d3p1 = document.createElement('p');
s5d3p1.id = 's5d3p1'
const contenuS5d3p1 = document.createTextNode(`En plus des nombreuses fonctions JavaScript prédéfinies et immédiatement utilisables, 
nous allons pouvoir créer nos propres fonctions en JavaScript lorsque nous voudrons 
effectuer une tâche très précise.

Lorsqu’on crée une fonction en JavaScript, celle-ci n’est utilisable que par les scripts 
qui ont accès à sa définition. Une fonction n’est pas « magiquement incluse » 
dans le langage.

Créer nos propres fonctions va nous permettre de gagner du temps de développement 
et de créer des scripts plus facilement maintenables et plus sécurisés.

En effet, imaginions que l’on crée un script complexe ou qu’on utilise du JavaScript 
pour créer un site qui contient de nombreuses pages. Il y a de grandes chances 
qu’on ait à effectuer plusieurs fois les mêmes opérations à différents endroits 
de notre ou de nos script(s).

Plutôt que de réécrire les mêmes blocs de codes encore et encore, on va plutôt créer 
des fonctions qui vont contenir nos séries d’instruction. Une fois nos fonctions définies, 
nous n’aurons plus qu’à les appeler là où on en a besoin.

Procéder comme cela possède de multiples avantages : gain de temps de 
développement mais également des scripts plus clairs et bien plus facilement 
maintenable puisque si on doit un jour modifier une opération, il nous suffira 
de modifier le code une fois dans la définition de notre fonction plutôt que de
 modifier tous les blocs de code dans le cas où on aurait copié-collé les mêmes blocs 
 de codes encore et encore dans nos scripts.

Pour pouvoir utiliser une fonction personnalisée, en pratique, il faut déjà la définir. 
Pour définir une fonction, on va utiliser le mot clef function suivi du nom que l’on 
souhaite donner à notre fonction puis d’un couple de parenthèses dans lesquelles on peut 
éventuellement définir des paramètres (je reviendrai là-dessus plus tard) et finalement 
d’un couple d’accolades dans lesquelles on va placer le code de notre 
fonction.

Une fois notre fonction définie, on n’aura plus qu’à l’appeler pour l’utiliser. 

Voyons immédiatement comment faire en pratique:

On définit deux fonctions personnalisées.

La fonction aleatoire() se sert de la fonction (méthode) random().
La fonction multiplication() multiplie deux nombres entre eux.
On utilise une instruction return pour que nos fonctions, une fois appelées,
retounent le résultat de leur calcul afin qu'on puisse utiliser ce résultat.

function aleatoire(){
    return Math.random() * 100;
};

function multiplication(nombre1, nombre2){
    //attention : les "+" sont utilisés pour la concaténation !
    return nombre1 + ' x ' + nombre2 + ' = ' + (nombre1 * nombre2);
};

On appelle ou "invoque" ou encore "execute" nos fonctions et on place les resultats 
retournés dans les paragraphes p id='p1' et p id='p2' d'un fichier HTML.
On fournit ici deux arguments à multiplication() pour que la fonction s'execute 
normalement. Ces arguments vont prendre la place des paramètres.

document.getElementById('p1').innerHTML = aleatoire();

document.getElementById('p2').innerHTML = multiplication(5, 10);`);
s5d3p1.appendChild(contenuS5d3p1);

const s5d3p2 = document.createElement('p');
s5d3p2.id = 's5d3p2';

const s5d3p3 = document.createElement('p');
s5d3p3.id = 's5d3p3';

const s5d3p4 = document.createElement('p');
s5d3p4.id = 's5d3p4';
const contenuS5d3p4 = document.createTextNode(`Par curiosité, essayons maintenant d'appeler la fonction aleatoire() comme parametre 
de nombre1 dans la fonction multiplication (appeler une fonction dans une fonction...):
document.getElementById('p3').innerHTML = multiplication(aleatoire(), 10);`)
s5d3p4.appendChild(contenuS5d3p4)

const s5d3p5 = document.createElement('p');
s5d3p5.id = 's5d3p5';

const s5d3p6 = document.createElement('p');
s5d3p6.id = 's5d3p6';
const contenuS5d3p6 = document.createTextNode(`Allez pour finir un petit grain de folie ;) :

document.getElementById('p3').innerHTML = multiplication(aleatoire(), aleatoire());`);
s5d3p6.appendChild(contenuS5d3p6);

const s5d3p7 = document.createElement('p');
s5d3p7.id = 's5d3p7';

s5d3.append(s5d3SousTitre1, s5d3p1, s5d3p2, s5d3p3, s5d3p4, s5d3p5, s5d3p6, s5d3p7)

function aleatoire(){
    return Math.random() * 100;
}
document.getElementById('s5d3p2').innerHTML = 'resultat: ' + aleatoire();

function multiplication(nombre1, nombre2){
    //attention : les "+" sont utilisés pour la concaténation !
    return 'resultat: ' + nombre1 + ' x ' + nombre2 + ' = ' + (nombre1 * nombre2);
};
document.getElementById('s5d3p3').innerHTML = multiplication(5, 10);

document.getElementById('s5d3p5').innerHTML = multiplication(aleatoire(), 10);

document.getElementById('s5d3p7').innerHTML = multiplication(aleatoire(), aleatoire());


//div 4 de la section 5
const s5d4 = document.querySelector('#s5d4');

const s5d4SousTitre1 = document.createElement('h2');
s5d4SousTitre1.id = 's5d4SousTitre1';
const contenuS5d4SousTitre1 = document.createTextNode(`Récapitulatif sur les fonctions`);
s5d4SousTitre1.appendChild(contenuS5d4SousTitre1);

const s5d4p1 = document.createElement('p');
s5d4p1.id = 's5d4p1';
const contenuS5d4p1 = document.createTextNode(`Voici un petit résumé des choses importantes à retenir à ce niveau sur les fonctions :

Les fonctions sont des blocs de code nommés et réutilisables et dont le but est d’effectuer une tâche précise ;

Il existe deux grands types de fonctions en JavaScript : 
les fonction natives ou prédéfinies (qui sont en fait des méthodes) qu’on n’aura qu’à appeler et les fonctions personnalisées qu’on va pouvoir créer ;

Pour exécuter le code d’une fonction, il faut l’appeler. Pour cela, il suffit d’écrire son nom suivi d’un couple de parenthèses en passant éventuellement des arguments 
dans les parenthèses ;

On crée une fonction personnalisée grâce au mot clef function ;

Si une fonction a besoin qu’on lui passe des valeurs pour fonctionner, alors on définira des paramètres lors de sa définition. 
Lors de son appel, on lui passera des arguments qui prendront la place des arguments.`);
s5d4p1.appendChild(contenuS5d4p1);
s5d4.append(s5d4SousTitre1, s5d4p1)


//les portées
const s5d5 = document.querySelector('#s5d5');
const s5d5SousTitre = document.createElement('h2');
s5d5SousTitre.id = "s5d5SousTitre"
const contenuS5d5SousTitre = document.createTextNode('Portée des variables et retour des fonctions en JavaScript');
s5d5SousTitre.appendChild(contenuS5d5SousTitre);
const s5d5p1 = document.createElement('p');
s5d5p1.id = 's5d5p1'
const contenuS5d5p1 = document.createTextNode(`Dans cette nouvelle leçon sur les fonctions JavaScript, nous allons étudier en détail la notion de valeur de retour d’une fonction et allons également discuter 
d’un concept essentiel à la bonne compréhension du JavaScript et des fonctions : la portée des variables.`)
s5d5p1.appendChild(contenuS5d5p1)
s5d5.append(s5d5SousTitre, s5d5p1)

//La notion de portée des variables : définition
const s5d6 = document.querySelector('#s5d6');
const s5d6SousTitre = document.createElement('h2');
s5d6SousTitre.id = 's5d6SousTitre'
const contenuS5d6SousTitre = document.createTextNode('La notion de portée des variables : définition');
s5d6SousTitre.appendChild(contenuS5d6SousTitre);
const s5d6p1 = document.createElement('p');
s5d6p1.id = 's5d6p1';
const contenuS5d6p1 = document.createTextNode(`Il est indispensable de bien comprendre la notion de « portée » des variables 
lorsqu’on travaille avec les fonctions en JavaScript.

La « portée » d’une variable désigne l’espace du script dans laquelle elle va être 
accessible. En effet, toutes nos variables ne sont pas automatiquement disponibles à 
n’importe quel endroit dans un script et on ne va donc pas toujours pouvoir les utiliser.

En JavaScript, il n’existe que deux espaces de portée différents : l’espace global et 
l’espace local. Pour rester très simple, l’espace global désigne l’entièreté d’un script 
à l’exception de l’intérieur de nos fonctions. L’espace local désigne, à l’inverse, 
l’espace dans une fonction.

Ici, vous devez bien retenir la chose suivante : une variable définie dans l’espace 
global d’un script va être accessible à travers tout le script, même depuis une fonction. 
En revanche, une variable définie dans une fonction n’est accessible que dans cette 
même fonction et ne peut pas être manipulée depuis l’espace global du script.

Cette notion de portée est une notion qu’on retrouve dans de nombreux langages 
informatiques. La portée permet de « protéger » certains codes et certaines variables 
en les rendant inaccessibles depuis l’extérieur. Cela permet de renforcer la sécurité 
d’un script et sa stabilité dans le cas où on ne voudrait pas qu’un utilisateur puisse 
modifier la valeur d’une variable depuis l’extérieur pour des raisons de cohérence 
et de logique du script.`);
s5d6p1.appendChild(contenuS5d6p1)
s5d6.append(s5d6SousTitre, s5d6p1)

//Illustration de la notion de portée des variables en JavaScript : exemple pratique
const s5d7 = document.querySelector('#s5d7');
const s5d7SousTitre = document.createElement('h2');
s5d7SousTitre.id = 's5d7SousTitre'
const contenuS5d7SousTitre = document.createTextNode(`Illustration de la notion de portée des variables en 
JavaScript : exemple pratique`);
s5d7SousTitre.appendChild(contenuS5d7SousTitre);
const s5d7p1 = document.createElement('p');
s5d7p1.id = 's5d7p1';
s5d7p1.style.textAlign = 'justify';
const contenuS5d7p1 = document.createTextNode(`Regardez l’exemple suivant pour bien comprendre la notion de portée 
des variables et les subtilités liées à la déclaration des variables dans différents 
espaces de portée:

//On déclare deux variables globales
let x13 = 5;
var y13 = 10;

//On définit une première fonction qui utilise les variables globales

function portee1(){
    document.getElementById('p1').innerHTML =
    'Depuis portee1() : <br>x13 = ' + x13 + '<br>y13 = ' + y13;
};

//On définit une deuxieme fonction qui définit des variables locales

function portee2(){
    let a13 = 1;
    var b13 = 2;
    document.getElementById('p2').innerHTML =
    'Depuis portee2() : <br>a13 = ' + a13 + '<br>b13 = ' + b13;
};

//On définit une troisième fonction qui définit également des variables locales

function portee3(){
    let x13 = 20;
    var y13 = 40;
    document.getElementById('p3').innerHTML =
    'Depuis portee3() : <br>x13 = ' + x13 + '<br>y13 = ' + y13;
};

//On pense à bien exécuter nos fonctions !

portee1();
portee2();
portee3();

//On tente d'afficher des variables globales puis locales depuis l'espace global

document.getElementById('p4').innerHTML =
'Depuis l'espace global : <br>x13 = ' + x13 + '<br>y13 = ' + y13;

document.getElementById('p5').innerHTML =
'Depuis l'espace global : <br>a13 = ' + a13 + '<br>b13 = ' + b13;
`);
s5d7p1.appendChild(contenuS5d7p1);
const s5d7p2 = document.createElement('p');
s5d7p2.id = 's5d7p2';
const s5d7p3 = document.createElement('p');
s5d7p3.id = 's5d7p3';
const s5d7p4 = document.createElement('p');
s5d7p4.id = 's5d7p4';
const s5d7p5 = document.createElement('p');
s5d7p5.id = 's5d7p5';
const s5d7p6 = document.createElement('p');
s5d7p6.id = 's5d7p6';
const s5d7p7 = document.createElement('p');
s5d7p7.id = 's5d7p7';
s5d7p7.style.textAlign = 'justify';
const contenuS5d7p7 = document.createTextNode(`Dans ce script, on commence par déclarer et par initialiser deux variables let x13 et 
var y13 dans l’espace global de notre script et en utilisant la nouvelle notation avec 
let et l’ancienne avec var. Pour cette leçon, je vais utiliser à chaque fois les deux 
notations afin d’illustrer les différences subtiles liées à la portée entre ces deux façons 
de déclarer des variables.

Ensuite, nous allons créer trois fonctions qui vont utiliser des variables globales 
ou définir leurs propres variables. 
Notre fonction portee1() utilise par exemple nos variables let x13 et var y13. Comme 
ces variables ont été déclarées dans l’espace global, elles sont donc accessibles 
et utilisables dans la totalité du script et notamment dans des fonctions.

Notre deuxième fonction portee2() déclare ses propres variables let a13 et var b13. Ces 
variables sont donc des variables locales à cette fonction et ne vont 
pouvoir être utilisées que depuis cette fonction.

Finalement, notre troisième fonction portee3() va également définir deux variables 
locales let x13 et var y13. Ici, la situation est plus complexe que précédemment à 
comprendre puisqu’on a deux variables let x13 et deux variables var y13 : 
une définie dans l’espace global et l’autre définie dans la fonction à chaque fois.

Ici, vous devez bien comprendre que les variables let x13 globale et let x13 locale, 
bien qu’elles possèdent le même nom, sont deux entités totalement différentes 
(et de même pour var y13 globale et locale).

Dans ce cas-là, notre fonction va utiliser les variables définies localement plutôt 
que celles définies dans l’espace global.

De plus, comme les variables locales et globales ne sont pas les mêmes entités, 
elles vont agir indépendamment et ainsi modifier la valeur de let x13 locale ne 
modifiera pas la valeur de la variable globale et inversement.

On voit bien cela lorsqu’on tente d’afficher les valeurs de let x13 et de var y13 depuis 
l’espace global : ici, ce sont les variables globales qui sont utilisées prioritairement 
et on voit que les valeurs qu’elles contiennent n’ont pas été modifiées par la fonction 
portee3().

Finalement, on essaie d’afficher les valeurs de nos variables let a13 et var b13 définies 
localement depuis l’espace global. Comme ces variables sont locales, elles ne sont pas 
accessibles depuis l’espace global et une erreur va être émise par le JavaScript 
dans ce cas.`)
s5d7p7.appendChild(contenuS5d7p7);
s5d7.append(s5d7SousTitre, s5d7p1, s5d7p2, s5d7p3, s5d7p4, s5d7p5, s5d7p6, s5d7p7);

//On déclare deux variables globales
let x13 = 5;
var y13 = 10;

//On définit une première fonction qui utilise les variables globales
function portee1(){
    document.getElementById('s5d7p2').innerHTML =
    `Résultats: 
    
    Depuis portee1() : <br>x13 = ` + x13 + '<br>y13 = ' + y13;
};

//On définit une deuxieme fonction qui définit des variables locales
function portee2(){
    let a13 = 1;
    var b13 = 2;
    document.getElementById('s5d7p3').innerHTML =
    'Depuis portee2() : <br>a13 = ' + a13 + '<br>b13 = ' + b13;
};

//On définit une troisième fonction qui définit également des variables locales
function portee3(){
    let x13 = 20;
    var y13 = 40;
    document.getElementById('s5d7p4').innerHTML =
    'Depuis portee3() : <br>x13 = ' + x13 + '<br>y13 = ' + y13;
};

//On pense à bien exécuter nos fonctions !
portee1();
portee2();
portee3();

//On tente d'afficher des variables globales puis locales depuis l'espace global
document.getElementById('s5d7p5').innerHTML =
'Depuis l\'espace global : <br>x13 = ' + x13 + '<br>y13 = ' + y13;

/*document.getElementById('s5d7p6').innerHTML =
'Depuis l\'espace global : <br>a13 = ' + a13 + '<br>b13 = ' + b13;*/ //neutralisé




//Les différences de portée entre les variables var et let en JavaScript

//selection de l'emplacement par son id
const s5d8 = document.querySelector('#s5d8');

//création des éléments à injecter dans l'emplacement
const s5d8SousTitre = document.createElement('h2');
s5d8SousTitre.id = 's5d8SousTitre';

const s5d8p1 = document.createElement('p');
s5d8p1.id = 's5d8p1';
s5d8p1.style.textAlign = 'justify';

const s5d8p2 = document.createElement('p');
s5d8p2.id = 's5d8p2';

const s5d8p3 = document.createElement('p');
s5d8p3.id = 's5d8p3';

const s5d8p4 = document.createElement('p');
s5d8p4.id = 's5d8p4';

const s5d8p5 = document.createElement('p');
s5d8p5.id = 's5d8p5';

const s5d8p6 = document.createElement('p');
s5d8p6.id = 's5d8p6';
s5d8p6.style.textAlign = 'justify';

//Injection des éléments dans l'emplacement
s5d8.append(s5d8SousTitre, s5d8p1, s5d8p2, s5d8p3, s5d8p4, s5d8p5,s5d8p6);

//Création du contenu à injecter dans les éléments
const contenuS5d8SousTitre = document.createTextNode(`Les différences de portée entre les variables 
var et let en JavaScript`);

const contenuS5d8p1 = document.createTextNode(`Dans l’exemple précédent, on n’a pu observer aucune différence de comportement 
entre une variable déclarée avec la syntaxe let et une variable déclarée avec var 
en JavaScript.

Il existe pourtant une différence de portée qu’on va pouvoir observer lors de la 
définition de variables locales. En effet, lorsqu’on utilise la syntaxe let pour définir 
une variable à l’intérieur d’une fonction en JavaScript, la variable va avoir une portée 
dite « de bloc » : la variable sera accessible dans le bloc dans lequel elle a été définie 
et dans les blocs que le bloc contient.

En revanche, en définissant une variable avec le mot clef var dans une fonction, 
la variable aura une portée élargie puisque cette variable sera alors accessible dans 
tous les blocs de la fonction. 

Prenons immédiatement un exemple pour bien comprendre cela :

function portee4(){
    let x14 = 1;
    var y14 = 2;
    if(true){
        let x14 = 5; //Variable différente
        var y14 = 10; //Même variable qu'au dessus 
        document.getElementById('p1').innerHTML = 'x14 (dans if) = ' + x14;
        document.getElementById('p2').innerHTML = 'y14 (dans if) = ' + y14;
    }
    document.getElementById('p3').innerHTML = 'x14 (hors if) = ' + x14;
    document.getElementById('p4').innerHTML = 'y14 (hors if) = ' + y14;
}

portee4();`);

const contenuS5d8p6 = document.createTextNode(`
Ici, on crée une fonction portee4() qui contient deux variables let x14 et var y14 ainsi 
qu’une condition if dont le code va toujours être exécuté car son test est toujours validé 
(true est toujours évalué… à true).

Dans la condition, on définit à nouveau deux variables let x14 et var y14 avec des 
valeurs différentes. Ici, la variable let x14 définie va bien représenter une entité 
différente de celle définie en dehors de la condition. En revanche, ça ne va pas être le 
cas pour var y14 : dans ce cas-là, on redéfinit la même variable !

Lorsqu’on affiche les valeurs des variables à l’intérieur et en dehors de la boucle, 
on se rend bien compte que nos deux variables let x14 sont bien différentes et stockent 
bien des valeurs différentes tandis que notre variable var y14 a juste été redéfinie.

Je le répète encore une fois ici : aujourd’hui, vous devriez toujours utiliser la nouvelle 
syntaxe de déclaration des variables en JavaScript utilisant le mot clef let. Cependant, 
je dois vous présenter les variables var car de nombreux sites et développeurs continuent 
de les utiliser.

Par ailleurs, notez qu’il est considéré comme une mauvaise pratique de déclarer 
plusieurs variables dans différents espaces en utilisant un même nom car cela peut 
poser des problèmes évidents de clarté et de lisibilité du code. 
On essaiera donc tant que possible d’éviter de faire cela.`);


//injection des contenus dans leurs éléments respectif
s5d8SousTitre.appendChild(contenuS5d8SousTitre);
s5d8p1.appendChild(contenuS5d8p1);

function portee4(){
    let x14 = 1;
    var y14 = 2;
    if(true){
        let x14 = 5; //Variable différente
        var y14 = 10; //Même variable qu'au dessus 
        document.getElementById('s5d8p2').innerHTML = `Résultats: 

x14 (dans if) = ` + x14;
        document.getElementById('s5d8p3').innerHTML = 'y14 (dans if) = ' + y14;
    }
    document.getElementById('s5d8p4').innerHTML = 'x14 (hors if) = ' + x14;
    document.getElementById('s5d8p5').innerHTML = 'y14 (hors if) = ' + y14;
}
portee4();

s5d8p6.appendChild(contenuS5d8p6);



//Les valeurs de retour des fonctions
const s5d9 = document.querySelector('#s5d9');


//création des éléments à injecter dans l'emplacement
const s5d9SousTitre = document.createElement('h2');
s5d9SousTitre.id = 's5d9SousTitre';

const s5d9p1 = document.createElement('p');
s5d9p1.id = 's5d9p1';
s5d9p1.style.textAlign = 'justify';

const s5d9p2 = document.createElement('p');
s5d9p2.id = 's5d9p2';

const s5d9p3 = document.createElement('p');
s5d9p3.id = 's5d9p3';

const s5d9p4 = document.createElement('p');
s5d9p4.id = 's5d9p4';
s5d9p4.style.textAlign = 'justify';



//Injection des éléments dans l'emplacement
s5d9.append(s5d9SousTitre, s5d9p1, s5d9p2, s5d9p3, s5d9p4);


//Création du contenu à injecter dans les éléments
const contenuS5d9SousTitre = document.createTextNode(`Les valeurs de retour des fonctions`);

const contenuS5d9p1 = document.createTextNode(`Un autre concept essentiel à bien comprendre pour maitriser les fonctions en 
JavaScript est celui de « valeur de retour ».

Une valeur de retour est une valeur renvoyée par une fonction une fois que celle-ci a 
terminé son exécution. Une valeur de retour ne doit pas être confondu avec une 
instruction d’affichage durant l’exécution d’une fonction, comme dans le cas d’une 
fonction qui possède à un moment donné dans son code un alert() par exemple.

Une valeur de retour est une valeur unique qui va être renvoyée par la fonction 
après son exécution et qu’on va pouvoir récupérer pour la manipuler dans notre 
script.

Certaines fonctions prédéfinies vont renvoyer une valeur de retour tandis que d’autres 
ne vont pas en renvoyer.

Il est toujours très utile de savoir si une fonction prédéfinie en JavaScript va renvoyer 
une valeur ou pas et quel type de valeur la fonction va renvoyer puisque cela va nous 
permettre de savoir quoi faire après l’exécution de la fonction et d’éventuellement 
recueillir la valeur de retour pour effectuer différentes opérations.

Par exemple, certaines fonctions JavaScript renvoient le booléen true si elles ont réussi 
à effectuer leur tâche ou false en cas d’échec. Dans ce cas, on va pouvoir utiliser une 
condition autour de ces fonctions pour prendre en charge et donner des instructions en 
cas d’échec de notre fonction.

D’autres fonctions vont renvoyer directement le résultat de leur action, comme la 
fonction replace() par exemple qui va renvoyer une nouvelle chaine de caractères avec 
les remplacements effectués.

Dans le cas de fonctions personnalisées, nous allons devoir décider si notre fonction va 
renvoyer une valeur ou pas.

Pour que nos fonctions renvoient une valeur, il va falloir utiliser une instruction return. 
Cette instruction va nous permettre de retourner le résultat de la fonction ou une valeur 
de notre choix qu’on va ensuite pouvoir soit manipuler immédiatement soit stocker 
dans une variable pour effectuer différentes opérations avec cette valeur.

Attention cependant : l’instruction return met fin à l’exécution d’une fonction, ce qui 
signifie que toutes les autres opérations qui suivent une instruction return dans une 
fonction seront ignorées.

Pour cette raison, on fera toujours bien attention à placer l’instruction return en fin 
de fonction, après que toutes les opérations aient été réalisées.

Regardez le code ci-dessous :

let prez3 = 'Bonjour, je suis Jean-Jacques';

/*On récupère la valeur renvoyée par replace() qu'on place dans une
 *variable nommée let resultatReplace*/

let resultatReplace = prez3.replace('jour', 'soir');

//On peut ensuite utiliser notre variable pour différentes opérations

document.getElementById('p1').innerHTML = resultatReplace + ' Goddet';

/*La fonction div() accepte deux nombres en arguments et retourne le résultat
 *de la division de l'un par l'autre ou le message "Divison par 0 impossible"
 *si le deuxième nombre est égal à 0*/

function div(a15, b15){
    if(( a15 == 0 ) || ( b15 == 0 )){
        return 'Divison par 0 impossible';
    }else{
        return a15 / b15;
        alert('Ce message ne s\'affiche jamais !');
    };
};
let nombre3 = prompt('Entrez un premier nombre');
let nombre4 = prompt('Entrez un deuxième nombre');
let resultatDiv = div(nombre3, nombre4);
document.getElementById('p2').innerHTML = resultatDiv;

/*La fonction prompt() ouvre une boite de dialogue qui permet à l'utilisateur
 *d'envoyer des données. 
 *Ici, on demande deux nombres à l'utilisateur et on les place dans les variables 
 *nombre3 et nombre4. On les utilise ensuite comme arguments de notre fonction 
 *div()*/

/*On exécute notre fonction en lui passant les nombres envoyés en argument et
 *on affiche le résultat dans le paragraphe p id='p2'*/

`);

const contenuS5d9p4 = document.createTextNode(`Dans cet exemple, on commence par utiliser la fonction JavaScript prédéfinie replace() 
en utilisant la syntaxe prez.replace(). Vous n’avez pas besoin de comprendre cette 
syntaxe pour le moment mais pour faire simple vous pouvez retenir qu’on a besoin 
d’une chaine de caractères pour exécuter replace() et cette chaine de caractères est ici 
contenue dans notre variable prez.

On sait que replace() renvoie une nouvelle chaine de caractères avec les remplacements 
demandés en valeur de retour. Ici, on récupère cette valeur de retour dans une variable 
let resultatReplace qu’on utilise ensuite.

En dessous, on crée une fonction div() dont le rôle est de diviser un nombre par un autre. 
Dans le code de notre fonction, on isole le cas où le dénominateur est égal à 0. 
Dans ce cas-là, notre fonction renvoie la chaine « division par 0 impossible ». 
Dans tous les autres cas, notre fonction renvoie le résultat de la division.

Notez que j’ai également placé une instruction alert() après return dans le else de ma 
fonction pour vous montrer qu’elle ne sera jamais exécutée (car elle se situe après 
l’instruction return qui met fin à la fonction.

Finalement, on demande aux utilisateurs de nous envoyer deux nombres qu’on passera 
en arguments de notre fonction div(). Pour cela, on utilise une fonction prompt(). 
Cette fonction ouvre une boite de dialogue et permet aux utilisateurs de nous envoyer 
des données.

Note : Dans le code du fichier javaScript que j'utilise, j’ai commenté les instructions 
de la fonction div(), de prompt() et ce qui se trouve en dessous pour éviter que des boites 
de dialogue n’apparaissent au milieu de votre lecture et vous gênent.`);


//injection des contenus dans leurs éléments respectif
s5d9SousTitre.appendChild(contenuS5d9SousTitre);
s5d9p1.appendChild(contenuS5d9p1);
let prez3 = 'Bonjour, je suis Jean-Jacques';

/*On récupère la valeur renvoyée par replace() qu'on place dans une
 *variable nommée let resultatReplace*/


let resultatReplace = prez3.replace('jour', 'soir');

//On peut ensuite utiliser notre variable pour différentes opérations

document.getElementById('s5d9p2').innerHTML = `Résultats: 

` + resultatReplace + ' Goddet';

/*La fonction div() accepte deux nombres en arguments et retourne le résultat
 *de la division de l'un par l'autre ou le message "Divison par 0 impossible"
 *si le deuxième nombre est égal à 0*/

/***function div(a15, b15){
    if(( a15 == 0 ) || ( b15 == 0 )){
        return 'Divison par 0 impossible';
    }else{
        return a15 / b15;
        alert('Ce message ne s\'affiche jamais !');
    };
};
let nombre3 = prompt('Entrez un premier nombre');
let nombre4 = prompt('Entrez un deuxième nombre');
let resultatDiv = div(nombre3, nombre4);
document.getElementById('s5d9p3').innerHTML = resultatDiv;***/

/*La fonction prompt() ouvre une boite de dialogue qui permet à l'utilisateur
 *d'envoyer des données. 
 *Ici, on demande deux nombres à l'utilisateur et on les place dans les variables 
 *nombre3 et nombre4. On les utilise ensuite comme arguments de notre fonction 
 *div()*/


/*On exécute notre fonction en lui passant les nombres envoyés en argument et
 *on affiche le résultat dans le paragraphe p id='p2'*/
s5d9p4.appendChild(contenuS5d9p4);



//Fonctions anonymes, auto-invoquées et récursives en JavaScript
const s5d10 = document.querySelector('#s5d10');

//création des éléments à injecter dans l'emplacement
const s5d10SousTitre = document.createElement('h2');
s5d10SousTitre.id = 's5d10SousTitre';
const s5d10p1 = document.createElement('p');
s5d10p1.id = 's5d10p1';

//Injection des éléments dans l'emplacement
s5d10.append(s5d10SousTitre, s5d10p1);

//Création du contenu à injecter dans les éléments
const contenuS5d10SousTitre = document.createTextNode(`Fonctions anonymes, auto-invoquées et récursives en JavaScript`);

const contenuS5d10p1 = document.createTextNode(`Dans cette nouvelle leçon, nous allons aller un peu plus loin dans notre étude des fonctions JavaScript en nous penchant sur le cas des fonctions anonymes et comment les appeler 
ainsi que sur les fonctions récursives.`);

//injection des contenus dans leurs éléments respectif
s5d10SousTitre.appendChild(contenuS5d10SousTitre);
s5d10p1.appendChild(contenuS5d10p1);



//Qu’est-ce qu’une fonction anonyme et quels sont les cas d’usage ?
const s5d11 = document.querySelector('#s5d11');

//création des éléments à injecter dans l'emplacement
const s5d11SousTitre = document.createElement('h3');
s5d11SousTitre.id = 's5d11SousTitre';
const s5d11p1 = document.createElement('p');
s5d11p1.id = 's5d11p1';

//Injection des éléments dans l'emplacement
s5d11.append(s5d11SousTitre, s5d11p1);

//Création du contenu à injecter dans les éléments
const contenuS5d11SousTitre = document.createTextNode(`Qu’est-ce qu’une fonction anonyme et quels sont les cas d’usage ?`);

const contenuS5d11p1 = document.createTextNode(`Les fonctions anonymes sont, comme leur nom l’indique, des fonctions qui ne vont pas posséder de nom. En effet, lorsqu’on crée une fonction, nous ne sommes pas obligés 
de lui donner un nom à proprement parler.

Généralement, on utilisera les fonctions anonymes lorsqu’on n’a pas besoin d’appeler notre fonction par son nom c’est-à-dire lorsque le code de notre fonction n’est appelé qu’à 
un endroit dans notre script et n’est pas réutilisé.

En d’autres termes, les fonctions anonymes vont très souvent simplement nous permettre de gagner un peu de temps dans l’écriture de notre code et (bien que cela porte à débat) 
à le rendre plus clair en ne le polluant pas avec des noms inutiles.`);

//injection des contenus dans leurs éléments respectif
s5d11SousTitre.appendChild(contenuS5d11SousTitre);
s5d11p1.appendChild(contenuS5d11p1);



//Création et exécution ou appel d’une fonction anonyme
const s5d12 = document.querySelector('#s5d12');

//création des éléments à injecter dans l'emplacement
const s5d12SousTitre = document.createElement('h3');
s5d12SousTitre.id = 's5d12SousTitre';
const s5d12p1 = document.createElement('p');
s5d12p1.id = 's5d12p1';
s5d12p1.style.textAlign = 'justify';

//Injection des éléments dans l'emplacement
s5d12.append(s5d12SousTitre, s5d12p1);

//Création du contenu à injecter dans les éléments
const contenuS5d12SousTitre = document.createTextNode(`Création et exécution ou appel d’une fonction anonyme`);

const contenuS5d12p1 = document.createTextNode(`On va pouvoir créer une fonction anonyme de la même façon qu’une fonction classique, 
en utilisant le mot clef function mais en omettant le nom de la fonction après.

Regardez plutôt le code ci-dessous :

function(){
    alert('Alerte exécutée par une fonction anonyme');
};

Nous avons ici déclaré une fonction anonyme donc le rôle est d’exécuter une fonction 
alert() qui va elle-même renvoyer le message « Alerte exécutée par une fonction 
anonyme » dans une boite d’alerte.

A ce niveau, pourtant, nous faisons face à un problème : comment appeler une fonction 
qui n’a pas de nom ?

On va avoir plusieurs façons de faire en JavaScript. Pour exécuter une fonction 
anonyme, on va notamment pouvoir :

Enfermer le code de notre fonction dans une variable et utiliser la variable comme 
une fonction ;

Auto-invoquer notre fonction anonyme ;

Utiliser un évènement pour déclencher l’exécution de notre fonction.`);

//injection des contenus dans leurs éléments respectif
s5d12SousTitre.appendChild(contenuS5d12SousTitre);
s5d12p1.appendChild(contenuS5d12p1);


//Exécuter une fonction anonyme en utilisant une variable
const s5d13 = document.querySelector('#s5d13');

//création des éléments à injecter dans l'emplacement
const s5d13SousTitre1 = document.createElement('h3');
s5d13SousTitre1.id = 's5d13SousTitre1';
const s5d13p1 = document.createElement('p');
s5d13p1.id = 's5d13p1';
s5d13p1.style.textAlign = 'justify';

//Injection des éléments dans l'emplacement
s5d13.append(s5d13SousTitre1, s5d13p1);

//Création du contenu à injecter dans les éléments
const contenuS5d13SousTitre1 = document.createTextNode(`Exécuter une fonction anonyme en utilisant une variable`);

const contenuS5d13p1 = document.createTextNode(`Voyons ces différentes façons de faire en détail, en commençant par la plus simple :

enfermer la fonction dans une variable et utiliser la variable comme une fonction.

let alerte = function(){
    alert('Alerte exécutée par une fonction anonyme');
};
alerte();

Note: Ce code est commenté dans mon fichier JavaScript pour éviter une exécution 
intempestive.

Ici, on affecte notre fonction anonyme à une variable nommée let alerte. 
Notre variable contient donc ici une valeur complexe qui est une fonction et on va 
désormais pouvoir l’utiliser comme si c’était une fonction elle-même.

Pour « appeler notre variable » et pour exécuter le code de la fonction anonyme 
qu’elle contient, il va falloir écrire le nom de la variable suivi d’un couple de parenthèses. 
Ces parenthèses sont des parenthèses dites « appelantes » car elles servent à exécuter 
la fonction qui les précède.`);


//injection des contenus dans leurs éléments respectif
s5d13SousTitre1.appendChild(contenuS5d13SousTitre1);
s5d13p1.appendChild(contenuS5d13p1);

//Exécuter une fonction anonyme en utilisant une variable
const s5d14 = document.querySelector('#s5d14');

//création des éléments à injecter dans l'emplacement
const s5d14SousTitre1 = document.createElement('h3');
s5d14SousTitre1.id = 's5d14SousTitre2';
const s5d14p1 = document.createElement('p');
s5d14p1.id = 's5d14p1';
s5d14p1.style.textAlign = 'justify';

//Injection des éléments dans l'emplacement
s5d14.append(s5d14SousTitre1, s5d14p1);

//Création du contenu à injecter dans les éléments
const contenuS5d14SousTitre1 = document.createTextNode(`Auto-invoquer une fonction anonyme`);

const contenuS5d14p1 = document.createTextNode(`La deuxième façon d’exécuter une fonction anonyme va être de créer une fonction 
anonyme qui va s’auto-invoquer c’est-à-dire qui va s’invoquer (ou s’appeler ou encore 
s’exécuter) elle-même dès sa création.

Pour créer une fonction auto-invoquée à partir d’une fonction, il va tout simplement 
falloir rajouter un couple de parenthèses autour de la fonction et une seconde après 
le code de la fonction.

Nous avons vu précédemment que le couple de parenthèses suivant le nom de notre 
variable stockant notre fonction anonyme servait à lancer l’exécution de la fonction.

De la même manière, le couple de parenthèses après la fonction va faire en sorte que la 
fonction s’appelle elle-même.


//Fonction anonyme auto-invoquée
(function(){alert('Alerte exécutée par une fonction anonyme')})();

//Fonction nommée auto-invoquée
(function bonjour(){alert('Bonjour !')})();

Note: Ce code est commenté dans mon fichier JavaScript pour éviter une exécution 
intempestive.

Vous pouvez noter deux choses à propos des fonction auto-invoquées. Tout d’abord, 
vous devez savoir que la notion d’auto-invocation n’est pas réservée qu’aux fonctions 
anonymes : on va tout à fait pouvoir auto-invoquer une fonction qui possède un nom. 
Cependant, en pratique, cela n’aura souvent pas beaucoup d’intérêt (puisque si une 
fonction possède un nom, on peut tout simplement l’appeler en utilisant ce nom).

Ensuite, vous devez bien comprendre que lorsqu’on auto-invoque une fonction, la 
fonction s’exécute immédiatement et on n’a donc pas de flexibilité par rapport à cela : 
une fonction auto-invoquée s’exécutera toujours juste après sa déclaration.`);

//injection des contenus dans leurs éléments respectif
s5d14SousTitre1.appendChild(contenuS5d14SousTitre1);
s5d14p1.appendChild(contenuS5d14p1);



//Exécuter une fonction anonyme en utilisant une variable
const s5d15 = document.querySelector('#s5d15');

//création des éléments à injecter dans l'emplacement
const s5d15SousTitre1 = document.createElement('h3');
s5d15SousTitre1.id = 's5d15SousTitre2';
const s5d15p1 = document.createElement('p');
s5d15p1.id = 's5d15p1';
s5d15p1.style.textAlign = 'justify';
const s5d15p2 = document.createElement('p');
s5d15p2.id = 's5d15p2';
const s5d15p3 = document.createElement('p');
s5d15p3.id = 's5d15p3';
const s5d15p4 = document.createElement('p');
s5d15p4.id = 's5d15p4';
s5d15p4.style.textAlign = 'justify';

//Injection des éléments dans l'emplacement
s5d15.append(s5d15SousTitre1, s5d15p1, s5d15p2, s5d15p3, s5d15p4);

//Création du contenu à injecter dans les éléments
const contenuS5d15SousTitre1 = document.createTextNode(`Exécuter une fonction anonyme lors du déclenchement d’un évènement`);

const contenuS5d15p1 = document.createTextNode(`On va enfin également pouvoir rattacher nos fonctions anonymes à ce qu’on appelle 
des « gestionnaires d’évènements » en JavaScript.

Le langage JavaScript va en effet nous permettre de répondre à des évènements, 
c’est-à-dire d’exécuter certains codes lorsqu’un évènement survient.

Le JavaScript permet de répondre à de nombreux types d’évènements : clic sur un 
élément, pressage d’une touche sur un clavier, ouverture d’une fenêtre, etc.

Pour indiquer comment on veut répondre à tel évènement, on utilise des gestionnaires 
d’évènements qui sont des fonctions qui vont exécuter tel code lorsque tel évènement 
survient.

Les évènements vont faire l’objet d’une prochaine partie et je ne veux pas trop en parler 
pour le moment. Notez simplement qu’on va pouvoir passer une fonction anonyme à un 
gestionnaire d'évènement qui va l’exécuter dès le déclenchement de l’évènement que le 
gestionnaire prend en charge.

Pour un exemple concret du fonctionnement général de la prise en charge d’évènements 
et de l’utilisation des fonctions anonymes, 

vous pouvez regarder l’exemple ci-dessous :

//Représentent nos paragraphes p id='p1' et p id='p2'

let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');

/*On utilise la fonction addEventListener() qui sert de gestionnaire
 *d'évènement. Ici, on demande à exécuter la fonction anonyme passé en
 *deuxième argument lors de l'évènement "click" (clic) que l'élément
 *p id='p1' ou p id='p2'*/

para1.addEventListener('click', function(){alert('Clic sur p id=p1');});
para2.addEventListener('click', function(){alert('Clic sur p id=p2');});`);

const contenuS5d15p2 = document.createTextNode(`Résultats:

Paragraphe 1`);
const contenuS5d15p3 = document.createTextNode(`Paragraphe 2`);
const contenuS5d15p4 = document.createTextNode(`Ce code contient beaucoup de notions que nous n’avons pas étudiées et que je ne vais 
pas expliquer en détail pour le moment. Tout ce que vous devez savoir ici est que la 
fonction (ou plus exactement la méthode) addEventListener() permet d’exécuter un code 
lors de la capture (lors du déclenchement) d’un évènement particulier qu’on va lui 
préciser en premier argument.`);

//injection des contenus dans leurs éléments respectif
s5d15SousTitre1.appendChild(contenuS5d15SousTitre1);
s5d15p1.appendChild(contenuS5d15p1);
s5d15p2.appendChild(contenuS5d15p2);
s5d15p3.appendChild(contenuS5d15p3);
s5d15p4.appendChild(contenuS5d15p4);

let para1 = document.getElementById('s5d15p2');
let para2 = document.getElementById('s5d15p3');
para1.addEventListener('click', function(){
    alert('Clic sur p id=p1');
});
para2.addEventListener('click', function(){
    alert('Clic sur p id=p2');
});