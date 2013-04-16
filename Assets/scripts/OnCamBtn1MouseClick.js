#pragma strict

var cam1 : Camera; 
var cam2 : Camera; 
var cam3 : Camera; 
 
function Start () { 
   cam1.enabled = true; 
   cam2.enabled = false;
   cam3.enabled = false;  
} 
 
function Update () { 
}



function OnMouseDown(){
   cam1.enabled = true; 
   cam2.enabled = false;
   cam3.enabled = false;  
}
 