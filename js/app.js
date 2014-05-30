var menu, pagina, currentPage;

function slidePageFrom(page, from) {
  // Position the page at the starting position of the animation
   page.className = "page " + from;
  // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
   page.className ="page transition center";
  currentPage.className = "page transition " + (from === "left" ? "right" : "left");
  currentPage = page;
}

var divs = ["p1","p2" ];
function hideAll(){
  for(i=0;i<divs.length;i++){
    document.getElementById(divs[i]).style.display = "none";    
  }
}

function showP1(){
    hideAll();
    document.getElementById("p1").style.display = "block";
}

function showP2(){
    hideAll();
    document.getElementById("p2").style.display = "block";
}

window.onload = function () {

  // aggiungo i listner	
/*
  document.getElementById("menuUsername").addEventListener("click", showHome);
  document.getElementById("bLoginCourier").addEventListener("click", showHomeCourier);
  document.getElementById("btn-Profilo").addEventListener("click", showProfilo);
  document.getElementById("btn-Request2").addEventListener("click", showRequests);
  document.getElementById("btn-About").addEventListener("click", showAbout);
  document.getElementById("prof-bike").addEventListener("click", selectBike);
  document.getElementById("prof-scooter").addEventListener("click", selectScooter);
  document.getElementById("prof-auto").addEventListener("click", selectAuto);
  document.getElementById("prof-treno").addEventListener("click", selectTrain);
  document.getElementById("legprev").addEventListener("click", selectPrev);
  document.getElementById("legnext").addEventListener("click", selectNext);
  document.getElementById("leg-accetta").addEventListener("click", doAccetta);
  document.getElementById("bContattaRitiro").addEventListener("click", showCommunication);
  document.getElementById("bContattaConsegna").addEventListener("click", showCommunication);
  document.getElementById("bChiudiComunica").addEventListener("click", showDetails);
  document.getElementById("bStatus").addEventListener("click", showSignature);
  document.getElementById("bFirma").addEventListener("click", doChangeStatus);
*/


menu = document.getElementById("menu");
pagina = document.getElementById("pagina");
currentPage = pagina;
 
 hideAll();
  showP1();
}

