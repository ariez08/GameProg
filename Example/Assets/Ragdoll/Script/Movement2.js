#pragma strict

var leftLegRB : Rigidbody2D;
var rightLegRB : Rigidbody2D;
var body : Rigidbody2D;
var lowerArmR : Rigidbody2D;
var lowerArmL : Rigidbody2D;

var seconds : float;
var anim : Animator;
var isOnGround : boolean;
var positionRadius : float = 0.3;
var ground : LayerMask;
var playerPos : Transform;
var jumps : int;
var jumpForce : float;

@SerializeField
var speed : float = 1.5f;
@SerializeField
var stepWait : float = .5f;
@SerializeField
var jumpsF : int = 2;
@SerializeField
var jumpForceF : float = 2500f;


function Start () {

}

function Update () {
	
	if (Input.GetKey(KeyCode.L))
	{
		if (Input.GetKeyDown(KeyCode.K))
		{
			lowerArmR.AddForce(transform.right * 1000f);
		}
		anim.SetBool("walkRight", true);
		anim.SetBool("walkLeft", false);
		MoveRight(stepWait);
	}
	if (Input.GetKeyUp(KeyCode.L))
	{
		
		anim.SetBool("walkRight", false);
		anim.SetBool("walkLeft", false);

	}

	if (Input.GetKey(KeyCode.J))
	{
		if (Input.GetKeyDown(KeyCode.K))
		{
			lowerArmR.AddForce(transform.right * -1000f);
		}
		anim.SetBool("walkRight", false);
		anim.SetBool("walkLeft", true);
		MoveLeft(stepWait);
	}
	if (Input.GetKeyUp(KeyCode.J))
	{
		
		anim.SetBool("walkRight", false);
		anim.SetBool("walkLeft", false);

	}

	//Jump
	isOnGround = Physics2D.OverlapCircle(playerPos.position, positionRadius, ground);
	if(isOnGround){
		jumps=jumpsF;
	}
	if (Input.GetKeyDown(KeyCode.I) && jumps>0)
	{
		jumps--;
		body.AddForce(transform.up * jumpForce, ForceMode2D.Impulse);
	}

	//Attack
	isOnGround = Physics2D.OverlapCircle(playerPos.position, positionRadius, ground);
	if (isOnGround == true && Input.GetKeyDown(KeyCode.U))
	{
		lowerArmL.AddForce(transform.right * -1000);
	}
	if (Input.GetKeyDown(KeyCode.O))
	{
		lowerArmR.AddForce(transform.right * 1000);
	}
}

function FixedUpdate () {
	
	setJumpForce();
}
function setJumpForce(){
    if (jumps==1) {
        jumpForce = jumpForceF-10;
    }else if (jumps==2) {
        jumpForce = jumpForceF;
    }
}

function MoveRight(seconds) {
	//Debug.Log("Kanan");
	leftLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	rightLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
}


function MoveLeft(seconds)
{
	//Debug.Log("Kiri");
	rightLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	leftLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
}