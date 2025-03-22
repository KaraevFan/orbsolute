document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cinemaButton');
    const audio = new Audio('assets/sounds/Anime Earth Movement Opening.mp3');

    button.addEventListener('click', () => {
        audio.play();
    });
}); 