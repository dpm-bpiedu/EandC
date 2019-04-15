/*
No jquery
*/

document.addEventListener('DOMContentLoaded', function() {

    var ecBoxes = document.querySelectorAll(".ecBox");    
    
    ecBoxes.forEach(function(ecBox, index) {
        ecBox.classList.add("ec_hidden");        
        ecBox.addEventListener('click', function() {
            if(ecBox.classList.contains("ec_hidden")) {
                ecBox.classList.replace("ec_hidden", "ec_visible");
            } else {
                ecBox.classList.replace("ec_visible", "ec_hidden");
            }
        });
    });
 
});

