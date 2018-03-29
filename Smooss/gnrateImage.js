   function gnrateImage() {

        var url = "http://api.icndb.com/jokes/random";

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {

            // Si le statut et son etat sont bons 

            if (this.readyState == 4 && this.status == 200) {

                // Créer une variable contenant la donnée récoltée
                var data = JSON.parse(this.responseText);
                image = data.value;

                var div = document.createElement("div");
                div.id = "divImg";
                
                var img = document.createElement("img");
                img.className = "imgGnr"
                img.src = image.icon_url;

                // Apparenter le div au parent "result"

                document.getElementById("result").appendChild(div);
                
                // Apparenter les éléments crées au parent "div"

                div.appendChild(img);

            };
        }
    }