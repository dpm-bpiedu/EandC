(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]");
    var collapseBtns = document.querySelectorAll("[name^='ecbox']");
    var ecContentItems = document.querySelectorAll("[id^=ecbox]");

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

    ecContentItems.forEach(function(item) {
        item.classList.add("ec_collapsed");
    });

    toggleBtns.forEach(function(btn) {
         btn.addEventListener("click", function() {ecToggle(this)}, false);
    });
    
    collapseBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {ecCollapse(this)}, false);
    });     
 
})();
