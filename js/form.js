const bookingBtns = document.querySelectorAll(".book-btn");
// adding click event to all doctor buttons
for (let i = 0; i < bookingBtns.length; i++) {
  bookingBtns[i].addEventListener("click", function () {
    let doctorNumber = this.id[this.id.length - 1],
      doctorName = document.querySelector(
        `#doctor-name${doctorNumber}`
      ).textContent;
    // storing the doctor got clicked in browser storage to be able to access it in form page
    console.log(doctorName);
    localStorage.setItem("doctorName", doctorName);
  });
}
// adding doctor name to form
if (localStorage.getItem("doctorName")) {
  document.querySelector("#doctor-name").textContent =
    localStorage.getItem("doctorName");
}
