import React from "react";
import "./Utilisation.css";

const Utilisation = () => {
  const prenom = Symbol("clef1");
  const age = Symbol("clef2");

  //On définit un nouvel objet avec deux propriétés
  let utilisateur = {
    [prenom]: "Jean-Jacques",
    [age]: 44,
  };
  return (
    <div className="utilisation">
      <h1>Cas concrets d’utilisation des symboles</h1>
      <p>
        L’utilisation la plus courante qu’on va faire des symboles va être de
        les utiliser comme clés d’un objet ou d’une classe.
      </p>
      <p>
        const prenom = Symbol('clef1');
        <br />
        const age = Symbol('clef2');
        <br />
        <br />
        On définit un nouvel objet utilisateur avec deux propriétés:
        <br />
        <br />
        let utilisateur = (<br />
        [prenom] : 'Jean-Jacques',
        <br />
        [age] : 44 );
        <br />
        <br />
        Pour que ce code fonctionne il faut remplacer le couple de parenthèses
        juste après "let utilisateur = " par des accolades.
      </p>
      <h3>{utilisateur[prenom]}</h3>
      <p>{utilisateur[age]} ans</p>
      <p>
        L’unicité des symboles permet de nous assurer qu’il n’y aura pas de
        problème de collision entre les clés d’un objet et on peut ainsi par
        exemple <br/>laisser des utilisateurs étendre des objets sans prendre le
        risque d’avoir des propriétés écrasées par erreur.
      </p>
    </div>
  );
};

export default Utilisation;
