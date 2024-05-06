
// get the modal

var modal = document.getElementById("myModal");

function openModalPopup(calendarData) {

    
    let description = calendarData.desc;
    let image = calendarData.img;
    let linkToEvent = calendarData.link;
    let location = calendarData.map;
    console.log(description); 
    console.log(location); 
    console.log(linkToEvent); 


    
    let modalImg = document.getElementById("modalImage");
    let captionText = document.getElementById("caption");
    let locationMap = document.getElementById("location");
    let link = document.getElementById("link");

     modal.style.display = "block";
     
     modalImg.src = image;
     captionText.innerHTML = description;
     locationMap.innerHTML = location;



}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}