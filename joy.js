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
        if (SF < 1000) {
            SF = scrollY;
            container.style.transform = "translate(" + 0 + "px , " + SF + "px)";
            if (SF > 200){
                document.getElementById("j_startbild").style.opacity = "0";
                document.getElementById("J").style.opacity = "0";
                document.getElementById("j_o").style.opacity = "0";
                document.getElementById("j_Y").style.opacity = "0";
                document.getElementById("j_text1").style.opacity = "0";
                document.getElementById("smoke3").style.transform = "translate(0px, 0px)";
            }
            if (SF > 800){
                document.getElementById("smoke3").style.opacity = "0";
            }
        }
        else if (SF < 30000) {
            SF = scrollY;
            var SF_1 = scrollY - 1000;
            container.style.transform = "translate(" + -SF_1 + "px , " + SF + "px)";

            /*smoke*/
            if (SF > 1100){
                document.getElementById("smoke").style.opacity = "1";
            }

            /* i got bored one day...*/
            if (SF > 7000){
                document.getElementById("j_text3").style.opacity = "1";
            }
            
            if (SF > 8000){
                document.getElementById("j_text3").style.opacity = "0";
            }

            /*"nothing matters"(donat muss noch stoppen, dann scrolt man weter --> die zahl vom weiterscorllen hinein)*/
            if (SF > 9275){

                document.getElementById("nothingM").style.opacity = "0";
            }

            /*if nothng mathers...then*/
            if (SF > 15200){
                document.getElementById("ifNo").style.opacity = "1";
            }

            
            /* we are all small...*/
            if (SF > 20700){

                document.getElementById("stupid").style.opacity = "1";
            }
            
        }
        console.log("Scrollfortschritt: "+SF); 

/*
        //Stopping for Bagel
        else if (SF < 20000) {
            SF = scrollY;
            var SFwidebagel= 1+(SF*0.0005);
            container.style.transform = "translate(" + -10267 + "px , " + SF + "px)";
            document.getElementById("widebagel").style.transform = "translate(0px , 0px) scale("+ SFwidebagel +")";
        }
        

        if (SF < 10000) {
            SF = scrollY;
            var SF_1 = SF - 2000;
            container.style.transform = "translate(" + -SF_1 + "px , " + SF + "px)";
        }
        */
        
    }
    

});





