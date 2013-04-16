#pragma strict

var cam1 : Camera; 
var cam2 : Camera; 
var cam3 : Camera; 

function OnMouseDown(){
   cam1.enabled = false; 
   cam2.enabled = false;
   cam3.enabled = true; 
}
 