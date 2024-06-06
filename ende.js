document.addEventListener('DOMContentLoaded', function () {


        
        var timerun = 0;
        var timer = setInterval(wartenbiszrugg, 500);
        function wartenbiszrugg() {
            timerun += 0.5;
            console.log("timerun: "+timerun);

            if (timerun > 0) {
                document.getElementById("titleende").style.opacity = "1";
                document.getElementById("loading").style.transform = "translateX(0px)"
            }
            if (timerun > 2) {
                document.getElementById("endevelyn").style.opacity = "1";
                document.getElementById("endquote").style.opacity = "1";
            }
            if (timerun > 2.5) {
                document.getElementById("endwaymond").style.opacity = "1";
            }
            if (timerun > 3) {
                document.getElementById("endjobu").style.opacity = "1";
            }
            if (timerun > 6) {
                document.getElementById("endevelyn").style.transform = "translate(-9vw, 100vh) rotate(-10deg)";
            }
            if (timerun > 6.5) {
                document.getElementById("endwaymond").style.transform = "translate(6.5vw, 100vh) rotate(7deg)";
            }
            if (timerun > 7) {
                document.getElementById("endjobu").style.transform = "translate(0, 100vh) scale(1.3) rotate(5deg)";
            }
            if (timerun > 9) {
                document.getElementById("titleende").style.opacity = '0';
                document.getElementById("titleende").style.transform = "translateY(20vh)";
            }
            if (timerun > 10) {
                document.getElementById("titleende2").style.opacity = '1';
            }
            if (timerun > 13) {
                document.getElementById("endquote").style.opacity = '0';
            }
            if (timerun > 14) {
                document.getElementById("endquote2").style.opacity = '1';
            }

            if (timerun > 20) {
                clearTimeout(timer);
                timerun = 0;
                window.open("https://remohoesli.github.io/everything-everywhere/index.html", "_self");
            }
            
        }


});