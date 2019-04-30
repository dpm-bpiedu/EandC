(function expandCollapse() {

  var ecBoxes = document.querySelectorAll("[data-ec='container']"),
      ecString,
      ecContent,
      btn;

  function makeBtn(idString) {    
    btn = document.createElement("button");
    console.log(btn);
    return btn;
  }

  ecBoxes.forEach(function(ecBox, index) {
    ecString = "ecbox_" + (index + 1);
    ecContent = ecBox.querySelector("div");
    ecContent.id = ecString;
    makeBtn(ecString);

  });

})();
