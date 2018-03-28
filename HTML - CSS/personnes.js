
function Personne(inPrenom, inNom) {
    this.id;;
    this.nom = inNom
    this.prenom = inPrenom;
    //etc
}

var monTableau = [];
monTableau["ghellscream"] = new Personne("Grom", "Hellscream");
monTableau["vwrynn"] = new Personne("Varian", "Wrynn");
monTableau["schaabi"] = new Personne("Samy", "Chaabi");

function addDiv() {

for(table in monTableau){

    var div = document.createElement("div");
    div.id = "card" + table;
    div.className = "divFriends"; 
    
    var monBody = document.body;

    monBody.appendChild(div);

    var para = document.createElement("p"); 
    para.className = "para";
    para.innerText = monTableau[table].nom + " " + monTableau[table].prenom;

    div.appendChild(para);

    var alink = document.createElement("a");
    alink.href = "resultat.php?login=" + table ;
    alink.innerText = " PROFIL COMPLET"

    div.appendChild(alink);

    }   
}

addDiv();