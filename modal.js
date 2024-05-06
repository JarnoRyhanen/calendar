// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


function showImage( image) {
    console.log(image.id);

     var img = document.getElementById(image.id);

     var modalImg = document.getElementById("modalImage");
     var captionText = document.getElementById("caption");

     modal.style.display = "block";
     modalImg.src = image.src;
     captionText.innerHTML = image.alt;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}