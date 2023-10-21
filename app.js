// variables for buttons and pop-up Modal
const btnone = document.getElementById('btnone')
const btntwo = document.getElementById('btntwo')
const btnthree = document.getElementById('btnthree')
const modalbtn = document.getElementById('modalbtn')
const modal = document.getElementById('modal')

/// displays Modal at top of screen and prevents screen from scrolling when Modal is visible
btnone.addEventListener('click', function() {
  window.scrollTo(0, 0);  
  modal.classList.remove('hidden')
  document.body.style.overflow = "hidden"; 
  modal.style.position = "absolute"; 
  modal.style.top = "0";
  modal.style.left = "0"; 
  modal.style.right = "0"; 
})

/// displays Modal at bottom of screen and prevents screen from scrolling when Modal is visible
btntwo.addEventListener('click', function() {
  window.scrollTo(0, document.body.scrollHeight);
  modal.classList.remove('hidden')
  document.body.style.overflow = "hidden"; 
  modal.style.position = "absolute"; 
  modal.style.bottom = "0";
  modal.style.left = "0"; 
  modal.style.right = "0";  
})

// close btn for modal and refresh for screen to remove overflow hidden
modalbtn.addEventListener('click', function() {
  modal.classList.add('hidden'); 
  window.location.reload();
})
