#pragma strict

var prefab : GameObject;
var spawnPoint : Vector2;
var instance : GameObject;
var body : Rigidbody2D;
var head : Rigidbody2D;
var gameover:GameOver;
function Start () {
	
}

function Update () {
	Respawn();
}

function Respawn()
{
	var playerPoint : Vector3 = Camera.main.WorldToScreenPoint(body.transform.position);
	if (playerPoint.y< -20 || playerPoint.y > Screen.height+20)
	{
		var health : Health2 = head.GetComponent.<Health2>();
		if (health.lives>0){
			health.TakeLives();
			health.currentDamage = health.maxDamage;
			Debug.Log("Respawn");
			var insTrans = instance.transform;
			var count = insTrans.childCount;
			for (var i = 0; i < count; i++)
	   	 	{
	        	var child = insTrans.GetChild(i).gameObject;
	        	child.GetComponent(Rigidbody2D).velocity = Vector2.zero;
				child.transform.position = spawnPoint;
	    	}
	    }else{
	    gameover.Setup();
	    }
    }
}