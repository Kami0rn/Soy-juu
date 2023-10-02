document.addEventListener('DOMContentLoaded', function () {
    // Function to add an image to the container
    function addImage() {
        // Create a new image element
        const img = document.createElement('img');

        // Set the source URL for the image
        img.src = 'img.jpg'; // Replace with the URL of your image

        // Add the image to the "imageContainer" div
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Clear previous content
        imageContainer.appendChild(img);
    }

    // Add a click event listener to the "Add Image" button
    const addImageButton = document.getElementById('addImage');
    addImageButton.addEventListener('click', addImage);
});
