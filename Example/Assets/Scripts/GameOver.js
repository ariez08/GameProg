#pragma strict
import UnityEngine.SceneManagement;


function Setup(){
	gameObject.SetActive(true);
}

function MainMenu(){
	SceneManager.LoadScene("Menu");
}