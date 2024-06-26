const today = new Date();
const todayString = today.toISOString().split('T')[0];
const calendarContainer = document.getElementById('calendar');

calendarData.forEach((data, index) => {
    const door = document.createElement('div');
    door.classList.add('door');
    const para = document.createElement('div');
    para.classList.add('text');
    var doorSound = document.getElementById("doorSound");
    if (data.date <= todayString) {
        door.classList.add('greenhighlight');
        door.innerHTML = `<img src="./Kuvat/door.jpg" width="100%" alt="Door">`;
        door.addEventListener('click', () => {
            openModalPopup(data);
            doorSound.play();
        });
    } else {
       door.classList.add('redhighlight');
       door.innerHTML = `<img src="./Kuvat/doorclosed.jpg" width="100%" alt="Door">`;
    }
  
    para.innerHTML = `Viikko ${index + 1}`;
    
    door.appendChild(para);
    calendarContainer.appendChild(door);
});



