document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cinemaButton');
    let audio = null;
    
    // Create audio element
    try {
        // Create audio element with proper MIME type
        audio = document.createElement('audio');
        audio.setAttribute('type', 'audio/mpeg');
        audio.setAttribute('preload', 'auto');
        audio.setAttribute('crossorigin', 'anonymous');
        
        // Create source element with modified Cloudinary URL
        const source = document.createElement('source');
        source.src = 'https://res.cloudinary.com/dlkzuaqpw/video/upload/f_auto,q_auto/v1742645938/Anime_Earth_Movement_Opening_pwt0bj.mp3';
        source.type = 'audio/mpeg';
        source.setAttribute('crossorigin', 'anonymous');
        
        // Add source to audio element
        audio.appendChild(source);
        
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
    } catch (error) {
        console.error('Error initializing audio:', error);
        alert('Error initializing audio. Please try again.');
    }
    
    button.addEventListener('click', () => {
        if (audio) {
            // Reset audio to start if it was already playing
            audio.currentTime = 0;
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
                alert('Error playing audio. Please try again.');
            });
        } else {
            alert('Audio not initialized. Please refresh the page.');
        }
    });
}); 