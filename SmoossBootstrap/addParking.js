function addParking() {
         
    var div = document.createElement("div");
    div.id = "divPark";

    my_form=document.createElement('FORM');
    my_form.name='myForm';
    my_form.method='GET';

    var monH5 = document.createElement("h5");
    monH5.innerText = "Parkings et garage";
    my_form.appendChild(monH5);
    
    my_tb=document.createElement('INPUT');
    my_tb.type='TEXT';
    my_tb.name='Ville';
    my_tb.value='Ville';
    my_form.appendChild(my_tb);
    
    my_tb2=document.createElement('INPUT');
    my_tb2.type='TEXT';
    my_tb2.name='Event';
    my_tb2.value='Evenement';

    my_tb3=document.createElement('INPUT');
    my_tb3.type='TEXT';
    my_tb3.name='Garage';
    my_tb3.value='Nom Parking ou Garage';

    var btn = document.createElement("button");
    btn.className="removebtn";
    btn.innerText="Supprimer";

    btn.addEventListener("click", function () {
        document.getElementById("modulesAdd").removeChild(divPark);
    });

    document.getElementById("modulesAdd").appendChild(div);

    my_form.appendChild(my_tb);
    my_form.appendChild(my_tb2);
    my_form.appendChild(my_tb3);
    my_form.appendChild(btn);
    div.appendChild(my_form);
}