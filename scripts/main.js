document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cinemaButton');
    const audio = new Audio();
    
    // Set the audio source
    audio.src = 'https://res.cloudinary.com/dlkzuaqpw/video/upload/v1742645938/Anime_Earth_Movement_Opening_pwt0bj.mp3';
    
    // Add error handling
    audio.onerror = (e) => {
        console.error('Error loading audio:', e);
        alert('Error loading audio. Please try again.');
    };
    
    // Add load handling
    audio.oncanplaythrough = () => {
        console.log('Audio loaded successfully');
    };
    
    // Preload the audio
    audio.load();
    
    button.addEventListener('click', () => {
        // Reset audio to start if it was already playing
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
            alert('Error playing audio. Please try again.');
        });
    });
}); 