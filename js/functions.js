  // Image URLs
  var imageUrls = ['./img/1.png', './img/2.png', './img/3.png', './img/4.png', './img/5.png'];

  // Keep track of the index of the image URL in the array above
  var imageShownIndex = 0;

  // Create a canvas
  var canvas = document.createElement('canvas');
  var canvasContext = canvas.getContext('2d');
  canvas.height = 900;
  canvas.width = 1500;

  // Create a button that will load the previous image on the canvas when clicked
  var previousButton = document.createElement('button');
  previousButton.innerHTML = 'Previous Image';
  previousButton.onclick = function () {
      // Show images in a cycle, so when you get to the beginning of the array, you loop back to the end
      imageShownIndex = (imageShownIndex==0) ? imageUrls.length-1 : imageShownIndex-1;
      updateImage();
   };

  // Do same for the next button
  var nextButton = document.createElement('button');
  nextButton.innerHTML = 'Next Image';
  nextButton.onclick = function () {
    imageShownIndex = (imageShownIndex == imageUrls.length-1) ? 0 : imageShownIndex+1;
    updateImage();
   };

  document.body.appendChild(previousButton);
  document.body.appendChild(canvas);
  document.body.appendChild(nextButton);
  
 // Show the first image without requiring a click
 updateImage();

 function updateImage() {

   // Create the Image object, using the URL from the array as the source
   // You could pre-load all the images and store them in the array, rather than loading each image de novo on a click
   var img = new Image();
   img.src = imageUrls[imageShownIndex];

   // Clear the canvas
   canvasContext.clearRect(0, 0, canvas.width, canvas.height);

   // After the image has loaded, draw the image on the canvas
   img.onload = function() {
     canvasContext.drawImage(img, 0, 0);
   }

 }