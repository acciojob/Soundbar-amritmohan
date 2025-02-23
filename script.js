//your JS code here. If required.

let sounds = ["s1", "s2", "s3", "s4", "s5", "s6"];

let containerButton = document.getElementById("buttons");

sounds.forEach(sound => {  
	let btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;

	btn.addEventListener("click", () => {
		stopAllSounds();
		document.getElementById(sound).play();
	});
	containerButton.appendChild(btn);
});

sounds.forEach(sound => {  
	let audio = document.createElement("audio");
	audio.id = sound;
	audio.src = `sounds/${sound}.mp3`;
	document.body.appendChild(audio);
});

document.querySelector(".stop").addEventListener("click", stopAllSounds);

function stopAllSounds() {
	sounds.forEach(sound => {  
		let audio = document.getElementById(sound);
		audio.pause();
		audio.currentTime = 0;
	});
}
