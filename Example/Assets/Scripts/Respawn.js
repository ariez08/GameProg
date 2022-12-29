#pragma strict

var gameOver:GameOver;
function Start () {
	
}

function Update () {
    var camera = Camera.main;

    var viewportPos = camera.WorldToViewportPoint(transform.position);
    if (viewportPos.x < 0 || viewportPos.x > 1 || viewportPos.y < 0 || viewportPos.y > 1) {
        // Player is outside the camera view, so respawn it at a random location
        if (gameObject.CompareTag("Player"))
        {
        if( GetComponent(Player).lives>0){


        	transform.position = GetRandomPosition(new Vector2(-10, 8), new Vector2(10, 8));
          	GetComponent(Player).TakeLives();
        	}else{
        		gameOver.Setup();
        	}
          // The sprite has the "Enemy" tag
        }
      }
      


 
}

function GetRandomPosition (minPos : Vector2, maxPos : Vector2) {
    var x = Random.Range(minPos.x, maxPos.x);
    var y = Random.Range(minPos.y, maxPos.y);
    return new Vector2(x, y);
  }
  
