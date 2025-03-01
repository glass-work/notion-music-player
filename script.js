const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volume');
const cover = document.getElementById('cover');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
        cover.classList.add('spinning');
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
        cover.classList.remove('spinning');
    }
});

audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
    progressBar.value = 0;
    cover.classList.remove('spinning');
});