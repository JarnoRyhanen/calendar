
    // Define your calendar data here
  
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    const calendarContainer = document.getElementById('calendar');
    
    calendarData.forEach(data => {
      const door = document.createElement('div');
      door.classList.add('door');
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
      calendarContainer.appendChild(door);
      
    });