const buttonPlay = document.querySelector('#playButton');
buttonPlay.addEventListener('click', function() {
    
    const audioPlayed = document.querySelector('audio');
    /* audioPlayed.currentTime = 180  segundos de onde vai começar! */
    audioPlayed.play();
})

const buttonPause = document.querySelector('#pauseButton');
buttonPause.addEventListener('click', function() {

    const audioPaused = document.querySelector('audio');
    audioPaused.pause();
})
