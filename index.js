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

const contactUsButton = document.getElementById("contactUs");

contactUsButton.addEventListener("click", () => {
  const emailInput = document.getElementById("email");
  const bodyInput = document.getElementById("body");
  const data = {
    email: emailInput.value,
    body: bodyInput.value,
  };

  sendEmail(data);
});
