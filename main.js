function navToggle() {
  const navItems = document.querySelectorAll(".nav-toggle-item");
  const navToggle = Array.from(
    document.getElementsByClassName("navbar-toggle")
  );

  navItems.forEach((nav) => nav.classList.toggle("navbar-show"));

  navToggle.forEach((item) => {
    item.classList.toggle("bi-list");
    item.classList.toggle("bi-x-lg");
  });
}

document.querySelector(".navbar-toggle").addEventListener("click", navToggle);
