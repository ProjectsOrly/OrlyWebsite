//http://localhost:5000/connection/sendEmail

//https://orly-backend.onrender.com/connection/sendEmail
const sendEmail = async (data) => {
  try {
    await fetch("https://orly-backend.onrender.com/connection/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
};

const contactUsButton = document.getElementById("submitMail");

contactUsButton.addEventListener("click", async () => {
  const emailInput = document.getElementById("email");
  const bodyInput = document.getElementById("description");
  const data = {
    email: emailInput.value,
    body: bodyInput.value,
  };

  const afterSubmit = () => {
    contactUsButton.firstElementChild.classList.add("hidden");
    contactUsButton.disabled = true;
    contactUsButton.style.opacity = 0.6;
    contactUsButton.textContent = "Sent!";
    contactUsButton.style.cursor = "default";
  };

  try {
    contactUsButton.firstElementChild.classList.remove("hidden");
    await sendEmail(data);
    afterSubmit();
  } catch (err) {
    console.log(err);
  }
});
