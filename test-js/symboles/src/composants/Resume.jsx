import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <h1>En résumé</h1>
      <p>
        Pour le moment, les usages et utilisations des symboles en JavaScript
        sont, comme beaucoup d’éléments nouveaux, relativement limités.
      </p>
      <p>
        Cependant, on peut parier que leur utilisation va se généraliser puisque
        le groupe en charge du développement du JavaScript les ajoutés en tant
        <br />
        que nouvelle valeur primitive, ce qui constitue une preuve sérieuse de
        l’espoir placés en eux.
      </p>
      <p>
        Aujourd’hui, les symboles sont principalement utilisés en tant que clefs
        d’objets, afin d’éviter les collisions notamment avec des bibliothèques
        <br />
        externes ainsi que pour limiter le nombre de mauvaises manipulations qui
        peuvent se produire.
      </p>
    </div>
  );
};

export default Resume;
