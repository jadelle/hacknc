document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

let log = console.log;

let classes = ['bard', 'wizard', 'wanderer', 'witch', 'dancer', 'scholar'];
let songs = [
    { title: 'Popular from Wicked', url: 'https://www.youtube.com/embed/400LbTzZP6s?autoplay=1' },
    { title: 'Defying Gravity from Wicked', url: 'https://www.youtube.com/embed/l0Bs_eaXaCo?autoplay=1' },
    { title: 'Swan Lake', url: 'https://www.youtube.com/embed/9cNQFB0TDfY?autoplay=1' },
    { title: 'Your Fault from Into the Woods', url: 'https://www.youtube.com/embed/vyJFcsY0ckU?autoplay=1' },
    { title: 'Flowers from Hadestown', url: 'https://www.youtube.com/embed/IzDzpJcQ8l4?autoplay=1' },
    { title: 'The Mad Hatter from Wonderland', url: 'https://www.youtube.com/embed/xc9PICpnAhI?autoplay=1' },
    { title: 'Say My Name from Beetlejuice', url: 'https://www.youtube.com/embed/nHKNP3sN_P4?autoplay=1' }
];

let photo = [
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", <!--Snow -->
  "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Select items
let maxClassIndex = classes.length - 1;
let maxSongIndex = songs.length - 1;
let maxPhotoIndex = photo.length - 1;

// Function to generate and display a random class and song
function generateRandomAll() {
    // Generate a random class
    let classNum = Math.floor(Math.random() * (maxClassIndex + 1));
    let randomClass = classes[classNum];
    log(randomClass); // Log to the console

    // Generate a random song
    let songNum = Math.floor(Math.random() * (maxSongIndex + 1));
    let randomSong = songs[songNum];
    log(randomSong.title); // Log to the console

    // Get a random photo from the array
    let photoNum = Math.floor(Math.random() * (maxPhotoIndex + 1)); // Generate a random index
    let randomPhoto = photo[photoNum]; // Use the index to get the photo URL
    log(randomPhoto); // Log the photo URL to the console

    // Display the random class and song in the HTML
    document.getElementById("class-display").innerText = `Your character is a ${randomClass}`;
    document.getElementById("song-display").innerText = `who embodies the song ${randomSong.title} and is obsessed with...`;

    // Update the iframe to show the YouTube video
    document.getElementById("song-video").src = randomSong.url;

    // Create an image element
    let img = document.createElement('img');
    img.src = randomPhoto; // Set the source to the random photo
    img.alt = 'Random photo'; // Alt text for the image
    img.style.width = '100%'; // Optional: make the image full width
    img.style.height = 'auto'; // Maintain aspect ratio

    // Clear previous images and append the new image
    let photoDisplay = document.getElementById("photo-display");
    photoDisplay.innerHTML = ''; // Clear previous image
    photoDisplay.appendChild(img); // Append the image

    // Show the photo display
    photoDisplay.style.display = 'block'; // Make it visible

    // Show the video iframe
    document.getElementById("song-video").style.display = 'block'; // Make the video visible
}

// Event listener for button
document.getElementById("generate-btn").addEventListener("click", generateRandomAll);
