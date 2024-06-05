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
        else if (SF < 27300) {
            SF = scrollY;
            var SF_2 = SF - 11800;
            container.style.transform = "translate(" + -SF_2 + "px , " + SF + "px)";
            if (SF > 22500) {
                document.getElementById("fightf2").style.opacity = "1";
            }
            if (SF > 25500) {
                document.getElementById("fightf5").style.opacity = "1";
                document.getElementById("fightf5").style.transform = "translate(" + 7350 + "px , " + 200 + "px)";
            }
        }
        else if (SF < 30500) {
            SF = scrollY;
            container.style.transform = "translate(" + -15500 + "px , " + SF + "px)";
            if (SF > 27500) {
                document.getElementById("hotdoghdsmoke").style.opacity = "1";
                document.getElementById("hotdoghd1").style.transform = "translate(" + 8200 + "px , " + -900 + "px)";
            }
            if (SF > 27800) {
                document.getElementById("hotdoghdfont1").style.opacity = "0";
                document.getElementById("hotdoghd1").style.transform = "translate(" + 8200 + "px , " + 0 + "px)";
            }
            if (SF > 28000) {
                document.getElementById("hotdoghdfont1").style.opacity = "1";
                document.getElementById("hotdoghdfont2").style.opacity = "0";
            }
            if (SF > 28200) {
                document.getElementById("hotdoghdfont2").style.opacity = "1";
                document.getElementById("hotdoghdfont3").style.opacity = "0";
            }
            if (SF > 28400) {
                document.getElementById("hotdoghdfont3").style.opacity = "1";
                document.getElementById("hotdoghdfont4").style.opacity = "0";
            }
            if (SF > 28600) {
                document.getElementById("hotdoghdfont4").style.opacity = "1";
                document.getElementById("hotdoghdfont5").style.opacity = "0";
            }
            if (SF > 28800) {
                document.getElementById("hotdoghdfont5").style.opacity = "1";
                document.getElementById("hotdoghdfont6").style.opacity = "0";
            }
            if (SF > 29000) {
                document.getElementById("hotdoghdfont6").style.opacity = "1";
            }
        }
        else if (SF < 34000) {
            SF = scrollY;
            var SF_3 = SF - 15000;
            container.style.transform = "translate(" + -SF_3 + "px , " + SF + "px)";

            document.getElementById("hotdogbutton3").addEventListener("click", function() {
                document.getElementById("hotdoghd3").style.animationName = "hddance";
            });
        }
        else if (SF > 34000) {
            SF = scrollY;
            container.style.transform = "translate(" + -19350 + "px , " + SF + "px)";

            document.getElementById("hotdoghd02").addEventListener("click", function() {
                document.getElementById("hotdoghd02").style.transform = "translate(" + 10650 + "px , " + -350 + "px) scale(0.8)";
                console.log("clicked!");
            });
            document.getElementById("hotdoghd01").addEventListener("click", function() {
                document.getElementById("hotdoghd01").style.transform = "translate(" + 10600 + "px , " + -800 + "px) scale(0.8)";
            });
        }


        console.log("Scrollfortschritt: "+SF);
    }

});