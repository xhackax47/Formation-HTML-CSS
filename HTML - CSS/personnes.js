
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

function maFabriquedeRemove(unDiv) {{}
    return function() {
        document.body.removeChild(unDiv);
    }
}

function addDivTab() {

for(cle in monTableau){

    var div = document.createElement("div");
    div.id = "card" + cle;
    div.className = "divFriends"; 
    
    var monBody = document.body;


    var para = document.createElement("p"); 
    para.className = "para";
    para.innerText = monTableau[cle].nom + " " + monTableau[cle].prenom;


    var alink = document.createElement("a");
    alink.href = "resultat.php?login=" + cle ;
    alink.innerText = " PROFIL COMPLET"


    var monBtn = document.createElement("button");
    monBtn.innerText ="Supprimer";

    monBtn.addEventListener("click", maFabriquedeRemove(div));

    monBody.appendChild(div);
    div.appendChild(para);
    div.appendChild(alink);
    div.appendChild(monBtn);
    document.body.appendChild(div);
    }   
}

addDivTab();