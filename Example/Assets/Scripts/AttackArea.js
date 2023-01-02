#pragma strict
var enemyRigidbody : Rigidbody2D;
var knockForce : float ;
var otherRigidbody : Rigidbody2D;
function Update() 
{
   if (Input.GetKeyDown(KeyCode.Q))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
	  if (Input.GetKeyUp(KeyCode.Q))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
  if (Input.GetKeyDown(KeyCode.E))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;

	}
	  if (Input.GetKeyUp(KeyCode.E))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
}

//enemies.GetComponent(SecondPlayer).TakeDamage(20)
function OnTriggerEnter2D(col : Collider2D) 
{
  	if (col.gameObject.tag == "SecondPlayer")
  	{
	  	Debug.Log("P2 Hit!");
	  	otherRigidbody = col.gameObject.GetComponent(Rigidbody2D);
	    if (col.GetComponent.<Health2>() != null)
		{
			var health : Health2 = col.GetComponent.<Health2>();
	        
	    	health.TakeDamage(40);
	        knockForce = health.knockback;

		}
		if(otherRigidbody!= null){
	
		var oppositeDirection = new Vector2(-(Mathf.Sign(transform.position.x - otherRigidbody.transform.position.x)), 0);
        	otherRigidbody.AddForce(oppositeDirection* knockForce, ForceMode2D.Impulse);
		}
  	}
}

function Knockback (target : GameObject, force : float) {
    var targetPosition = target.transform.position;
    var thisPosition = transform.position;
    
    if (targetPosition.x < thisPosition.x) {
        // Target is to the left of this object
        GetComponent.<Rigidbody2D>().AddForce(Vector2.left * force);
    }
    else {
        // Target is to the right of this object
        GetComponent.<Rigidbody2D>().AddForce(Vector2.right * force);
    }
}
