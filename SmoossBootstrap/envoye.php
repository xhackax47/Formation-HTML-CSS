<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="shortcut icon" href="https://png.pngtree.com/element_origin_min_pic/16/11/30/d0a4f1c9aa3faf51b4a1a3fcde71d6e9.jpg"
        type="image/x-icon" />
    <title>Contact</title>
</head>

<body>

    <nav class="navbar navbar-expand-sm mb-3 sticky-top">
            <a href="index.html">
                <img class="img-fluid" style="max-width : 80px" src="logoSmooss.jpg">
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navBar">
                <img class="navbar-toggler-icon" style="float: right;" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-256.png">
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navBar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="galerie.html">Galerie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="forum.html">Forum</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Evenements</a>
                        <div class="dropdown-menu">
                            <a href="creerEvent.html" class="dropdown-item">Créer un évènement</a>
                            <a href="gestionEvent.html" class="dropdown-item">Gérer mes évènements</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Espace Membre</a>
                        <div class="dropdown-menu">
                            <a href="gestionP.html" class="dropdown-item">Gestion du profil</a>
                            <a href="messagerie.html" class="dropdown-item">Messagerie</a>
                            <a href="disconnect.html" class="dropdown-item">Déconnexion</a>
                        </div>
                    </li>
                </ul>
            </div>
    </nav>

    <h3>Contact</h3>
    <br>
    <div class="container">

<?php

if ( isset($_POST["message"]) ) {

    echo "<h4> Votre message a bien été envoyé </h4>";

}


?>



    </div>


    <footer class="footer fixed-bottom">
        <div class="container" style="text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
            <b class="copyright">COPYRIGHT 2018</b>
        </div>
        <hr>
        <div class="d-flex flex-row">
            <div class="col-sm-4">
                <a class="liens" href="plan.html">Plan du site</a>
            </div>
            <div class="col-sm-4">
                <a class="liens" href="contact.html">Contact</a>
            </div>
            <div class="col-sm-4">
                <a class="liens" href="mentions.html">Mentions légales</a>
            </div>
        </div>
        <br>
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>