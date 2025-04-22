// Add event listener to trigger rollover effect
document.addEventListener("scroll", () => {
    const page2 = document.getElementById("page2");
    const page1Height = document.getElementById("page1").offsetHeight;
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= page1Height) {
      page2.classList.add("rollover");
    } else {
      page2.classList.remove("rollover");
    }
  });
  