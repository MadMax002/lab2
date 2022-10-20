const accordion = Array.from(document.getElementsByClassName("accordion-visible"));
accordion.forEach ( elem => {
  elem.addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
});