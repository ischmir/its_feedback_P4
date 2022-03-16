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
     event.preventDefault();
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
if (username=="tihi37072@edu.ucl.dk"&& password=="1234"){
  alert("login succesful");
  return false;
}
else{
  alert("login failed")

}
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*for hvert element med class custom-select*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for hvert element, lav en ny div*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for hvert element, lav en ny div som skal indeholde option listen*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for hver option i det originale select element, lav en ny div som virker som option item*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
    /*når et item er klikket på opdater den originale box og selected item.*/
        var y, i, k, s, h, sl, yl;
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
      /*Når select box er klikket luk alle andre boxe*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /* function som lukker alle andre kasser undtagen den nuværdende.*/
  var x, y, i, xl, yl, arrNo = [];
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
/*lukker alle drop down menuer hvis der klikkes udenfor området*/
document.addEventListener("click", closeAllSelect);

var count = 2;
var countMax = 5;

function adddt() {
  if(count > countMax)
    return;
  document.getElementById('beskeder-' + count + '').style.display = 'block';
  count++;
}

function message0() {
  let xx = document.getElementById("modtag0");
  if (xx.style.display === "none") {
    xx.style.display = "block";
  } else {
    xx.style.display = "none";
  }
}

function message1() {
  let yy = document.getElementById("modtag1");
  if (yy.style.display === "none") {
    yy.style.display = "block";
  } else {
    yy.style.display = "none";
  }
}

function message2() {
  let zz = document.getElementById("modtag2");
  if (zz.style.display === "none") {
    zz.style.display = "block";
  } else {
    zz.style.display = "none";
  }
}

function message3() {
  let vv = document.getElementById("modtag3");
  if (vv.style.display === "none") {
    vv.style.display = "block";
  } else {
    vv.style.display = "none";
  }
}