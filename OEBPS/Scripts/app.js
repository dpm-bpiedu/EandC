(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]");
    var collapseBtns = document.querySelectorAll("[name^='ecbox']");

    function ecToggle(eventTarget) {
        var isCollapsed = eventTarget.getAttribute("aria-expanded") === "false";
        var btnString = eventTarget.getAttribute("aria-controls");
        var ecContent = document.getElementById(btnString);
        console.log(btnString);
        if(isCollapsed) {
            eventTarget.setAttribute("aria-expanded", "true");
            ecContent.style.display = "block";
        } else {
            eventTarget.setAttribute("aria-expanded", "false");
            ecContent.style.display = "none";
        }        
    }

    function ecCollapse(eventTarget) {
        var btnString = eventTarget.getAttribute("name");
        var ecContent = document.getElementById(btnString);
        var toggleBtn = document.querySelector("[aria-controls='" + btnString + "']");
        ecContent.style.display = "none";
        toggleBtn.setAttribute("aria-expanded", "false");
    }

    toggleBtns.forEach(function(btn, index) {
        console.log("toggleBtn: ", index);
        btn.addEventListener("click", function(e) {ecToggle(e.target)}, false);
    });
    
    collapseBtns.forEach(function(btn, index) {
        console.log("collapseBtn: ", index);
        btn.addEventListener("click", function(e) {ecCollapse(e.target)}, false);
    });     
 
})();
