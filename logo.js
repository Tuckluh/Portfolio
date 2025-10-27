 const logo = document.getElementById("logo");
    const music = document.getElementById("logoMusic");
    let isPlaying = false;

    logo.addEventListener("click", () => {
        if (isPlaying) {
            music.pause();
            music.currentTime = 0; // reset to start
            isPlaying = false;
        } else {
            music.play();
            isPlaying = true;
        }
    });

    
    