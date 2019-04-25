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
        console.log("Current: ", current);
        var currentString = current.getAttribute("name");
        var currentToggle = document.querySelector("[aria-controls='" +  currentString + "']");
        var currentContent = document.getElementById(currentString);
        console.log("String: ", currentString);
        console.log("Toggle: ", currentToggle);
        console.log("Content: ", currentContent);
    }

    ecContentItems.forEach(function(item, index) {
        item.classList.add("ec_collapsed");
    });

    toggleBtns.forEach(function(btn, index) {
         btn.addEventListener("click", function() {ecToggle(this)}, false);
    });
    
    collapseBtns.forEach(function(btn, index) {
        btn.addEventListener("click", function() {ecCollapse(this)}, false);
    });     
 
})();
