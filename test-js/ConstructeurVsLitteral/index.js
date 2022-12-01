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

let alphonse = new Utilisateur(['Alphonse', 'Brown'], 32, 'alphonsebrown@adopteunmec.com')
let aya = new Utilisateur(['Aya', 'Nakamura'], 29, 'ayanakamura@tinder.com')


/*La même chose mais en litteral

let aplhonse = {
    nom: ['Alphonse', 'Brown'],
    age: 32,
    mail: 'alphonsebrown@adopteunmec.com'
    bonjour = function(){
        alert(`Bonjour, je suis ${this.nom[0]}, j'ai ${this.age} ans (on a le droit de rêver!)`)
    }
let aya = {
    nom: ['Aya', 'Nakamura'],
    age: 29,
    mail: 'ayanakamura@tinder.com'
    bonjour = function(){
        alert(`Bonjour, je suis ${this.nom[0]}, j'ai ${this.age} ans (on a le droit de rêver!)`)
    }
}
*/ 