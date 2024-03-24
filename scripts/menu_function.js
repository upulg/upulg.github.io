function navFunction() {
    var x = document.getElementById("Topnavbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function subnavFunction() {
    var x = document.getElementById("Subnavbar");
    if (x.className === "subnav") {
        x.className += " responsive";
    } else {
        x.className = "subnav";
    }
}