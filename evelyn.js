document.addEventListener('DOMContentLoaded', function () {


    const container = document.getElementById("container");
    const estripe = document.getElementById("estripe");


    document.addEventListener("scroll", scrollingtest);
    var SF = 0;
    
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt
    function scrollingtest() {
        SF = scrollY;
        container.style.transform = "translate(" + -SF + "px , " + SF + "px)";
        console.log("Scrollfortschritt: "+SF);
    }

});