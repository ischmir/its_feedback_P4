console.log ("javascript running");

function _(id){
    return document.getElementById(id);
 }
 let droppedIn = false;
 function drag_start(event) {
     event.dataTransfer.dropEffect = "move";
     event.dataTransfer.setData("text", event.target.getAttribute('id') );
 }
 function drag_drop(event) {
     event.preventDefault(); /* Prevent undesirable default behavior while dropping */
     let elem_id = event.dataTransfer.getData("text");
     event.target.appendChild( _(elem_id) );
     _(elem_id).removeAttribute("draggable");
     _(elem_id).style.cursor = "default";
     droppedIn = true;
 }
 function drag_end(event) {
     if(droppedIn == false){
     }
     droppedIn = false;
 }
 function readDropZone(){
     for(let i=0; i < _("drop_zone").children.length; i++){
         alert(_("drop_zone").children[i].id+" is in the drop zone");
     }
     /* Run Ajax request to pass any data to your server */
 }



 let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

Guides.onclick = function() {
    alert('Måske gå over til Feedback?');
  };

  // få knappen, og når brugeren klikker på den så fremfører den "myFunction"
  document.getElementById("myBtn").onclick = function() {myFunction()};

// "myFunction" aktiveres mellem at tilføje og fjerner "show class", hvilket er med for at skjule og vise "dropdown" indholdet

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Godmorgen";
} else if (time < 20) {
  greeting = "Tid til frokost!";
} else {
  greeting = "Godaften";
}
document.getElementById("Morgenmessage").innerHTML = greeting;


// Majas js kode start //
  let divs = ["loginjs", "opretjs"];
  let visibleId = null;
  function show(id) {
    if(visibleId !== id) {
      visibleId = id;
    }
    hide();
    }
  function hide() {
    let div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
    div.style.display = "block";
    } else {
    div.style.display = "none";
    }
  }
}

//login popup//
function validate(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if (username=="admin"&& password=="user"){
  alert("login succesful");
  return false;
}
else{
  alert("login failed")

}
}



//Majas js kode slut //
