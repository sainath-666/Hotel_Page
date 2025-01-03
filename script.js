function bookRoom(roomName, price) {
  alert(`You have booked the ${roomName} for ₹${price}/night`);
}

document.querySelectorAll('.nav-bar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
