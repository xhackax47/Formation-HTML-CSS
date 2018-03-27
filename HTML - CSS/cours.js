// Ceci est un commentaire
// Déclaration de départ des variables

var myVar;
var myVar2;
var myName;
var boolean;
var calcul;
var myNumber;
var maChaine;
var maChaine2;
var maChaine3;
var a;
var b;
var c;
var chaine1;
var chaine2;
var chaine3;
var extension;

// Attribution valeur (string,int,boolean,etc..) aux variables

a = 42;
b = 1200;
c = 95;
boolean = true;
myVar = 20;
myVar2 = 3;
myName = "Samy";
myNumber = 42;
calcul = myNumber * 2;
maChaine = "\"J'ose tout ce qui sied à un homme \\\\ Qui ose plus n'en est pas un.\"";
maChaine2 = "William Shakespeare";
maChaine3 = "\"Macbeth\"\n";
chaine1 = "Coucou";
chaine2 = "Salut les copains et copines";
chaine3 = "Bonjour" ;
extension = "PDF";

// Affiche dans la console

console.log("Hello World !");
console.log("Hello World Again\n");

// Utilisation variables

console.log("Hello "+ myName);
console.log(myNumber);
console.log(calcul);
console.log (boolean +"\n");

// Concatenation

console.log(maChaine + " " + maChaine2 + " " + maChaine3);
console.log(maChaine + " " + myVar + "\n");

// Priorité Calcul gauche à droite

console.log(myVar2 + myVar + maChaine);
console.log(maChaine + myVar2 + myVar +"\n");

// Addition avec variable

console.log(myNumber + 5 +"\n");

// Calcul A

//a = a + b + c;
a += b + c;
console.log("La somme de A vaut : " + a +"\n")

//a = a *2
a*= 2;

// Je veux mettre resultat dans a

console.log("La somme de A multiplié par 2 vaut : " + a +"\n")

// Afficher type des variables

console.log("Le type de ma variable myName est " + typeof (myName));
console.log("Le type de ma variable myNumber est " + typeof (myNumber));
console.log("Le type de ma variable calcul est " + typeof (calcul));
console.log("Le type de ma variable boolean est " + typeof (boolean));
console.log("Le type de ma variable maChaine est " + typeof (maChaine)+"\n");

// Longueur variables

console.log(chaine1 +"\n")
console.log("La chaine 1 a pour longueur " +chaine1.length+ " " + "caractères"+""+"\n")
console.log(chaine2 +"\n")
console.log("La chaine 2 a pour longueur " +chaine2.length+ " " + "caractères"+""+"\n")
var chaine3 = chaine1 + chaine2;
console.log("La chaine 3 a pour longueur " +chaine3.length+ " " + "caractères"+""+"\n")

// Position d'une lettre

console.log("Position du premier L de la chaine2 = " + chaine2.indexOf("l"));
var l = chaine2.indexOf("l");
console.log("Position du deuxieme L de la chaine2 = " + chaine2.indexOf("l",l+1));
console.log("Position du dernier L de la chaine2 = " + chaine2.lastIndexOf("l")+"\n");

//Version mal voyant (passer une chaine de caracteres en nouvelle chaine en majuscules)

console.log("Version pour malvoyants : " + maChaine.toUpperCase()+"\n");

//Methode de remplacement

console.log(chaine2.replace("copains", "potos")+"\n");

//Methode de selection

var log = "[14/03/2018 - 14:57:00] this is not a valid value...";
console.log(log.substr(log.indexOf(']')+1)+"\n");

// Condition IF/ELSE/ELSE IF

if (maChaine.length && maChaine2.length && maChaine3.length > 15) 
{
    console.log("Il y a une chaine de plus de 15 caractères :"+"\n")
}

else if (maChaine.length  && maChaine2.length  && maChaine3.length > 12)
{
    console.log("Aucune de 15 mais une chaine de plus de 12 caractères :"+"\n");
}
//Sinon faire ca

else 
{
    console.log("Aucune chaine de plus de 12 ou 15 caractères"+"\n");
}

//Tests de format 

if (extension == "PDF")
{
    console.log("Ceci est un document PDF Acrobat Reader");
}

else if (extension == "JPG")
{
    console.log("Ceci est une image JPEG");
}

else
{
    console.log("Ceci n'est ni un PDF ni un JPEG");
}

// SWITCH

switch(extension) 
{
    case "PDF":
        console.log("Ceci est un document PDF");
        break;
    case "JPG":
        console.log("Ceci est une image JPG");
        break;
    case "PNG":
        console.log("Ceci est une image PNG")
        break;
    default:
        console.log("Format non reconnu");
}

// Tests Format

var ext = "JPG";
var chaineUser = "Mon fichier est au format :";
var chaineFormat = (extension == "JPG") ? "jpeg" : "pas de jpeg" + "\n";

console.log(chaineUser + chaineFormat);

// Test nb fichiers

var nbFiles = 1;

console.log("Ce dossier contient : "
    +nbFiles
    + " "
    + ((nbFiles>1) ? "fichiers" : "fichier" + "\n"));  

// Tests Comparaison

var maVar1 = 12;
var maVar2 = "12";
var maVar3 = (maVar1 == maVar2) || (maVar1 > maVar2);

console.log(maVar3)
console.log(typeof(maVar3)+"\n");

if (maVar3)
{
    console.log("Les variables sont égales"+ "\n");
}

else
{
    console.log("Les variables sont différentes" + "\n");
}


// BOUCLE FOR

var Bienvenue = "Bienvenue à Montpellier";

var longueurDeMaChaine = Bienvenue.length;
var nbchar = 0;

for (var k=0 ; k<longueurDeMaChaine ; k += 1 )
{
    console.log("Je regarde le caractère " + Bienvenue[k] + "\n")
    if (Bienvenue[k] === "e"){
        nbchar += 1;
        console.log("C'est un E !!!" + "\n")
    }
}

console.log("J'ai trouvé " + nbchar + " caractères \"E\" dans la chaine Bienvenue" +"\n")

// BOUCLE WHILE

while ((k<longueurDeMaChaine) && (nbchar<3))
{
    console.log("Je regarde le caratère" + Bienvenue[k]);
    if (Bienvenue[k] === "e")
    {
        nbchar++;
        console.log("C'est un E !!!!!")
    }
    k++;
}

// Compter nombres d'occurences dans une chaine (Boucle WHILE)

var count = 0;
var pos = maChaine.indexOf("o");

while ( pos != -1 ) {
   count++;
   pos = maChaine.indexOf( "o",pos + 1 );
}
console.log("Le nombre d'occurences de la lettre O dans la variable maChaine est de : " + count +"\n");


//SAMY CHAABI @2018 FORMATION CAPGEMINI