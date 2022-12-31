#pragma strict

var prefab : GameObject;
var spawnPoint : Vector2;
var instance : GameObject;

function Start () {
	
}

function Update () {
	if (Input.GetKeyDown(KeyCode.R))
	{
		Respawn();
	}
}

function Respawn()
{
	var insTrans = instance.transform;
	var count = insTrans.childCount;
	for (var i = 0; i < count; i++)
    {
        var child = insTrans.GetChild(i).gameObject;
		child.transform.position = spawnPoint;
    }
}