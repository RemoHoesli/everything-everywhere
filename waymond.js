document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener("scroll", scrollingtest);
    const wstripe = document.getElementById("wstripe");
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    function scrollingtest() {
        const pog = scrollY;
        wstripe.style.transform = "translate(" + -pog + "px , " + pog + "px)";
        console.log(pog);
    }


});