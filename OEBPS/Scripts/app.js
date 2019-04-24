(function expandCollapse() {

    function setOpenBtns() {

        var btnsOpen = document.querySelectorAll("[aria-expanded][aria-controls]"),
            isCollapsed;

        btnsOpen.forEach(function (btn, index) {
            btn.addEventListener("click", function (e) {

                isCollapsed = btn.getAttribute("aria-expanded") === "false";

                if (isCollapsed) {
                    btn.setAttribute("aria-expanded", "true");
                } else {
                    btn.setAttribute("aria-expanded", "false");
                }

            }, false);
        });
    }

    function setCloseBtns() {

        var btnsClose = document.querySelectorAll("[name^='ecbox']"),
            openBtn;

        btnsClose.forEach(function (btn, index) {
            btn.addEventListener("click", function (e) {

                openBtn = document.querySelector("[aria-controls='" + btn.getAttribute('name') + "']");
                openBtn.setAttribute("aria-expanded", "false");

            }, false);
        });
    }


    document.addEventListener('DOMContentLoaded', function () {

        setOpenBtns();
        setCloseBtns();

    });


})();
