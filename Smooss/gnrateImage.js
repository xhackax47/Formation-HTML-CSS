function gnrateImage() {

        var div = document.createElement("div");
        div.id = "divImg";

        var img = document.createElement("img");
        img.className = "imgGnr"
        img.src = null;

        // Apparenter le div au parent "result"

        document.getElementById("result").appendChild(div);

        // Apparenter les éléments crées au parent "div"

        div.appendChild(img);
}