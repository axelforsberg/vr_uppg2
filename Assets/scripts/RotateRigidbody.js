#pragma strict

function Start () {

}

function Update () {

}

function OnMouseOver() {
    if (Input.GetMouseButton(0)){
    		if ( Input.GetAxis("Mouse ScrollWheel")>0){
    			this.gameObject.transform.Rotate(0,10,0);
    		} else if ( Input.GetAxis("Mouse ScrollWheel")<0){
    			this.gameObject.transform.Rotate(0,-10,0);
    		}
	} else if(Input.GetMouseButton(1)){
		Destroy(this.gameObject);
	}
}