document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener("scroll", scrollingtest);
    const jstripe = document.getElementById("jstripe");
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    function scrollingtest() {
        const pog = scrollY;
        jstripe.style.transform = "translate(" + -pog + "px , " + pog + "px)";
        console.log(pog);
    }


});