
    // Define your calendar data here
    const calendarData = require('./testi.json');
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    console.log("jotain vaan"+calendarData);
    const calendarContainer = document.getElementById('calendar');
    
    calendarData.forEach(data => {
        //holder on pidike kuvalle tekstille ja mahdolliselle sijainnille ja kartalle
    const holder = document.createElement('div');
      const door = document.createElement('div');
      door.classList.add('door');
        const para = document.createElement('p');
        para.classList.add('teksti');
      if (data.date <= todayString && !data.opened) {
        door.classList.add('highlight');
        door.innerHTML = `<img src="${data.imageClosed}" alt="Door">`;
        door.addEventListener('click', () => {
          data.opened = true;
          door.classList.remove('highlight');
          door.innerHTML = `<a href="${data.link}" target="_blank"><img src="${data.imageOpened}" alt="Door"></a>`;
            para.innerHTML = data.description
        });
      } else if (data.opened) {
        door.innerHTML = `<a href="${data.link}" target="_blank"><img src="${data.imageOpened}" alt="Door"></a>`;
        para.innerHTML = data.description;
      } else {
        door.innerHTML = `<img src="${data.imageClosed}" alt="Door">`;
      }
      holder.appendChild(door);
      holder.appendChild(para);

      calendarContainer.appendChild(holder);
      
    });

