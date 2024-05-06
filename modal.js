

/*
data: 

    date: string;
    opened: boolean;
    image_closed: string;
    image_opened: string;
    link: string;
    desc: string;
    map: string;
*/

// get the modal

var modal = document.getElementById("myModal");

function openModalPopup(calendarData) {
    console.log(modal);
    console.log("I AM CALLED");
    
    let description = calendarData.desc;
    let date = calendarData.date;
    let isOpen = calendarData.opened;
    let link = calendarData.link;
    let location = calendarData.map;
    let imageOpened = calendarData.image_opened;
    let imageClosed = calendarData.image_closed;
    console.log(description); 
    console.log(location); 

    
    let modalImg = document.getElementById("modalImage");
    let captionText = document.getElementById("caption");
    let locationMap = document.getElementById("location");

     modal.style.display = "block";
     modalImg.src = imageOpened;
     captionText.innerHTML = description;
     locationMap.innerHTML = location;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}