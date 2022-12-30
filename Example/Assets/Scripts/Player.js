#pragma strict

var body:Rigidbody2D;
var speed:float ;
var isRight:boolean;
var anim:Animator;
var attack:boolean;

var maxDamage:float = 300;
var currentDamage:float;
var kockback:float;
var lives:int=3;

var jumpForce = 20.0; 
var isGrounded = false; 
var jumps = 2;

var isTouchingFront:boolean;
var frontCheck:Transform;
var wallSlide:boolean;
var slideSpeed:float;

var groundLayer:LayerMask;
var radius:float;
var horizontal:float;

var wallJump:boolean;
var xWalljump:float;
var yWalljump:float;
var WalljumpTime:float;

var livesText:UnityEngine.UI.Text;
var healthBar:UnityEngine.UI.Image;
function Start () {
	currentDamage=maxDamage;
	healthBar = GetComponent(UnityEngine.UI.Image);
    livesText = GetComponent(UnityEngine.UI.Text);
    isRight=true;

	body = GetComponent(Rigidbody2D);
	anim = GetComponent(Animator);
}
function Update(){
    HandleInput();
	var lerpSpeed = 3f*Time.deltaTime;
	healthBar.fillAmount = Mathf.Lerp(healthBar.fillAmount,currentDamage/maxDamage,lerpSpeed);
	livesText.text = lives.ToString();
	colorChanger();
}


function colorChanger(){
	var hColor:Color = Color.Lerp(Color.red,Color.green,(currentDamage/maxDamage));
	healthBar.color = hColor;
	}
function FixedUpdate () {
    horizontal = Input.GetAxis('Horizontal');
	HandleMovement(horizontal);
	flip(horizontal);
    HandleAttack();
    setJumpForce();
    Reset();
}


function HandleMovement(horizontal:float) {
    body.velocity = new Vector2(horizontal*speed,body.velocity.y);
    anim.SetFloat("Speed",Mathf.Abs(horizontal)); 
}
function HandleAttack(){
    if (attack){
        anim.SetTrigger("Attack");
    }
}
function HandleInput() {
    if(Input.GetKeyDown(KeyCode.Space)){       
        attack = true;
    }
    if (Input.GetKeyDown(KeyCode.UpArrow) && jumps > 0) {
        body.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
        
       
        jumps--;
        isGrounded = false;
       isTouchingFront =  Physics2D.OverlapCircle(frontCheck.position,radius,groundLayer);
        Debug.Log(isTouchingFront);


       if(isTouchingFront==true&&isGrounded==false&& horizontal!=0){
        wallSlide = true;
       }else{
        wallSlide=false;
       }

       if(wallSlide){
        body.velocity = new Vector2(body.velocity.x,Mathf.Clamp(body.velocity.y,-slideSpeed,float.MaxValue));
       }

       if(Input.GetKeyDown(KeyCode.UpArrow) && wallSlide==true){
        wallJump=true;
        Invoke("resetWallJumps",WalljumpTime);
        // resetWallJumps();
       }

       if (wallJump==true) {
        body.velocity=new Vector2(xWalljump*-horizontal,yWalljump);
       }
      }
}
function setJumpForce(){
    if (jumps==1) {
        jumpForce = 30;
    }else if (jumps ==2) {
        jumpForce = 40;
    }
}

function OnCollisionEnter2D(collision: Collision2D) {
    if (collision.gameObject.layer == 8)
    {
        isGrounded = true;    
    }

      if (collision.gameObject.tag == "Ground") {
        isGrounded = true;
        jumps = 2;    
      }
    }

function flip(horizontal:float) {
    if (horizontal>0&&!isRight||horizontal<0&& isRight ){
        isRight=!isRight;
       var theScale:Vector3 =transform.localScale;
        theScale.x*=-1;
        transform.localScale=theScale;
    }
}
function resetWallJumps() {
    wallJump=false;
}
function Reset(){
    attack = false;
}


function TakeDamage(damage:int){
    currentDamage-=damage;
    if (currentDamage <=300 && currentDamage>200) {
        kockback = 10.0;
    }else if (currentDamage <=200 && currentDamage>100){
        kockback = 50.0;
    }else{
        kockback = 100.0;
    }
    Debug.Log(currentDamage);
}
function TakeLives() {
    if(lives>0){
        lives-=1;
    }else{
        Debug.Log("dead");
    }
}
