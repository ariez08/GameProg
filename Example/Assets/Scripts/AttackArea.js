﻿		#pragma strict

var hand : Rigidbody2D;
 var enemyRigidbody : Rigidbody2D;
var knockbackForce : float ;
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
  //enemies.GetComponent(SecondPlayer).TakeDamage(20);
 
function OnTriggerEnter2D(col : Collider2D) 
{



  if (col.gameObject.tag == "SecondPlayer"){
  Debug.Log("haha");
     if (col.GetComponent.<Health2>() != null)
{
 
     var health : Health2 = col.GetComponent.<Health2>();
    health.TakeDamage(40);
        knockbackForce = health.kockback;
         
        var knockbackDirection : Vector2 = transform.position - transform.position;
        Debug.Log(knockbackDirection);
        knockbackDirection.Normalize();
        enemyRigidbody.AddForce(knockbackDirection * knockbackForce, ForceMode2D.Impulse);
}
  }
 
}
