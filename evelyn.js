document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener("scroll", scrollingtest);
    const estripe = document.getElementById("estripe");
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    function scrollingtest() {
        const pog = scrollY;
        estripe.style.transform = "translate(" + -pog + "px , " + pog + "px)";
        console.log(pog);
    }

});