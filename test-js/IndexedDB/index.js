let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    //Opérations
    db = openRequest.result;

    //Si l'objet de stockage n'existe pas, on le crée
    if(!db.objectStoreNames.contains('users')){
        db.createObjectStore('users', {keyPath: 'id'});
    };
};
openRequest.onerror = function(){
    alert(`Impossible d'acceder à IndexedDB`);
};
openRequest.onsuccess = function(){
    //Opérations
    db = openRequest.result;

    let transaction = db.transaction('users', 'readwrite');

    transaction.oncomplete = function(){
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');
    let user = {
        id: 1,
        prenom: 'Jean-Jacques',
        mail: 'jj.goddet@icloud.com',
        inscription: new Date()
    };
    let ajout = users.put(user);
    ajout.onsuccess = function(){
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };
    ajout.onerror = function(){
        alert('Erreur: ' + ajout.error);
    };
    let lire = users.get(1);
    lire.onsuccess = function(){
        alert(`Nom de l'utilisateur 1 : ` + lire.result.prenom + ' ' + lire.result.mail)
    };
    lire.onerror = function(){
        alert('Erreur : ' + lire.error)
    }
    let supprimer = users.delete(1);
    supprimer.onsuccess = function(){
        alert('Utilisateur supprimé de la base de données');
    };
    supprimer.onerror = function(){
        alert('Erreur : ' + supprimer.error)
    }
};