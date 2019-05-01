(function expandCollapse() {
  
  function setAttrs(el, attrs) {
    Object.keys(attrs).forEach(function (attr) {
      el.setAttribute(attr, attrs[attr];
    });
  }
                               
  var ecBoxes = document.querySelectorAll("[data-ec='container']"),
      ecString,
      ecContent,
      btn;

  function makeBtn(textString, attrs) {    
    btn = document.createElement("button");
    btnText = document.createTextNode(textString);
    btn.appendChild(btnText);
    setAttrs(btn, attrs);
    // add event listener
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
