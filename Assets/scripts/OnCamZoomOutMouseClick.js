#pragma strict
var cam : Camera;

function Update(){
	cam = Camera.main;
} 

function OnMouseDown(){
   cam.fieldOfView += 10f; 
   if(cam.fieldOfView > 70){
     cam.fieldOfView = 70;
   }
}