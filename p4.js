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