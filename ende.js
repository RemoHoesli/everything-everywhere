document.addEventListener('DOMContentLoaded', function () {


        
        var timerun = 0;
        var timer = setInterval(wartenbiszrugg, 500);
        function wartenbiszrugg() {
            timerun += 0.5;
            console.log("timerun: "+timerun);

            if (timerun > 2) {
                document.getElementById("endquote").innerHTML = 'Go start a new journey or something idk';
            }
            if (timerun > 3) {
                document.getElementById("endevelyn").style.transform = "translate(-9vw, 100vh) rotate(-10deg)";
            }
            if (timerun > 3.5) {
                document.getElementById("endwaymond").style.transform = "translate(6.5vw, 100vh) rotate(7deg)";
            }
            if (timerun > 4) {
                document.getElementById("endjobu").style.transform = "translate(0, 100vh) scale(1.3) rotate(5deg)";
            }

            if (timerun > 10) {
                clearTimeout(timer);
                timerun = 0;
                window.open("https://remohoesli.github.io/everything-everywhere/ende.html", "_self");
            }
            
        }


});