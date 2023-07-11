const ratingEls = document.querySelectorAll('.rating');


ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (e) => {
    console.log(e.target.innerText || e.target.parentNode.innerText);
  
  });
});
