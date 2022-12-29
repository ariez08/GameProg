#pragma strict
import UnityEngine.SceneManagement;


function PlayGame(){
	SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
}

function QuitGame(){
	Application.Quit();
}