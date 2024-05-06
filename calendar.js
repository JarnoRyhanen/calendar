
// Define your calendar data here

const today = new Date();
const todayString = today.toISOString().split('T')[0];
const calendarContainer = document.getElementById('calendar');
let i = 1;

calendarData.forEach(data => {
  const holder = document.createElement('div');
  const door = document.createElement('div');
  door.classList.add('door');
  const para = document.createElement('p');
  para.classList.add('teksti');
  if (data.date <= todayString && !data.opened) {
    door.classList.add('highlight');
    door.innerHTML = `<img src="./Kuvat/doorclosed.jpg" width="100%" alt="Door">`;
    door.addEventListener('click', () => {
      data.opened = true;
      door.classList.remove('highlight');
      door.innerHTML = `<img src="./Kuvat/door.jpg" width="100%" alt="Door">`;
      openModalPopup(data);
    });
  } else if (data.opened) {
    door.innerHTML = `<img src="./Kuvat/door.jpg" width="100%" alt="Door">`;

  } else {
    door.innerHTML = `<img src="./Kuvat/doorclosed.jpg" width="100%" alt="Door">`;
  }
  para.innerHTML = `Viikko ${i}`;
  holder.appendChild(door);
  holder.appendChild(para);
  calendarContainer.appendChild(holder);
  i++;
});

