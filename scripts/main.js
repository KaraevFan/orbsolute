document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cinemaButton');
    const audio = new Audio('https://res.cloudinary.com/dlkzuaqpw/video/upload/v1742645938/Anime_Earth_Movement_Opening_pwt0bj.mp3');

    button.addEventListener('click', () => {
        audio.play();
    });
}); 