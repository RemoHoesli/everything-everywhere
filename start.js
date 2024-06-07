document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("box1").addEventListener("click", function() {
        destinationArray = ["https://remohoesli.github.io/everything-everywhere/evelyn.html", "https://blublex.github.io/DIDES_WaymondWang/", "https://remohoesli.github.io/everything-everywhere/joy.html"];
        var num = Math.floor(Math.random() * destinationArray.length);
        document.getElementById("box1").href = destinationArray[num];
    });    
});