// Simple function showing an alert
function testAlert() {

    alert("Hello world !");

}

// Function to add text into the html
function changeText() {

    document.getElementById('resultat').innerHTML += '<br/>' +
    document.getElementById('resultat').innerHTML;

}

// Function that add div into the parent div : add_div
function addDiv() {

    document.getElementById('add_div').innerHTML += '<div class="block">  </div>';

}

// Function that change the background to dark and also add a class dark_mode on the classes named block
function nightMode() {

    document.getElementsByTagName('body')[0].style.backgroundColor = "black";

    for ( var i = 0; i < 5; i ++ ) {
        document.getElementsByClassName('block')[i].classList.add('dark_mode');
    }
    
}

// Function which do the contrary to nightMode
function clearMode() {

    document.getElementsByTagName('body')[0].style.backgroundColor = "#7d869c";

    for ( var i = 0; i < 5; i ++ ) {
        document.getElementsByClassName('block')[i].classList.remove('dark_mode');
    }
    

}

// Event mouseenter for the image, will change it to 500px
document.getElementById("myImage").addEventListener("mouseenter", 
function () {
    document.getElementById("myImage").style.maxWidth = "500px";
});

// Event mouseleave for the image, will change it to 250px
document.getElementById("myImage").addEventListener("mouseleave", 
function () {
    document.getElementById("myImage").style.maxWidth = "250px";
});

// Event click that will add words on the list
document.getElementById("miseajour").addEventListener("click",
function (){
    var value = document.getElementById("enter").value;
    document.getElementById("liste").innerHTML += "<li>" + value + "</li>";
});