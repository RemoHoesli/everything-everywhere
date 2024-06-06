document.addEventListener('DOMContentLoaded', function () {


    const container = document.getElementById("container");
    const responsive = document.getElementById("responsive");

    
    document.addEventListener("scroll", scrollingtest);
    var SF = 0;

    var scalefactor = window.innerHeight/980;
    responsive.style.transform = "translate(" + 0 + "px , " + -SF*(scalefactor-1) + "px) scale("+ scalefactor +")";
    
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt
    function scrollingtest() {
        responsive.style.transform = "translate(" + 0 + "px , " + -SF*(scalefactor-1) + "px) scale("+ scalefactor +")";
        if (SF < 30000) {
            SF = scrollY;
            container.style.transform = "translate(" + -SF + "px , " + SF + "px)";
        }
        /*
        //Stopping for Bagel
        else if (SF < 4600) {
            SF = scrollY;
            SFwidebagel = SF * 0.0004;
            container.style.transform = "translate(" + -2600 + "px , " + SF + "px)";
            widebagel.style.transform = "translate(1200px , 0px) scale("+ SFwidebagel +")";
        }
        if (SF > 4600) {
            SF = scrollY;
            window.open("https://remohoesli.github.io/everything-everywhere/evelyn.html", "_self");
        }
        if (SF < 10000) {
            SF = scrollY;
            var SF_1 = SF - 2000;
            container.style.transform = "translate(" + -SF_1 + "px , " + SF + "px)";
        }*/
        
        console.log("Scrollfortschritt: "+SF); 
    }
    

});