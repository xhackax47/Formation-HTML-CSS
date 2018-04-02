function addCarpooling() {

    var div = document.createElement("div");
    div.id = "divCar";

    my_form = document.createElement('FORM');
    my_form.name = 'myForm';
    my_form.method = 'GET';

    var monH5 = document.createElement("h5");
    monH5.innerText = "Covoiturage";
    my_form.appendChild(monH5);

    my_tb = document.createElement('INPUT');
    my_tb.type = 'TEXT';
    my_tb.name = 'Ville';
    my_tb.value = 'Ville de départ';
    my_form.appendChild(my_tb);

    my_tb2 = document.createElement('INPUT');
    my_tb2.type = 'TEXT';
    my_tb2.name = 'Car';
    my_tb2.value = 'Voiture';

    my_tb3 = document.createElement('INPUT');
    my_tb3.type = 'TIME';
    my_tb3.name = 'Heure';
    my_tb3.value = '00:00';

    my_tb4 = document.createElement('INPUT');
    my_tb4.type = 'TEXT';
    my_tb4.name = 'RDV';
    my_tb4.value = 'Lieu de rendez-vous';

    var btn = document.createElement("button");
    btn.className = "removebtn";
    btn.innerText = "Supprimer";

    btn.addEventListener("click", function () {
        document.getElementById("modulesAdd").removeChild(divCar);
    });

    document.getElementById("modulesAdd").appendChild(div);

    my_form.appendChild(my_tb);
    my_form.appendChild(my_tb2);
    my_form.appendChild(my_tb3);
    my_form.appendChild(my_tb4);
    my_form.appendChild(btn);
    div.appendChild(my_form);
}