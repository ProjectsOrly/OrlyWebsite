import json from "./version.json" assert { type: "json" };

document.getElementById("version").innerHTML = json.version;


const questionBoxes = document.querySelectorAll('.questionBox');

questionBoxes.forEach(questionBox => {
  const answer = questionBox.querySelector('p');
  const accordion = questionBox.querySelector('.accordion');

  accordion.addEventListener('click', () => {
    questionBoxes.forEach(box => {
      if (box !== questionBox) {
        box.querySelector('p').classList.remove('active');
      }
    });
    answer.classList.toggle('active');
  });
});


