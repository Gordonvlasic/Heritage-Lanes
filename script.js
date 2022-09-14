
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
  if (x.className === "listpop") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "listpop";
  }
}
$(document).ready(function(){
  if(window.innerWidth < 768){
    $('.listpop').addClass('listpop').removeClass('responsive');
  }

});
