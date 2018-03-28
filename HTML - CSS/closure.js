var tab = ["un", "deux", "trois"];
var i;

var maFonctionFigee = function (leParam) {

    return function() {

        console.log("Voici le resultat : " + tab[leParam]);
    }
}

for (var i = 0; i < 2; i++) {

    console.log("Je lance le timeout pour : " + tab[i]);
    setTimeout(maFonctionFigee(i), 1000);

}