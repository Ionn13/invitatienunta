const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * (-0.3) - 100 + "px";
})

window.addEventListener("scroll", function () {
  let offset = window.pageXOffset;
  offset -= 3100;
  document.getElementById('parallax1').style.backgroundPositionY = offset * 0.1 + "px";
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 4800;
  parallax2.style.backgroundPositionY = offset * (-0.1) + "px";
})

function myFunction() {
  document.getElementById("check").checked = false;
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// ⚠️ setează data nunții (YYYY, MM-1, DD, HH, MM)
const weddingDate = new Date(2026, 8, 3, 16, 0, 0); 
// exemplu: 12 iulie 2026, ora 15:00

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.querySelector(".countdown").innerHTML = "<h1>A sosit ziua cea mare! 💍</h1>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
