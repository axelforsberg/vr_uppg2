#pragma strict

var gm : GameObject;
private var pos: Vector3;

function Start () {
	pos = new Vector3(2,0,0);
} 
 
function Update () {

}

function OnMouseDown() {
	Instantiate(gm, pos, Quaternion.identity);
	
}