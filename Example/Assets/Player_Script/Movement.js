#pragma strict

var leftLeg : GameObject;
var rightLeg : GameObject;
var leftLegRB : Rigidbody2D;
var rightLegRB : Rigidbody2D;
var lowerArmR : Rigidbody2D;
var lowerArmL : Rigidbody2D;
var rb : Rigidbody2D;

var jumpForce : float;
var jumps : int;
var anim : Animator;
var isOnGround : boolean;
var ground : LayerMask;
var positionRadius : float;
var playerPos : Transform;

@SerializeField
var speed : float = 1.5f;
@SerializeField
var stepWait : float = .5f;
@SerializeField
var jumpsF : int = 2;
@SerializeField
var jumpForceF : float = 40;

var livesText:UnityEngine.UI.Text;
var healthBar:UnityEngine.UI.Image;

var maxDamage:float = 300;
var currentDamage:float;
var kockback:float;
var lives:int=3;

function Start () {
	currentDamage=maxDamage;
	healthBar = GetComponent(UnityEngine.UI.Image);
    livesText = GetComponent(UnityEngine.UI.Text);
	leftLegRB = leftLeg.GetComponent(Rigidbody2D);
	rightLegRB = rightLeg.GetComponent(Rigidbody2D);
}

function Update () {
	if (Input.GetAxisRaw("Horizontal") != 0)
	{
		if (Input.GetAxisRaw("Horizontal") > 0)
		{
			if (Input.GetKeyDown(KeyCode.S))
			{
				lowerArmR.AddForce(transform.right * 1000);
			}
			anim.Play("walk_right");
			MoveRight(stepWait);
		}
		else
		{
			if (Input.GetKeyDown(KeyCode.S))
			{
				lowerArmL.AddForce(transform.right * -1000);
			}
			anim.Play("walk_left");
			MoveLeft(stepWait);
		}
	}
	else
	{
		anim.Play("idle");
	}

	//Attack
	if (Input.GetKeyDown(KeyCode.Q))
	{
		lowerArmL.AddForce(transform.right * -1000);
	}
	if (Input.GetKeyDown(KeyCode.E))
	{
		lowerArmR.AddForce(transform.right * 1000);
	}

	//Jump
	isOnGround = Physics2D.OverlapCircle(playerPos.position, positionRadius, ground);
	if(isOnGround){
		jumps=jumpsF;
	}
	if ((Input.GetKeyDown(KeyCode.Space)) && jumps > 0)
	{
	 	jumps--;
		rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
		
	}
}
function FixedUpdate () {
	var lerpSpeed = 3f*Time.deltaTime;
	healthBar.fillAmount = Mathf.Lerp(healthBar.fillAmount,currentDamage/maxDamage,lerpSpeed);
	livesText.text = lives.ToString();
	colorChanger();
    setJumpForce();

}
function setJumpForce(){
    if (jumps==1) {
        jumpForce = jumpForceF-10;
    }else if (jumps==2) {
        jumpForce = jumpForceF;
    }
}
function colorChanger(){
	var hColor:Color = Color.Lerp(Color.red,Color.green,(currentDamage/maxDamage));
	healthBar.color = hColor;
	}

function MoveRight(seconds) {
	leftLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	rightLegRB.AddForce(Vector2.right * (speed*1000) * Time.deltaTime);
}


function MoveLeft(seconds)
{
	rightLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
	return new WaitForSeconds(seconds);
	leftLegRB.AddForce(Vector2.left * (speed*1000) * Time.deltaTime);
}


function TakeLives() {
    if(lives>0){
        lives-=1;
    }else{
        Debug.Log("dead");
    }
}