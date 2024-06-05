document.addEventListener('DOMContentLoaded', function () {


    const container = document.getElementById("container");
    const groupstart = document.getElementById("groupstart");


    document.addEventListener("scroll", scrollingtest);
    var SF = 0;
    
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt
    function scrollingtest() {
        if (SF < 3000) {
            SF = scrollY;
            container.style.transform = "translate(" + -SF + "px , " + SF + "px)";
            document.getElementById("darke1").style.opacity = "0";
            document.getElementById("darke2").style.opacity = "0";
            document.getElementById("darke3").style.opacity = "0";
            document.getElementById("darke4").style.opacity = "0";
            document.getElementById("darke5").style.opacity = "0";
            document.getElementById("darke6").style.opacity = "0";
            document.getElementById("darke7").style.opacity = "0";
            document.getElementById("darkq1").style.opacity = "0";
            document.getElementById("darkq2").style.opacity = "0";
            document.getElementById("darkq3").style.opacity = "0";
            document.getElementById("darkq4").style.opacity = "0";
            document.getElementById("darkblood").style.opacity = "0";
        }
        else if (SF < 11000) {
            SF = scrollY;
            container.style.transform = "translate(" + -3000 + "px , " + SF + "px)";
            if (SF > 3000) {
                document.getElementById("darke1").style.opacity = "1";
                document.getElementById("darke2").style.opacity = "1";
            }
            if (SF > 3500) {
                document.getElementById("darke3").style.opacity = "1";
                document.getElementById("darke4").style.opacity = "1";
                document.getElementById("darke5").style.opacity = "1";
                document.getElementById("darkq1").style.opacity = "1";
            }
            if (SF > 4000) {
                document.getElementById("darke6").style.opacity = "1";
                document.getElementById("darkq2").style.opacity = "1";
            }
            if (SF > 4500) {
                document.getElementById("darke7").style.opacity = "1";
            }
            if (SF > 5000) {
                document.getElementById("darkq3").style.opacity = "1";
                document.getElementById("darkq1").style.opacity = "0";
            }
            if (SF > 5500) {
                document.getElementById("darkq2").style.opacity = "0";
            }
            if (SF > 6000) {
                document.getElementById("darke2").style.opacity = "0";
                document.getElementById("darkq4").style.opacity = "1";
            }
            if (SF > 6500) {
                document.getElementById("darke3").style.opacity = "0";
                document.getElementById("darkq1").style.opacity = "0";
            }
            if (SF > 7000) {
                document.getElementById("darke6").style.opacity = "0";
                document.getElementById("darkq2").style.opacity = "0";
            }
            if (SF > 7500) {
                document.getElementById("darke7").style.opacity = "0";
            }
            if (SF > 8000) {
                document.getElementById("darkq3").style.opacity = "0";
            }
            if (SF > 8500) {
                document.getElementById("darkq4").style.opacity = "0";
            }
            if (SF > 9000) {
                document.getElementById("darke1").style.opacity = "0";
                document.getElementById("darkblood").style.opacity = "1";
            }
        }
        else if (SF < 15200) {
            SF = scrollY;
            var SF_1 = SF - 8000;
            container.style.transform = "translate(" + -SF_1 + "px , " + SF + "px)";
            if (SF > 12000) {
                document.getElementById("darke4").style.opacity = "0";
            }
            if (SF > 12500) {
                document.getElementById("darke5").style.opacity = "0";
            }
        }
        else if (SF < 19000) {
            SF = scrollY;
            container.style.transform = "translate(" + -7200 + "px , " + SF + "px)";
            if (SF > 16000) {
                document.getElementById("sentiok").style.opacity = "0";
                document.getElementById("sentiok").style.transform = "translate(" + 4050 + "px , " + 400 + "px)";
            }
            if (SF > 17500) {
                document.getElementById("sentimental").style.opacity = "1";
                document.getElementById("sentimental").style.transform = "translate(" + 3650 + "px , " + -100 + "px)";
            }
        }
        else if (SF < 30000) {
            SF = scrollY;
            var SF_2 = SF - 11800;
            container.style.transform = "translate(" + -SF_2 + "px , " + SF + "px)";
        }


        console.log("Scrollfortschritt: "+SF);
    }

});