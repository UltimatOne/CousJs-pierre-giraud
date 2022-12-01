/*
*fonctions anonymes
*
*
*/
/*let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');
para1.addEventListener('click', function(){
    alert('Clic sur p id=p1');
});
para2.addEventListener('click', function(){
    alert('Clic sur p id=p2');
});*/

function decompte(t){
    if ( t > -1 ) {
        document.getElementById('p1').innerHTML +=  '<br>' + t + '<br>';
        return decompte( t - 1 );
    } else {
        return t;
    }
}
decompte(10);
