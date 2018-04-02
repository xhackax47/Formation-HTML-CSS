function addFood() {
            
    var div = document.createElement("div");
    div.id = "divFood";

    my_form=document.createElement('FORM');
    my_form.name='myForm';
    my_form.method='GET';

    var monH5 = document.createElement("h5");
    monH5.innerText = "Nourriture et Boissons";
    my_form.appendChild(monH5);
    
    my_tb=document.createElement('INPUT');
    my_tb.class="form-group";
    my_tb.type='TEXT';
    my_tb.name='Evenement';
    my_tb.value='Evenement';
    my_form.appendChild(my_tb);
    
    my_tb2=document.createElement('INPUT');
    my_tb2.class="form-group";
    my_tb2.type='TEXT';
    my_tb2.name='Nom';
    my_tb2.value='Nom';

    my_tb3=document.createElement('INPUT');
    my_tb3.class="form-group";
    my_tb3.type='text';
    my_tb3.name='A apporter';
    my_tb3.value='A apporter';

    var btn = document.createElement("button");
    btn.className="removebtn";
    btn.innerText="Supprimer";

    btn.addEventListener("click", function () {
        document.getElementById("modulesAdd").removeChild(divFood);
    });

    document.getElementById("modulesAdd").appendChild(div);

    my_form.appendChild(my_tb2);
    my_form.appendChild(my_tb3);
    my_form.appendChild(btn);
    div.appendChild(my_form);
}