    function mettrealaUne(ev) {

        // Créer variable contenant un evenement ciblé et lui affecter une classe
        var boutonCourant = ev.target;
        boutonCourant.parentNode.className = " alaUne";
        var couleurActuelle = boutonCourant.nextSibling.style.backgroundColor;
        boutonCourant.nextSibling.style.backgroundColor = (couleurActuelle=="red")?"":"red";

    }
    
    function chuckThat() {

        // Allez chercher blague sur API ICNDB et stockage dans variable blague

        var blague = " ";
        var url = "https://api.chucknorris.io/jokes/random";

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {

            // Si le statut et son etat son bons 

            if (this.readyState == 4 && this.status == 200) {

                // Créer une variable contenant la donnée récoltée
                var data = JSON.parse(this.responseText);
                blague = data.value;

                // Créer un élement div et affecter une id "divFact"              
                var div = document.createElement("div");
                div.id = "divFact";
                
                // Créer un élement p et affecter un texte contenant la donnée contenue dans blague
                var p = document.createElement("p");
                p.innerText = blague;
                
                // Créer un élement a et affecter un lien contenue dans "url" et mettre un texte à "a"
                var a = document.createElement("a");
                a.href = url ;
                a.innerText = "Site des Chuck Norris Facts";

                // Créer un élement h3 et affecter un texte.
                var monH3 = document.createElement("h3");
                monH3.innerText = "Chuck Facts";

                // Créer deux élements span et affecter un texte chacun et pour monSpan2, appliquez le style sur fontWeight à 700
                var monSpan1 = document.createElement("span");
                var monSpan2 = document.createElement("span");
                monSpan1.innerText = "Ceci est une vérité ";
                monSpan2.innerText = "ABSOLUE";
                monSpan2.style.fontWeight = "700";

                // Créer un élément bouton lui affecter une classe et du texte et y ajouter un eventlistener sur l'action de click qui lance la fonction mettrealaUne
                var btn1 = document.createElement("button");
                btn1.innerText = "Mettre en avant";
                btn1.className = "btnune";
                btn1.addEventListener("click", mettrealaUne);

                // Créer un élément image avec comme source l'icon_url contenu dans data et classe "imageChuck"
                var imgCN = document.createElement("img");
                imgCN.className = "imageChuck"
                imgCN.src = data.icon_url;

                // Apparenter le div au parent "result"

                document.getElementById("result").appendChild(div);
                
                // Apparenter les éléments crées au parent "div"

                div.appendChild(monH3);
                div.appendChild(monSpan1);
                div.appendChild(monSpan2);
                div.appendChild(btn1);
                div.appendChild(p);
                div.appendChild(imgCN);
                div.appendChild(a);

            };
        }
    }