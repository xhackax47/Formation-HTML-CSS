var monTableau = [5,6,"sept",421];
var nombreChaines = 0;
var nombreNum = 0;

// 1 er cas : Compter le nombre de chaînes du tableau 
// et le nombre de valeurs numériques

console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("|                                   DEBUT DU SCRIPT                                                                                                             |");
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("");

// Boucle For si variable i plus petit strictement que monTableau sinon increment variable i

for (i=0; i<monTableau.length;i++)

{

    myType = typeof(monTableau[i]);
    switch(myType) {
    case 'string': 
        nombreChaines++;
        console.log("Incrémentation du nombreChaines.....Valeur nombreChaines = " +nombreChaines);
        break;
    case 'number':
        nombreNum++
        console.log("Incrémentation du nombreNum.....Valeur nombreNum = " +nombreNum);
        
    
    }
}

console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("| Le nombre de chaîne(s) de caractères est de " + nombreChaines + " et le nombre de chiffre(s) est de " + nombreNum + " !!!!                                                                        |"); 
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("");

// 2 eme cas : Dire si le tableau contient une chaine

var detect = false;
var v = 0;
var tailleTab = monTableau.length;

do

{

    if(typeof monTableau[v] == 'string')
    {

        detect = true;
        console.log("J'ai trouvé " +nombreChaines + " chaine(s) de caractères et " +nombreNum + " chiffres au bout de " +v + " itérations" );
    }
    
    v++;
    
}while ((detect != true) || (v <= tailleTab));

console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("|                                   FIN DU SCRIPT                                                                                                               |");
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");


//SAMY CHAABI @2018 FORMATION CAPGEMINI