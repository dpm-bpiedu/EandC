(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]");
    var stringStem = "ecbox_";
    var isCollapsed, currentString, currentContent, currentToggle, ecString,ecContent,collapseBtn;

    function ecToggle(currentObj, index) {
        isCollapsed = currentObj.getAttribute("aria-expanded") === "false";
        currentString = stringStem + (++index);
        currentContent = document.getElementById(currentString);
        if(isCollapsed) {
            currentObj.setAttribute("aria-expanded", "true");
            currentContent.classList.replace("ec_collapsed", "ec_expanded");
        } else {
            currentObj.setAttribute("aria-expanded", "false");
            currentContent.classList.replace("ec_expanded", "ec_collapsed");
        }
    }

    function ecCollapse(current, index) {
        currentString = stringStem + (++index);
        currentToggle = document.querySelector("[aria-controls='" +  currentString + "']");
        currentContent = document.getElementById(currentString);

        currentToggle.setAttribute("aria-expanded", "false");
        currentContent.classList.replace("ec_expanded", "ec_collapsed");

    }

    toggleBtns.forEach(function(btn, index) {
        ecString = btn.getAttribute("aria-controls");
        ecContent = document.querySelector("#"+ ecString);
        collapseBtn = document.querySelector("[name='" + ecString + "']");

        ecContent.classList.add("ec_collapsed");
        btn.addEventListener("click", function() {ecToggle(this, index)}, false);
        collapseBtn.addEventListener("click", function() {ecCollapse(this, index)}, false);

   });       
 
})();
