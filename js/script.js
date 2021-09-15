
function _(selctor){
    return document.querySelector(selctor);
}

function openNav() {
  _("#myNav").style.height = "100%";
}

function closeNav() {
  _("#myNav").style.height = "0%";
}

_("#menuButton").addEventListener("click", function(){
    openNav();
});

_(".closebtn").addEventListener("click", (event) =>{
    closeNav();
});
