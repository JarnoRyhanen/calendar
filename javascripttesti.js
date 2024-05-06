
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
          openPopupWindow(data);
        });
      } else if (data.opened) {
        door.innerHTML = `<img src="${data.image_opened}" alt="Door">`;
       
      } else {
        door.innerHTML = `<img src="${data.image_closed}" alt="Door">`;
      }
      calendarContainer.appendChild(door);
      
    });
    
    
    // popup. 
    function openPopupWindow(data) {
      const mapPopup = window.open('', '_blank', 'width=800,height=600');
      mapPopup.document.body.innerHTML = `
          <h1 style="font-family:'Courier New'">${data.desc}</h1>
          <img src="${data.image_closed}" alt="Door" width="600" height="auto">
          ${data.map}
          <a href="${data.link}">Sivuille</a>
      `;
  }
