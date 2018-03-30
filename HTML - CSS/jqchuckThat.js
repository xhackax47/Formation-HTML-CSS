function jqchuckThat() {

    var url = "https://api.chucknorris.io/jokes/random";

    $.get(url, function (data) {          

            var jqDiv = $('<div></div>').addClass("");
            var jqP = $('<p></p>').text(data.value);;
            var jqA = $('<a></a>').attr("href", data.url).text("Voir la fiche");
            var jqImg = $('<img>').attr("src", data.icon_url);
            var jqTitle = $('<h1></h1>').text("Chuck Facts");
            var jqSpan1 = $('<span></span>').text('Ceci est une vérité....');
            var jqSpan2 = $('<span></span>').text('ABSOLUE').css('font-weight',700);


            jqDiv.append(jqTitle, jqP, jqA, jqImg, jqSpan1, jqSpan2);

            $("#result").append(jqDiv);
            
    }).fail(function() {
        console.log(" oups....");
    }).always(function() {
        console.log("done....");
    });
}
