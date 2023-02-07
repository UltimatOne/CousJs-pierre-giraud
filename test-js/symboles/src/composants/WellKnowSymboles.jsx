import React from "react";
import './WellKnowSymboles.css'

const WellKnowSymboles = () => {
  return (
    <div className="WellKnowSymboles">
      <h1>Well-Know Symbols</h1>
      <p>
        Il existe des symboles prédéfinis en JavaScript dont le JavaScript se
        sert en interne et qu’on va pouvoir utiliser pour personnaliser le
        comportement de nos objets.
      </p>
      <p>
        Ces symboles sont également appelés les « well-known symbols ». Les plus
        utiles sont les suivants :
      </p>
      <ul>
        <li>Symbol.hasInstance ;</li>
        <li>Symbol.iterator ;</li>
        <li>Symbol.toPrimitive ;</li>
        <li>Symbol.isConcatSpreadable.</li>
      </ul>
      <p>
        La propriété iterator, par exemple, retourne l’itérateur d’un objet. La
        propriété toPrimitive permet d’expliciter la façon dont un objet peut
        être transformé en valeur primitive etc.
      </p>
      <p>
        Comme ces propriétés sont des symboles, on est certain qu’elles ne
        pourront être écrasées et elles sont protégées de toute modification.
      </p>
    </div>
  );
};

export default WellKnowSymboles;
