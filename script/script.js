// Theme

const themeButton = document.querySelector(".header__btn-theme");
const body = document.querySelector("body");

const currentTheme = localStorage.getItem("theme");
let theme = "white";

themeButton.addEventListener('click', toggleTheme);

if (currentTheme == "dark") {
    body.classList.add("dark");
    themeButton.classList.add("on");
}

function toggleTheme() {
    body.classList.toggle("dark");
    themeButton.classList.toggle("on");

    if (body.classList.contains("dark")) {
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
}




window.onload = function () {
    let funcMusic = function (id) { return document.getElementById(id) }
    let v = funcMusic("audio");

    funcMusic("rewaindForward").onclick = function () {
        v.currentTime += 15;
    };

    funcMusic("rewaindBack").onclick = function () {
        v.currentTime -= 15; 
    };

    funcMusic("stopButton").onclick = function () {
        v.pause();
        v.currentTime = 0;
        funcMusic("playButton").src = "img/icons8_play.png";
    };

    funcMusic("playButton").onclick = function (e) {
        if (v.paused) {
            v.play();
            e.target.src = "img/icons8-pause.png";

        }
        else {
            v.pause();
            e.target.src = "img/icons8_play.png";
        }
    };

    funcMusic("vol").onclick = function () {
        v.volume = vol.value;
    };


    let parent = document.querySelector('.container');
    let menuItem = parent.querySelectorAll('.btn');
    let title = document.querySelector(".title");
    let audioSource = document.querySelector("#audioSource")
    parent.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('btn')) {
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.remove('anim');
            }
            funcMusic("playButton").src = "img/icons8-pause.png";
            target.classList.add('anim');
            audio.load();
            audioSource.src = "audio/"+`${target.textContent}`;

         
            console.log(target.textContent)
            title.textContent = target.textContent;
        }
    });
}



