#pragma strict


var livesText:UnityEngine.UI.Text;
var healthBar:UnityEngine.UI.Image;

var maxDamage:float = 300;
var currentDamage:float;
var knockback:float;
var lives:int=3;

function FixedUpdate () {
    var lerpSpeed = 3f*Time.deltaTime;
    healthBar.fillAmount = Mathf.Lerp(healthBar.fillAmount,currentDamage/maxDamage,lerpSpeed);
    livesText.text = lives.ToString();
    colorChanger();
    
}

function TakeDamage(damage:int){
    currentDamage-=damage;
    if (currentDamage <=300 && currentDamage>200) {
        knockback = 10.0;
    }else if (currentDamage <=200 && currentDamage>100){
        knockback = 50.0;
    }else{
        knockback = 100.0;
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


function Start () {
	currentDamage=maxDamage;
}
function colorChanger(){
	var hColor:Color = Color.Lerp(Color.red,Color.green,(currentDamage/maxDamage));
	healthBar.color = hColor;
	}
    
