(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]");

    var btnObj, btnString, ecContent, btnToggle, btnCollapse;

    toggleBtns.forEach(function (btnToggle) {
        btnCollapse = document.querySelector(`[name='${btnToggle.getAttribute("aria-controls")}']`);
        ecInitCollapse(btnToggle);
        btnToggle.addEventListener("click", function (e) {
            ecToggle(e)
        }, false);
        btnCollapse.addEventListener("click", function (e) {
            ecCollapse(e)
        }, false);
    });

    function ecToggle(current) {
        btnObj = current.target;
        btnString = btnObj.getAttribute("aria-controls");
        ecContent = document.getElementById(btnString);
        if (btnObj.getAttribute("aria-expanded") === "false") {
            btnObj.setAttribute("aria-expanded", "true");
            ecContent.style.display = "block";
        } else {
            btnObj.setAttribute("aria-expanded", "false");
            ecContent.style.display = "none";
        }
    }

    function ecCollapse(current) {
        btnObj = current.target;
        btnString = btnObj.getAttribute("name");
        btnToggle = document.querySelector(`[aria-controls='${btnString}']`);
        ecContent = document.getElementById(btnString);
        ecContent.style.display = "none";
        btnToggle.setAttribute("aria-expanded", "false");
    }

    function ecInitCollapse(obj) {
        btnString = obj.getAttribute("aria-controls");
        ecContent = document.getElementById(btnString);
        ecContent.style.display = "none";
    }

})();
