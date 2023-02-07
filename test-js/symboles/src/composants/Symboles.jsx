import React from "react";
import "./Symboles.css";

const Symboles = () => {
  const symbole1 = Symbol();
  const symbole2 = Symbol("symbole2");
  const x42 = Symbol(42);
  //créé et renvoie un nouveau symbole symbole3
  const symbole3 = Symbol.for('symbole3');

  //On convertit le symbole en chaine pour l'alert -
  alert(symbole3.toString())

  const symboleGlobal = Symbol.for("symbole3");
  const clefSymboleGlobal = Symbol.keyFor(symboleGlobal);

  alert("Clef du symbole globale : " + clefSymboleGlobal);

  return (
    <div className="symbole">
        <h1>Les Symboles En JavaScript</h1>
      <p>
        const symbole1 = Symbol();<br/>
        const symbole2 = Symbol('symbole2');<br/>
        const x42 = Symbol(42);<br/>
        <br/>
        \//créé et renvoie un nouveau symbole symbole3<br/>
        const symbole3 = Symbol.for('symbole3');<br/> 
        <br/>
        \//On convertit le symbole en chaine pour l'alert -<br/> 
        alert(symbole3.toString())<br/>
        <br/>
        const symboleGlobal = Symbol.for('symbole3');<br/> 
        const clefSymboleGlobal = Symbol.keyFor(symboleGlobal);<br/>
        <br/> 
        alert('Clef du symbole globale : ' + clefSymboleGlobal)
      </p>
    </div>
  );
};

export default Symboles;
