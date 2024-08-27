document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
  
    // Function to generate random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Event listener for the button click
    changeColorBtn.addEventListener('click', function() {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
    });
  });
  