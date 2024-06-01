document.addEventListener('DOMContentLoaded', function () {


    const jstripe = document.getElementById("jstripe");
    const jbagel = document.getElementById("jbagel");
    var SFBagelClick = 1;

    document.addEventListener("scroll", scrollingtest);
    
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt
    function scrollingtest() {
        var SF = scrollY;
        var SFBagel = (scrollY - 1050) * SFBagelClick - 950;
        jstripe.style.transform = "translate(" + -SF + "px , " + SF + "px)";
        jbagel.style.transform = "translate(" + -SFBagel + "px , " + SF + "px)";
        console.log("Scrollfortschritt: "+SF);
        if (SF > 7000) {
            window.open("https://remohoesli.github.io/everything-everywhere/evelyn.html", "_self");
        }

        document.getElementById("jbagel").addEventListener("click", function() {
            SFBagelClick = 0;
            jbagel.style.transform = "translate(" + 950 + "px , " + SF + "px) scale("+  +")";
            console.log("Bagel clicked!");
        });
    }

    


});