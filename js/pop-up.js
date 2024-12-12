function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
  
    setTimeout(function() {
        closePopup();
    }, 68000);
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 19000);
  });