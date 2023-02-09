let canvas1 = document.getElementById('c1');
let canvas2 = document.getElementById('c2');
let canvas3 = document.getElementById('c3');
let canvas4 = document.getElementById('c4');
let canvas5 = document.getElementById('c5');
let canvas6 = document.getElementById('c6');
let canvas7 = document.getElementById('c7');
let canvas8 = document.getElementById('c8');
let canvas9 = document.getElementById('c9');
let canvas10 = document.getElementById('c10');
let canvas11 = document.getElementById('c11');
let canvas12 = document.getElementById('c12');
let canvas13 = document.getElementById('c13');
let canvas14 = document.getElementById('c14');
let canvas15 = document.getElementById('c15');
let ctx1 = canvas1.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');
let ctx4 = canvas4.getContext('2d');
let ctx5 = canvas5.getContext('2d');
let ctx6 = canvas6.getContext('2d');
let ctx7 = canvas7.getContext('2d');
let ctx8 = canvas8.getContext('2d');
let ctx9 = canvas9.getContext('2d');
let ctx10 = canvas10.getContext('2d');
let ctx11 = canvas11.getContext('2d');
let ctx12 = canvas12.getContext('2d');
let ctx13 = canvas13.getContext('2d');
let ctx14 = canvas14.getContext('2d');
let ctx15 = canvas15.getContext('2d');

ctx1.strokeStyle = '#4444CC'; //nuance de bleu
ctx1.strokeRect(50, 12.5, 200, 125);

ctx2.fillStyle = '#FFFFFF'; //nuance de blanc
ctx2.fillRect(50, 25, 200, 100);

ctx3.fillStyle = '#4444CC'; //nuance de bleu
ctx3.fillRect(50, 25, 200, 100);

ctx3.fillStyle = 'black'; //noir
ctx3.fillRect(350, 25, 200, 100);

ctx3.strokeStyle = 'purple'; //nuance de bleu
ctx3.strokeRect(50, 175, 200, 100);
ctx3.strokeRect(350, 175, 200, 100);
ctx3.clearRect(150, 75, 300, 150)

ctx4.beginPath();
ctx4.moveTo(0, 0);
ctx4.lineTo(600, 300);
ctx4.strokeStyle = "black";
ctx4.lineWidth = 5;
ctx4.stroke();

ctx5.beginPath();
ctx5.moveTo(25, 25);
ctx5.lineTo(25, 275);
ctx5.lineTo(225, 275);
ctx5.lineTo(25, 25);
ctx5.strokeStyle = '#4488EE'; //Nuance de bleu
ctx5.lineWidth = 3;
ctx5.closePath();
ctx5.stroke();

ctx5.beginPath();
ctx5.moveTo(575, 575);
ctx5.lineTo(575, 25);
ctx5.lineTo(375, 275);
ctx5.lineTo(575, 275);
ctx5.fillStyle = 'red'; 
ctx5.fill();

ctx5.beginPath();
ctx5.moveTo(300, 25);
ctx5.lineTo(300, 275);
ctx5.strokeStyle = 'black';
ctx5.stroke();

ctx6.beginPath();
ctx6.moveTo(50, 25);
ctx6.lineTo(250, 25);
ctx6.moveTo(275, 50);
ctx6.lineTo(275, 100);
ctx6.moveTo(250, 125);
ctx6.lineTo(50, 125);
ctx6.moveTo(25, 100);
ctx6.lineTo(25, 50);
ctx6.strokeStyle = 'black';
ctx6.lineWidth = 2;
ctx6.stroke();

//Arc de cercle vert
ctx7.beginPath();
ctx7.lineWidth = '5';
ctx7.strokeStyle = '#4C8';
ctx7.arc(100,50,35,0.8*Math.PI, 2*Math.PI);
// ctx7.closePath();
ctx7.stroke();

//Arc de cercle bleu
ctx7.beginPath();
ctx7.lineWidth = '5';
ctx7.strokeStyle = '#48C';
ctx7.arc(201,50,35,0.2*Math.PI, Math.PI, true);
// ctx7.closePath();
ctx7.stroke();

//Cercle complet violet
ctx7.beginPath();
ctx7.lineWidth = '5';
ctx7.fillStyle = '#A4A';
ctx7.arc(150,85,40,0,2*Math.PI);
ctx7.fill();

//Figures avec dégradé linéaire de couleurs
let lineaire = ctx8.createLinearGradient(25,25,100,25);
lineaire.addColorStop(0, "#4C8"); //Vert
lineaire.addColorStop(0.5, "#48C"); //Bleu
lineaire.addColorStop(1, "#A4A"); //Violet
ctx8.fillStyle = lineaire;
ctx8.fillRect(25,25,75,100);

let lineaire2 = ctx8.createLinearGradient(150,25,275,125);
lineaire2.addColorStop(0, '#DD4'); //Jaune
lineaire2.addColorStop(1, '#D44'); //Rouge

ctx8.beginPath();
ctx8.moveTo(150,25);
ctx8.lineTo(150, 125);
ctx8.lineTo(275, 125);
ctx8.fillStyle = lineaire2;
ctx8.fill();

//Figure avec dégradé radial de couleurs
let radial = ctx9.createRadialGradient(150,75,10,150,75,50);

radial.addColorStop(0,'white');//blanc
radial.addColorStop(0.1,'red'); //rouge
radial.addColorStop(0.5,'blue'); //violet
radial.addColorStop(1,'black'); //violet

ctx9.beginPath();
ctx9.fillStyle = radial;
ctx9.arc(150,75,50,0,2*Math.PI);
ctx9.fill();

//Création de motifs dans le canavas
let img = new Image();
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChBT3MMJ2BQZiW0-35dYP0SzoOA_1O0Nmvw&usqp=CAU";
img.onload = function(){
    let pattern = ctx10.createPattern(img, 'no-repeat');
    ctx10.fillStyle = pattern;
    ctx10.fillRect(0,0,225,225)
};

//transparence méthode la plus répandue, ici 0.5 correspond à l'opacité gérée par rgba
ctx11.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx11.fillRect(25,25,100,100);

//En rgb l'opacité n'est pas gérée
ctx11.fillStyle = 'rgb(255, 0, 0)';
ctx11.fillRect(175,25,100,100);

//Autre méthode avec globalAlpha, cette méthode impactera toutes les figures du canvas
ctx12.globalAlpha = 0.5;

ctx12.fillStyle = 'rgb(255, 0, 0)';
ctx12.fillRect(25, 25, 100, 100);

ctx12.fillStyle = 'rgb(0, 0, 255)';
ctx12.fillRect(175, 25, 100, 100);

//Ajout d'ombres aux figures
ctx13.shadowColor = 'red';
ctx13.shadowOffsetX = 5;
ctx13.shadowOffsetY = 15;
ctx13.shadowBlur = 10;

ctx13.fillStyle = 'rgb(255, 0, 0)';
ctx13.fillRect(25, 25, 100, 100);

ctx13.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx13.fillRect(175, 25, 100, 100);

//ajout de texte au canvas
ctx14.font = 'bold 20px Verdana, Arial, serif';

ctx14.strokeStyle = '#48B';
ctx14.strokeText('Texte creux', 25, 50);

ctx14.font = 'bold 20px Verdana, Arial, serif';
ctx14.fillStyle = '#48B';
ctx14.textAlign = 'center'; //Le milieu du texte sera à 150
ctx14.fillText('Texte plein', 150, 100);

//ajout d'image
let image = document.getElementById('sunset');

image.addEventListener('load', function(){
    ctx15.drawImage(image, 75, 25, 150, 100);
}, false);