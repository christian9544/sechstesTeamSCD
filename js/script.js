
function _(selctor){
    return document.querySelector(selctor);
}

function _All(selctor){
  return document.querySelectorAll(selctor);
}

function openNav() {
  _("#myNav").style.height = "100%";
  _("#menuButton").style.opacity = 0;
  _All(".caption").forEach(element => {
    element.style.opacity = 0;
  });
}

function closeNav() {
  _("#myNav").style.height = "0%";
  _("#menuButton").style.opacity = 1;
  _All(".caption").forEach(element => {
    element.style.opacity = 1;
  });
}

_("#menuButton").addEventListener("click", function(){
    openNav();
});

_(".closebtn").addEventListener("click", (event) =>{
    closeNav();
});

_All('.overlay-content a').forEach(link => {
    link.addEventListener("click", function(){
      closeNav();
      _All('.overlay-content a').forEach(link2 => {
        link2.style.fontStyle = "";
      });
      link.style.fontStyle = "italic";
    });
});