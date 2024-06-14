document.addEventListener('DOMContentLoaded', function () {


    const container = document.getElementById("container");
    const responsive = document.getElementById("responsive");
    document.getElementById("sentijoy").volume = 0.0;
    document.getElementById("sentifather").volume = 0.0;
    document.getElementById("sentiwaymond").volume = 0.0;


 
    var SF = 0;

    var scalefactor = window.innerHeight/980;
    responsive.style.transform = "translate(" + 0 + "px , " + -SF*(scalefactor-1) + "px) scale("+ scalefactor +")";
            
        
  
    //inst for future self: id individual, progress global, horizontal scroll = -scrollY, vertical scroll = scrollY
    //SF für Scroll Fortschritt

        var timer = setInterval(wartenbiszrugg, 10);
        function wartenbiszrugg() {
            SF += 5;
            console.log("SF: "+SF)
        
        responsive.style.transform = "translate(" + 0 + "px , " + -0*(scalefactor-1) + "px) scale("+ scalefactor +")";
        if (SF < 1700) {

            container.style.transform = "translate(" + -SF + "px , " + 0 + "px)";
            
            document.getElementById("darke1").style.opacity = "0";
            document.getElementById("darke2").style.opacity = "0";
            document.getElementById("darke3").style.opacity = "0";
            document.getElementById("darke4").style.opacity = "0";
            document.getElementById("darke5").style.opacity = "0";
            document.getElementById("darke6").style.opacity = "0";
            document.getElementById("darke7").style.opacity = "0";
            document.getElementById("darke8").style.opacity = "0";
            document.getElementById("darke9").style.opacity = "0";
            document.getElementById("darke10").style.opacity = "0";
            document.getElementById("darke11").style.opacity = "0";
            document.getElementById("darkq1").style.opacity = "0";
            document.getElementById("darkq2").style.opacity = "0";
            document.getElementById("darkq3").style.opacity = "0";
            document.getElementById("darkq4").style.opacity = "0";
            document.getElementById("darkblood").style.opacity = "0";
        }
        else if (SF < 11000) {

            container.style.transform = "translate(" + -1700 + "px , " + 0 + "px)";
            if (SF > 2500) {
                document.getElementById("darke1").style.opacity = "1";
            }
            if (SF > 3000) {
                document.getElementById("darke3").style.opacity = "1";
                document.getElementById("darke4").style.opacity = "1";
                document.getElementById("darke5").style.opacity = "1";
                document.getElementById("darkq1").style.opacity = "1";
                document.getElementById("darke8").style.opacity = "1";
                document.getElementById("darke9").style.opacity = "1";
                document.getElementById("darke10").style.opacity = "1";
                document.getElementById("darke11").style.opacity = "1";
            }
            if (SF > 3500) {
                document.getElementById("darke6").style.opacity = "1";
                document.getElementById("darkq2").style.opacity = "1";
            }
            if (SF > 4000) {
                document.getElementById("darke7").style.opacity = "1";
                document.getElementById("darkq1").style.opacity = "0";
            }
            if (SF > 4500) {
                document.getElementById("darkq3").style.opacity = "1";
                document.getElementById("darke2").style.opacity = "1";
                
            }
            if (SF > 5500) {
                document.getElementById("darkq2").style.opacity = "0";
            }
            if (SF > 6000) {
                document.getElementById("darkq4").style.opacity = "1";
            }
            if (SF > 6500) {
                document.getElementById("darke3").style.opacity = "0";
                document.getElementById("darkq1").style.opacity = "0";
                document.getElementById("darke8").style.opacity = "0";
                document.getElementById("darke9").style.opacity = "0";
            }
            if (SF > 7000) {
                document.getElementById("darke6").style.opacity = "0";
                document.getElementById("darkq2").style.opacity = "0";
            }
            if (SF > 7500) {
                document.getElementById("darke7").style.opacity = "0";
                document.getElementById("darke2").style.opacity = "0";
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
        else if (SF < 16500) {

            var SF_1 = SF - 9300;
            container.style.transform = "translate(" + -SF_1 + "px , " + 0 + "px)";
            if (SF > 12500) {
                document.getElementById("darke4").style.opacity = "0";
            }
            if (SF > 13000) {
                document.getElementById("darke5").style.opacity = "0";
            }
            if (SF > 13600) {
                document.getElementById("darke10").style.opacity = "0";
                document.getElementById("darke11").style.opacity = "0";
            }
        }
        else if (SF < 19000) {

            container.style.transform = "translate(" + -7200 + "px , " + 0 + "px)";
            if (SF > 16000) {
                document.getElementById("sentiok").style.opacity = "0";
                document.getElementById("sentiok").style.transform = "translate(" + 4050 + "px , " + 400 + "px)";
            }
            if (SF > 17500) {
                document.getElementById("sentimental").style.opacity = "1";
                document.getElementById("sentimental").style.transform = "translate(" + 3800 + "px , " + -100 + "px)";
                document.getElementById("sentistext").style.opacity = "1";
                document.getElementById("sentijoy").style.opacity = "1";
                document.getElementById("sentifather").style.opacity = "1";
                document.getElementById("sentiwaymond").style.opacity = "1";
                document.getElementById("sentiring720").style.animationName = "ring720";
                document.getElementById("sentiring405f").style.animationName = "ring405f";
                document.getElementById("sentiring405w").style.animationName = "ring405w";
            }
            document.getElementById("sjoyclick").addEventListener("click", function() {
                document.getElementById("sentijoy").volume = 1;
                document.getElementById("sentifather").volume = 0;
                document.getElementById("sentiwaymond").volume = 0;
                document.getElementById("sentistext").style.opacity = "0";
                document.getElementById("sentistextjoy").style.opacity = "1";
                document.getElementById("sentistextfather").style.opacity = "0";
                document.getElementById("sentistextwaymond").style.opacity = "0";
            });
            document.getElementById("sfatherclick").addEventListener("click", function() {
                document.getElementById("sentijoy").volume = 0;
                document.getElementById("sentifather").volume = 1;
                document.getElementById("sentiwaymond").volume = 0;
                document.getElementById("sentistext").style.opacity = "0";
                document.getElementById("sentistextjoy").style.opacity = "0";
                document.getElementById("sentistextfather").style.opacity = "1";
                document.getElementById("sentistextwaymond").style.opacity = "0";
            });
            document.getElementById("swaymondclick").addEventListener("click", function() {
                document.getElementById("sentijoy").volume = 0;
                document.getElementById("sentifather").volume = 0;
                document.getElementById("sentiwaymond").volume = 1;
                document.getElementById("sentistext").style.opacity = "0";
                document.getElementById("sentistextjoy").style.opacity = "0";
                document.getElementById("sentistextfather").style.opacity = "0";
                document.getElementById("sentistextwaymond").style.opacity = "1";
            });
        }
        else if (SF < 27300) {
   
            var SF_2 = SF - 11800;
            container.style.transform = "translate(" + -SF_2 + "px , " + 0 + "px)";
            document.getElementById("sentijoy").volume = 0;
            document.getElementById("sentifather").volume = 0;
            document.getElementById("sentiwaymond").volume = 0;
            if (SF > 22500) {
                document.getElementById("fightf2").style.opacity = "1";
            }
            if (SF > 25500) {
                document.getElementById("fightf5").style.opacity = "1";
                document.getElementById("fightf5").style.transform = "translate(" + 7350 + "px , " + 200 + "px)";
            }
        }
        else if (SF < 30500) {

            container.style.transform = "translate(" + -15500 + "px , " + 0 + "px)";
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
        else if (SF < 33800) {

            var SF_3 = SF - 15000;
            container.style.transform = "translate(" + -SF_3 + "px , " + 0 + "px)";

            document.getElementById("hotdogbutton3").addEventListener("click", function() {
                document.getElementById("hotdoghd3").style.animationName = "hddance";
                console.log("clicked!");
            });
        }
        else if (SF > 33800) {

            container.style.transform = "translate(" + -18800 + "px , " + 0 + "px)";
            
            document.getElementById("hotdoghd01").addEventListener("click", function() {
                document.getElementById("hotdoghd01").style.transform = "translate(" + 10600 + "px , " + -800 + "px) scale(0.8)";
            });
            
            document.getElementById("hotdoghd02").addEventListener("click", function() {
                document.getElementById("hotdoghd02").style.transform = "translate(" + 10650 + "px , " + -350 + "px) scale(0.8)";
                var timerun = 0;
                var timer = setInterval(wartenbiswiiterleite, 1000);
                function wartenbiswiiterleite() {
                    timerun += 1;
                    console.log("timerun: "+timerun);
                    if (timerun > 1) {
                        clearTimeout(timer);
                        timerun = 0;
                        window.open("https://remohoesli.github.io/everything-everywhere/ende.html", "_self");
                    }
                }
            });
            
        }
    }

        console.log("Scrollfortschritt: "+SF);
    

});