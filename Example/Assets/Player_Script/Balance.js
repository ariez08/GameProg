#pragma strict

var restingAngle : float = 0f;
var force : float = 750f;
var rb : Rigidbody2D ;
function start() {
  rb = gameObject.GetComponent("RigidBody2D");
}

function fixedUpdate() {
  rb.MoveRotation(Mathf.LerpAngle(rb.rotation, restingAngle, force * Time.deltaTime));
};