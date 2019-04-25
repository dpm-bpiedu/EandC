(function expandCollapse() {

    var toggleBtns = document.querySelectorAll("[aria-expanded][aria-controls]");
    var collapseBtns = document.querySelectorAll("[name^='ecbox']");
    var ecContentItems = document.querySelectorAll("[id^=ecbox]");

    function ecToggle(eventTarget, ecContent) {
        var isCollapsed = eventTarget.getAttribute("aria-expanded") === "false";
        console.log("Toggle: ", ecContent); 
        console.log("target: ", eventTarget);
        
        if(isCollapsed) {
            eventTarget.setAttribute("aria-expanded", "true");
            ecContent.classList.replace("ec_collapsed", "ec_expanded");
        } else {
            eventTarget.setAttribute("aria-expanded", "false");
            ecContent.classList.replace("ec_expanded", "ec_collapsed");
        }  
             
    }

    function ecCollapse(eventTarget, collapseContent, toggleBtn) {    
        console.log("Collapse: ", collapseContent);
        collapseContent.classList.replace("ec_expanded", "ec_collapsed");       
        toggleBtn.setAttribute("aria-expanded", "false");        
    }

    ecContentItems.forEach(function(item, index) {
        console.log("item: ", index);
        item.classList.add("ec_collapsed");
    });

    toggleBtns.forEach(function(btn, index) {
        console.log("toggleBtn: ", index);
        var toggleString = btn.getAttribute("aria-controls");
        var toggleContent = document.getElementById(toggleString);
        btn.addEventListener("click", function(e) {ecToggle(e.target, toggleContent)}, false);
    });
    
    collapseBtns.forEach(function(btn, index) {
        console.log("collapseBtn: ", index);
        var collapseString = btn.getAttribute("name");
        var collapseContent = document.getElementById(collapseString); 
        var toggleBtn = document.querySelector("[aria-controls='" + collapseString + "']")       
        btn.addEventListener("click", function(e) {ecCollapse(e.target, collapseContent, toggleBtn)}, false);
    });     
 
})();
