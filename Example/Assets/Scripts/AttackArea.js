#pragma strict

var hand : Rigidbody2D;

var knockbackForce : float ;
function Update() 
{
  if (Input.GetKeyDown(KeyCode.Q))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
  if (Input.GetKeyDown(KeyCode.E))
	{
		GetComponent(CircleCollider2D).enabled=!GetComponent(CircleCollider2D).enabled;
	}
}
  //enemies.GetComponent(SecondPlayer).TakeDamage(20);
 
function OnTriggerEnter2D(col : Collider2D) 
{

  if (col.GetComponent.<Health>() != null)
{
    var health : Health = col.GetComponent.<Health>();
    health.TakeDamage(40);
        // knockbackForce = health.kockback;
        // var enemyRigidbody : Rigidbody2D = GetComponent(Rigidbody2D);
        // var knockbackDirection : Vector2 = transform.position - transform.position;
        // knockbackDirection.Normalize();
        // enemyRigidbody.AddForce(knockbackDirection * knockbackForce, ForceMode2D.Impulse);
}

  if (col.gameObject.tag == "SecondPlayer"){
    Debug.Log("Atk");
  }
 
}
