// funcation to check user and password data enter by user 
function Signup() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

  
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (!username || !password) {
        document.getElementById('usernameError').textContent = 'Both username and password are required';
        return false; 
    }

    // Store user details in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

   
    window.location.href = 'login.html';

   
    return false;
}

// background change 
// Create an array of images
const images = ["https://cdn.wallpapersafari.com/67/96/AaGPUx.jpg", "https://i.redd.it/idmbv0oydf671.jpg", "https://wallpaperset.com/w/full/5/2/f/46724.jpg"];
// body.style.background = "center center center";
// Get the body element
const body = document.querySelector("body");

// Create a counter to track the current image
let index = 0;

// Define a function to change the background image
function changeBackground() {
  // Get the next image from the array
  const image = images[index];

  // Set the body's background image to the next image
  body.style.backgroundImage = `url(${image})`;

  // Increment the counter
  index = (index + 1) % images.length;
}

// Call the changeBackground function every 5 seconds
setInterval(changeBackground, 5000);
