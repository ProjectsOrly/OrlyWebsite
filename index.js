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

// Remove anchor tags from URL
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      var target = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(target);

      if (targetElement) {
        var targetOffset = targetElement.offsetTop;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });

        history.pushState("", document.title, window.location.pathname);
      }
    });
  });
});


