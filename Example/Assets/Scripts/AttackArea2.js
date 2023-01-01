		#pragma strict

var hand : Rigidbody2D;
 var enemyRigidbody : Rigidbody2D;
var knockbackForce : float ;
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
  //enemies.GetComponent(SecondPlayer).TakeDamage(20);
 
function OnTriggerEnter2D(col : Collider2D) 
{



  if (col.gameObject.tag == "Player"){
  Debug.Log("haha");
     if (col.GetComponent.<Health>() != null)
{
 
     var health : Health = col.GetComponent.<Health>();
    health.TakeDamage(40);
        knockbackForce = health.kockback;
         
        var knockbackDirection : Vector2 = transform.position - transform.position;
        Debug.Log(knockbackDirection);
        knockbackDirection.Normalize();
        enemyRigidbody.AddForce(knockbackDirection * knockbackForce, ForceMode2D.Impulse);
}
  }
 
}
