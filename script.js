let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

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

let stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopAllSounds);

containerButton.appendChild(stopBtn);

function stopAllSounds() {
    sounds.forEach(sound => {
        let audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
