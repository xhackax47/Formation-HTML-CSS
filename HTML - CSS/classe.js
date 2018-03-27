// Creation fonction personne

function Personne(inPrénom, inNom) {

    this.Prénom = inPrénom;
    this.Nom = inNom;
    this.getName = function() {return this.Prénom + " " + this.Nom;}

}

// Affectation variables P1/P2/P3 aux nouveaux objets auxquels on ajoute des paramètres

var p1 = new Personne("Grom", "Hellscream");
var p2 = new Personne("Varian", "Wrynn");
var p3 = new Personne("Samy", "Chaabi");

// Creation fonction joueur

function Joueur(zePrenom, zeNom, ptXP) {
    Personne.call(this, zePrenom, zeNom);
    this.soldeXP = ptXP;
    this.afficheXP = function () { console.log(this.soldeXP);}
}

// Affectation variables J1/J2/J3 aux nouveaux objets auxquels on ajoute params

var j1 = new Joueur("Test", "Test", 50);
var j2 = new Joueur("Test2", "Test2", 55);
var j3 = new Joueur("Test3", "Test3", 60);


// Utilisation prototype pour créer une fonction sayHello


Personne.prototype.sayHello = function() { console.log("Bonjour je m'appelle " + this.getName())};
Joueur.prototype.soldeXP = function () {console.log("Votre solde d'XP est de " + this.afficheXP())}

// Début du script et appels des foncitons

console.log("");
console.log("DEBUT DU SCRIPT");
console.log("");

console.log(p1.getName());
console.log("");
console.log(p2.getName());
console.log("");
console.log(p3.getName());
console.log("");

console.log("");
p1.sayHello();
p2.sayHello();
p3.sayHello();

console.log("");
j1.afficheXP();
j2.afficheXP();
j3.afficheXP();

console.log("");
console.log("FIN DU SCRIPT");
console.log("");

//SAMY CHAABI @2018 FORMATION CAPGEMINI *