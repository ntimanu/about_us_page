// storage

const formName = document.getElementById("name");
const feedbackEmail = document.getElementById("email");

feedbackForm.addEventListener("input", () => {
  const formData = {
    name: formName.value,
    email: feedbackEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem("feedbackForm", JSON.stringify(formData));
});
function showData() {
  const userData = JSON.parse(localStorage.getItem("feedbackForm"));
  if (userData) {
    formName.value = userData.name;
    feedbackEmail.value = userData.email;
  }
}
function submitFeedback(event) {
  event.preventDefault();
  window.location.href = "success.html";
}
showData();
