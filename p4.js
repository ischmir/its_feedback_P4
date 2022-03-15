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
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
if (username=="tihi37072@edu.ucl.dk"&& password=="1234"){
  alert("login succesful");
  return false;
}
else{
  alert("login failed")
}
}
//Majas js kode slut //

// Abdels kode

let x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// function validateForm(f) {
//   if (f.value == "") {
//      alert("Please enter some text into the feedback field");
//      return false;
//   }
//   else
//      return true;
//   }