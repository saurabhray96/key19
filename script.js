let sun = document.getElementById("sun");
  // Function to update cursor position display
  function updateCursorPosition(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    sun.style.marginTop=mouseY+"px";
    sun.style.marginLeft=mouseX+"px";
   
  }

  // Listen for mousemove event
  document.addEventListener('mousemove', updateCursorPosition);