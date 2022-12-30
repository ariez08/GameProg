#pragma strict


var AtkPoint:Transform;
var AtkRange:float=0.5;
var enemyLayer:LayerMask;
var knockbackForce : float ;
function Update () {
    if(Input.GetKeyDown(KeyCode.Q)){
        
        Attack();
    }
  
}
function Attack(){
    
    
    var hitEnemies:Collider2D[] = Physics2D.OverlapCircleAll(AtkPoint.position,AtkRange,enemyLayer);

    for each (var enemies : Collider2D in hitEnemies) {
      Debug.Log("hit");
      //enemies.GetComponent(SecondPlayer).TakeDamage(20);
     // knockbackForce = enemies.GetComponent(SecondPlayer).kockback;
        // var enemyRigidbody : Rigidbody2D = enemies.GetComponent(Rigidbody2D);
        // var knockbackDirection : Vector2 = enemies.transform.position - transform.position;
        // knockbackDirection.Normalize();
        // enemyRigidbody.AddForce(knockbackDirection * knockbackForce, ForceMode2D.Impulse);
      };
    


} 


function OnDrawGizmosSelected(){
    if(AtkPoint==null){
        return ;
    }
    Gizmos.DrawWireSphere(AtkPoint.position,AtkRange);
}