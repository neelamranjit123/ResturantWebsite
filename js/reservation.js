const formSubmit = document.querySelector("#submit")
let reservationForm = document.querySelector(".reservation-form")
let reservationForm1 = document.querySelector(".reservation-form1")

formSubmit.addEventListener("click", () => {
  reservationForm.classList.add("hidden")
  reservationForm1.classList.remove("hidden")
})  
  