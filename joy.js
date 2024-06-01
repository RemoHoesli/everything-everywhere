document.addEventListener('DOMContentLoaded', function () {


    const jstripe = document.getElementById("jstripe");


    document.addEventListener("scroll", scrollingtest);
    
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt
    function scrollingtest() {
        var SF = scrollY;
        jstripe.style.transform = "translate(" + -SF + "px , " + SF + "px)";
        console.log("Scrollfortschritt: "+SF);
        if (SF > 7000) {
            window.open("https://remohoesli.github.io/everything-everywhere/evelyn.html", "_self");
        }
    }

    


});