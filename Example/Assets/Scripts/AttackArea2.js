#pragma strict

var enemyRigidbody : Rigidbody2D;
var knockbackForce : float ;
var otherRigidbody : Rigidbody2D;
function Update() 
{
   if (Input.GetKeyDown(KeyCode.U))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
	  if (Input.GetKeyUp(KeyCode.U))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
  if (Input.GetKeyDown(KeyCode.O))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;

	}
	  if (Input.GetKeyUp(KeyCode.O))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
}
 
 
function OnTriggerEnter2D(col : Collider2D) 
{
	if (col.gameObject.tag == "Player"){
	otherRigidbody = col.gameObject.GetComponent(Rigidbody2D);

    	if (col.GetComponent.<Health>() != null)
		{
			var health : Health = col.GetComponent.<Health>();
    		health.TakeDamage(40);
        	knockbackForce = health.knockback;
         	
		}
		if(otherRigidbody!= null){

		var oppositeDirection = new Vector2(-(Mathf.Sign(transform.position.x - otherRigidbody.transform.position.x)), 0);
        	otherRigidbody.AddForce(oppositeDirection* knockbackForce, ForceMode2D.Impulse);
		}
  	}
}
