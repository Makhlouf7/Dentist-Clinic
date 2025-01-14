$(".menu-btn").click(() => {
  $(".nav-items").slideToggle(350);
});
checkWidth();
function checkWidth() {
  const appointment = document.querySelector(".nav-icon-text"),
    phone = document.createElement("p"),
    navItems = document.querySelector(".nav-items");
  if (window.innerWidth >= 1200) {
    navItems.style.display = "flex";
  } else {
    navItems.style.display = "none";
  }
  if (window.innerWidth <= 576) {
    appointment.classList.add("nav-icon-pop");
  } else {
    appointment.classList.remove("nav-icon-pop");
  }
  if (window.innerWidth <= 320 && !document.querySelector("#phone-number")) {
    phone.textContent = 19699;
    phone.classList.add("navLink");
    phone.id = "phone-number";
    navItems.appendChild(phone);
  } else if (window.innerWidth > 320) {
    document.querySelector("#phone-number")?.remove();
  }
}

window.addEventListener("resize", checkWidth);
