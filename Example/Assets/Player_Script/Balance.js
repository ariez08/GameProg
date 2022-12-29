#pragma strict

var restingAngle : float = 0f;
var force : float = 150f;
var rb : Rigidbody2D;

function Start() {
  var rb = gameObject.GetComponent(Rigidbody2D);
}

function FixedUpdate() {
  rb.MoveRotation(Mathf.LerpAngle(rb.rotation, restingAngle, force * Time.deltaTime));
};