(function monitorSize() {
    var w = window,
        d = document,
        b = d.querySelector("body"),
        x = w.innerWidth,
        y = w.innerHeight,
        sW = d.getElementById("screenWidth"),
        sH = d.getElementById("screenHeight");

    function checkDimensions(e) {
        sW.textContent = e.target.innerWidth;
        sH.textContent = e.target.innerHeight;
    }

    function initDimensions() {
        sW.textContent = x;
        sH.textContent = y;
    }

    initDimensions();

    window.addEventListener("resize", checkDimensions, false);
    
})();
