// Get the modal

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


var modal = document.getElementById("myModal");

function openModalPopup(calendarData) {
    console.log("I AM CALLED");
    console.log(calendarData.desc);

    let description = calendarData.desc;
    let date = calendarData.date;
    let isOpen = calendarData.opened;
    let link = calendarData.link;
    let location = calendarData.map;
    let imageOpened = calendarData.image_opened;
    let imageClosed = calendarData.image_closed;


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