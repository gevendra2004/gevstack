document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
      document.querySelector(".body").classList.add("active");
      document.querySelector(".btn").classList.add("active");
      document.querySelector('.icon').classList.add("active");
      document.querySelector('.clock').classList.add("active");
      document.querySelector('.text').classList.add("active");
  
      setTimeout(function () {
        var textElement = document.querySelector('.text');
        textElement.classList.remove('active');
        textElement.textContent = 'Reservation Confirmed';
        textElement.style.paddingLeft = '0';
      }, 3000);
  
      setTimeout(function () {
        document.querySelector('.icon').classList.add('fade-top');
      }, 7000);
  
      setTimeout(function () {
        document.querySelector('#tick polyline').classList.add('active');
      }, 6000);
  
      setTimeout(function () {
        document.body.classList.remove('active');
        document.body.classList.add('green-bg');
      }, 5000);
    });
  });
  