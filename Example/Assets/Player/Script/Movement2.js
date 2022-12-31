#pragma strict

var leftLegRB : Rigidbody2D;
var rightLegRB : Rigidbody2D;
var body : Rigidbody2D;
var lowerArmR : Rigidbody2D;

var seconds : float;
var anim : Animator;
var isOnGround : boolean;
var positionRadius : float = 0.3;
var ground : LayerMask;
var playerPos : Transform;
var stats = 0;
@SerializeField
var speed : float = 1.5f;
@SerializeField
var stepWait : float = .5f;
@SerializeField
var jumpForce : float = 10f;


function Start () {

}

function Update () {
	speed = 0;
	if (Input.GetKey("l"))
	{
		speed=10;
		anim.SetBool("walkRight", true);
		anim.SetBool("walkLeft", false);
		MoveRight(stepWait);
	}

	if (Input.GetKey("j"))
	{
		speed=10;
		anim.SetBool("walkRight", false);
		anim.SetBool("walkLeft", true);
		MoveLeft(stepWait);
	}


	//Jump
	isOnGround = Physics2D.OverlapCircle(playerPos.position, positionRadius, ground);
	if (isOnGround == true && Input.GetKeyDown(KeyCode.Space))
	{
		body.AddForce(Vector2.up * jumpForce);
	}

	//Attack
	if (Input.GetKeyDown("p"))
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