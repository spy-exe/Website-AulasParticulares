window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navigation-menu");
  
    if (window.scrollY > 0) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  
