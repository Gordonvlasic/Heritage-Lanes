
function BuildEvent() {
    
    var x = document.getElementById("BuildEventInfo");
    var y = document.getElementById("KidsPartiesInfo");
    var z = document.getElementById("NightsOutInfo");
    y.style.display = "none";
    z.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.textAlign = "center";
      x.style.paddingBottom = "50px";
    } else {
      x.style.display = "none";
    }
    
    
}
function NightsOut() {
    
    var x = document.getElementById("NightsOutInfo");
    var y = document.getElementById("KidsPartiesInfo");
    var z = document.getElementById("BuildEventInfo");
    y.style.display = "none";
    z.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.textAlign = "center";
      x.style.paddingBottom = "50px";
    } else {
      x.style.display = "none";
    }
    
}
function KidsParties() {
    
    var x = document.getElementById("KidsPartiesInfo");
    var y = document.getElementById("NightsOutInfo");
    var z = document.getElementById("BuildEventInfo");
    y.style.display = "none";
    z.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      x.style.textAlign = "center";
      x.style.paddingBottom = "50px";
    } else {
      x.style.display = "none";
    }
   
}
function MoreInfo(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function KillModal(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function MenuDropDown()
{
  var x = document.getElementById("listPop");
  var z = document.getElementById("MenuPopoutLogo");
  if (x.className === "listpop") 
  {
    x.className += " responsive";
    z.style.display = "none";
  } 
  else 
  {
    x.className = "listpop";
    z.style.display = "flex";
  }
}
function MenuClose(){
  var x = document.getElementById("MenuCloseDiv");
  if (x.className === "MenuClose") {
    x.style.display = "block";
  }
  else
  {
    x.className = "MenuClose"
    x.style.display = "none"
  }
}
function MenuClose1(){
  var x = document.getElementById("MenuCloseDiv");
  var y = document.getElementById("listPop");
  var z = document.getElementById("MenuPopoutLogo");

  y.className = "listpop";
  x.style.display = "none";
  z.style.display = "flex";

}