console.log("");
console.log("DEBUT DU SCRIPT")


// Creation fonction Personne avec attributs

function Personne(inPrénom, inNom) {

    this.id = i;
    this.Prénom = inPrénom;
    this.Nom = inNom;
    //etc
}


// Création Tableau associatif avec objet Personne

var myTab = new Array();
    myTab["ghellscream"] = new Personne("Grom", "Hellscream");
    myTab["vwrynn"] = new Personne("Varian", "Wrynn");
    myTab["schaabi"] = new Personne("Samy", "Chaabi");

// Vérification de la présence des index en recherchant leur ID
console.log("|                                                       VERIFICATIONS                                                                    |");
console.log("");
console.log("|                                                       Vérification de ghellscream                                                      |");
console.log("");


if("ghellscream" in myTab) {
    console.log(myTab["ghellscream"].Prénom + " se trouve dans le tableau")
}

else {
    console.log("Index non présent dans le tableau")
}

console.log("");
console.log("|                                                       Vérification de vwrynn                                                           |");
console.log("");


if("vwrynn" in myTab) {
    console.log(myTab["vwrynn"].Prénom + " se trouve dans le tableau")
}

else {
    console.log("Index non présent dans le tableau")
}

console.log("");
console.log("|                                                       Vérification de jportvaillant                                                    |");
console.log("");

if("jportvaillant" in myTab) {
    console.log(myTab["jportvaillant"].Prénom + " se trouve dans le tableau")
}

else {
    console.log("Index non présent dans le tableau")
}

console.log("");
console.log("|                                                       Vérification de schaabi                                                          |");
console.log("");


if("schaabi" in myTab) {
    console.log(myTab["schaabi"].Prénom + " se trouve dans le tableau");
}

else {
    console.log("Index non présent dans le tableau");;
}

// Boucle for pour afficher id, noms et prénoms en vérifiant tout le tableau
console.log("");

for (var i in myTab) {
    console.log("");
    console.log("                                                              ID  "+i+ "                                                              ");
    console.log("");
    console.log("La personne à l'id : " +i + " et se nomme : " +myTab[i].Prénom + " " +myTab[i].Nom);
    console.log("");
}

console.log("");
console.log("FIN DU SCRIPT")
console.log("");

//SAMY CHAABI @2018 FORMATION CAPGEMINI