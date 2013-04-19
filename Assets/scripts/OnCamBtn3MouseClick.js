#pragma strict

var cam1 : Camera; 
var cam2 : Camera; 
var cam3 : Camera; 

private var tex_unpressed:Texture2D;
private var tex_pressed:Texture2D;

function Start () { 

	tex_unpressed = Resources.Load("buttons_cam3") as Texture2D;
	tex_pressed = Resources.Load("buttons_cam3_pressed") as Texture2D;
	
	this.guiTexture.texture = tex_pressed;
} 
 
function Update () { 
	if(cam3.active){
		this.guiTexture.texture = tex_pressed;
	} else {
		this.guiTexture.texture = tex_unpressed;
	}
}

function OnMouseDown(){	
	cam1.camera.active = false; 

	cam2.camera.active = false; 
   
	cam3.camera.active = true; 
}