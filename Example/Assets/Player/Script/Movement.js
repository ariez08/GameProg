#pragma strict

var leftLeg : GameObject;
var rightLeg : GameObject;
var leftLegRB : Rigidbody2D;
var rightLegRB : Rigidbody2D;
var rb : Rigidbody2D;
var lowerArmR : Rigidbody2D;

var seconds : float;
var anim : Animator;
var isOnGround : boolean;
var positionRadius : float;
var ground : LayerMask;
var playerPos : Transform;

@SerializeField
var speed : float = 1.5f;
@SerializeField
var stepWait : float = .5f;
@SerializeField
var jumpForce : float = 10f;


function Start () {
	leftLegRB = leftLeg.GetComponent(Rigidbody2D);
	rightLegRB = rightLeg.GetComponent(Rigidbody2D);
}

function Update () {
	if (Input.GetAxisRaw("Horizontal") != 0)
	{
		if (Input.GetAxisRaw("Horizontal") > 0)
		{
			if (Input.GetKeyDown("s"))
			{
				lowerArmR.AddForce(transform.right * 1000f);
			}
			anim.SetBool("walkRight", true);
			anim.SetBool("walkLeft", false);
			MoveRight(stepWait);
		}
		else
		{
			if (Input.GetKeyDown("s"))
			{
				lowerArmR.AddForce(transform.right * -1000f);
			}

			anim.SetBool("walkRight", false);
			anim.SetBool("walkLeft", true);
			MoveLeft(stepWait);
		}
	}
	else
	{
		anim.Play("idle");
	}

	//Lompat
	isOnGround = Physics2D.OverlapCircle(playerPos.position, positionRadius, ground);
	if (isOnGround == true && Input.GetKeyDown(KeyCode.W))
	{
		rb.AddForce(Vector2.up * jumpForce);
	}

	//Test
	if (Input.GetKeyDown("x"))
	{
		lowerArmR.AddForce(transform.right * -1000f);
	}
}


function MoveRight(seconds) {
	Debug.Log("Kanan");
	leftLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	rightLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
}


function MoveLeft(seconds)
{
	Debug.Log("Kiri");
	rightLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	leftLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
}