// PROGRAMMATION ORIENTEE OBJET EN JAVASCRIPT

console.log(" ");

// 1 ere facon de déclarer une fonction

function afficheDetails (someone)
{
console.log("Le prénom de la personne se nomme " +someone.getMyName() + " , il a " +someone.getMyAge() + " ans et il est de la race : " + someone.Race + ".");
console.log(" ");
console.log("Son monde d'origine est : " +someone.Pays)
console.log(" ");
console.log(" ");
}

// 2 eme facon de déclarer une fonction

var autreFonction = function(param)
    {
        console.log("Je suis aussi une fonction qui a un paramètre et il vaut " + param);
    }

// Declarations variables en tant qu'Objet Littéral

var person1 = {

    Prénom : "Grom",
    Nom : "Hellscream",
    Age : 50,
    Race : "Orc",
    Pays : "Draenor"

}

var person2 = {

    Prénom : "Varian",
    Nom : "Wrynn",
    Age : 41,
    Race : "Humain",
    Pays : "Azeroth"
}

var person3 = {

    Prénom : "Samy",
    Nom : "Chaabi",
    Age : 29,
    Race : "Humain",
    Pays : "France",
}

// Affectaton d'une fonction de retour des attributs Prénom et Nom à la variable fonctionName pour les objets person1 person2 et person3

var fonctionName = function(){return this.Prénom + " " + this.Nom;};
person1.getMyName = fonctionName;
person2.getMyName = fonctionName;
person3.getMyName = fonctionName;

// Affectaton d'une fonction de retour de l'attribut Age à la variable fonctionAge pour les objets person1 person2 et person3


var fonctionAge = function(){return this.Age};
person1.getMyAge = fonctionAge;
person2.getMyAge = fonctionAge;
person3.getMyAge = fonctionAge;

// Appel des fonctions afficheDetails pour chacune des personne avec un console.log vide pour espacer et appel de la fonction autreFonction

afficheDetails(person1);
console.log("");
afficheDetails(person2);
console.log("");
afficheDetails(person3);
autreFonction("TRUC");

//SAMY CHAABI @2018 FORMATION CAPGEMINI *