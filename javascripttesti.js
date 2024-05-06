
    // Define your calendar data here
  
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    const calendarContainer = document.getElementById('calendar');
    
    calendarData.forEach(data => {
      const door = document.createElement('div');
      door.classList.add('door');
      if (data.date <= todayString && !data.opened) {
        door.classList.add('highlight');
        door.innerHTML = `<img src="${data.image_closed}" alt="Door">`;
        door.addEventListener('click', () => {
          data.opened = true;
          door.classList.remove('highlight');
          door.innerHTML = `<img src="${data.image_opened}" alt="Door">`;
          openModalPopup(data);
        });
      } else if (data.opened) {
        door.innerHTML = `<img src="${data.image_opened}" alt="Door">`;
       
      } else {
        door.innerHTML = `<img src="${data.image_closed}" alt="Door">`;
      }
      calendarContainer.appendChild(door);
      
    });