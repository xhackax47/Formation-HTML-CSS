<!DOCTYPE html>

<html lang="en">
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css"/>
        <title>Formulaire</title>
    </head>

    <body>

<?php

if ( isset($_POST["prefix"]) ) {

    echo "<h3> Préfixe = ". $_POST["prefix"] . "</h3>";

}

if ( isset($_POST["lastName"]) ) {

    echo "<h3> Nom = ". $_POST["lastName"] . "</h3>";

}

if ( isset($_POST["firstName"]) ) {

    echo "<h3> Prénom = ". $_POST["firstName"] . "</h3>";

}

if ( isset($_POST["country"]) ) {

    echo "<h3> Pays = ". $_POST["country"] . "</h3>";

}

if ( isset($_POST["eMail"]) ) {

    echo "<h3> Email = ". $_POST["eMail"] . "</h3>";

}

if ( isset($_POST["cb"]) ) {

    echo "<h3> Centres d'intérêt = ". $_POST["cb"] . "</h3>";

}

if ( isset($_POST["password"]) ) {

    echo "<h3> Mot de passe = ". $_POST["password"] . "</h3>";

}

if ( isset($_GET["login"]) ) {

    echo "<h3> Login = ". $_GET["login"] . "</h3>";

}


?>
<a href="index.html" alt="Accueil">RETOUR ACCUEIL</a>
    </body>
</html>