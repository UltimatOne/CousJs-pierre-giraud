<?php
include "components/header.php";

?>
<main>
    <?php

    $prenom = "jean-jacques";
    $x = 4;
    $y = 5;

    function Bonjour()
    {
        echo  "<p>Bonjour à tous</p>";
    };

    function Bonjour1($p)
    {
        echo  $p;
    };
    function Bonjour2($p)
    {
        echo "<p>Bonjour je m'appelle " . $p . "</p>";
    };

    function Addition($a, $b)
    {
        echo "<p>" . $a . " + " . $b . " = " . ($a + $b) . "</p>";
    };
    Bonjour();
    Bonjour1("<p>bonjour à toutes</p>");
    Bonjour2($prenom);
    Bonjour2("Karine");
    Addition($x, $y);
    Addition(1, 1);

    echo "<h1>Argument par référence</h1>
         <h3>Sans</h3>";
    $z = 0;

    //fonction qui ajoute 3 à $z dans la fonction, ne change pas la valeur de $z en dehors de la fonction
    function Plus3($p)
    {
        $p = $p + 3;
        echo "<p>Valeur de \$z dans la fonction : " . $p . "</p>";
    };
    Plus3($z);
    echo "<p>Valeur de \$z en dehors de la fonction : " . $z . "</p>
         <h3>Avec</h3>";

 //fonction qui ajoute 3 à $z dans la fonction et change la valeur de $z en dehors de la fonction grace à &
         function Plus3_2(&$p)
    {
        $p = $p + 3;
        echo "<p>Valeur de \$z dans la fonction : " . $p . "</p>";
    };

    Plus3_2($z);
    echo "<p>Valeur de \$z en dehors de la fonction : " . $z . "</p>";

    echo "<h1>Valeurs par défaut</h1>";
    function Bonjour3($name, $role = "abonné(e)")
    {
        echo  "<p>Bonjour " . $name . ", vous êtes un(e) " . $role . "</p>";
    };
    Bonjour3("Karine");
    Bonjour3("Jean-Jacques", "administrateur");

    echo "<h1>Nombre de parmètres variables</h1>";
    //fonction qui accepte un nombre de paramètres indifini
    function Bonjour4(...$prenoms){
        foreach($prenoms as $prenom){
            echo "<p>Bonjour " . $prenom . "</p>";
        }
    };
    Bonjour4("Jean-Jacques", "Karine", "Lucy", "Maxime");


    echo "<h1>Déclaration de type</h1>";

    function Test($a, $b){
        echo "<p>" . $a . " + " . $b . " = " . ($a + $b) . "</p>";
    };
    function Addition2(float $a, float $b){
        echo "<p>" . $a . " + " . $b . " = " . ($a + $b) . "</p>";
    };
    Test(3, 4);
    Test(3, "7");
    Addition2(3, 4);
    Addition2(3, "4.5");
    Addition2(3.5, 4.2);
    // Test(3, "4jj");//Sans float l'erreur n'est pas bloquante
    // Addition2(3.5, "4jj");//Avec float l'erreur est bloquante
    // Test(3.5, "jj");//Erreur bloquante avec ou sans float
    
    ?>
</main>

<?php
require "components/footer.php";
?>