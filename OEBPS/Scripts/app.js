(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]"),ecString,ecContent,collapseBtn;

    function ecToggle(current) {
        var isCollapsed = current.getAttribute("aria-expanded") === "false";
        var currentString = current.getAttribute("aria-controls");
        var currentContent = document.getElementById(currentString);
        if(isCollapsed) {
            current.setAttribute("aria-expanded", "true");
            currentContent.classList.replace("ec_collapsed", "ec_expanded");
        } else {
            current.setAttribute("aria-expanded", "false");
            currentContent.classList.replace("ec_expanded", "ec_collapsed");
        }
    }

    function ecCollapse(current) {
        var currentString = current.getAttribute("name");
        var currentToggle = document.querySelector("[aria-controls='" +  currentString + "']");
        var currentContent = document.getElementById(currentString);

        currentToggle.setAttribute("aria-expanded", "false");
        currentContent.classList.replace("ec_expanded", "ec_collapsed");

    }

    toggleBtns.forEach(function(btn) {
        ecString = btn.getAttribute("aria-controls");
        ecContent = document.querySelector("#"+ ecString);
        collapseBtn = document.querySelector("[name='" + ecString + "']");

        ecContent.classList.add("ec_collapsed");
        btn.addEventListener("click", function() {ecToggle(this)}, false);
        collapseBtn.addEventListener("click", function() {ecCollapse(this)}, false);

   });       
 
})();
