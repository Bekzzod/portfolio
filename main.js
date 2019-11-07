const words = ["Bekzod", "Abakulov", "A Developer", "A Creator"];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";
let isDeleting = false;
let typeSpeed = 400;
const scrollButton = document.querySelector(".scroll-to-top");
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

const typer = (function type() {
  if (count === words.length) {
    count = 0;
  }
  currentWord = words[count];

  if (!isDeleting) {
    letter = currentWord.slice(0, ++index);
  } else {
    letter = currentWord.slice(0, --index);
  }

  document.querySelector(".txt-type").textContent = letter;

  if (letter.length === currentWord.length) {
    isDeleting = true;
    typeSpeed /= 2;
  } else if (letter.length === 0) {
    isDeleting = false;
    typeSpeed *= 2;
    count++;
  }

  setTimeout(type, typeSpeed);
})();

typer();

burger.addEventListener("click", function() {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
}

$("#link-about").click(function() {
  scrollToAnchor("anchor-about");
});

$("#link-projects").click(function() {
  scrollToAnchor("anchor-projects");
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $(".scroll-to-top:hidden")
      .stop(true, true)
      .fadeIn();
  } else {
    $(".scroll-to-top")
      .stop(true, true)
      .fadeOut();
  }
});

scrollButton.addEventListener("click", function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
