function navToggle() {
  const navItems = document.querySelectorAll(".nav-toggle-item");
  const navToggle = Array.from(
    document.getElementsByClassName("navbar-toggle")
  );
  const content = document.getElementById("styled-content");

  navItems.forEach((nav) => nav.classList.toggle("navbar-show"));

  navToggle.forEach((item) => {
    item.classList.toggle("bi-list");
    item.classList.toggle("bi-x-lg");
  });

  content.classList.toggle("offset-top");
}

document.querySelector(".navbar-toggle").addEventListener("click", navToggle);
