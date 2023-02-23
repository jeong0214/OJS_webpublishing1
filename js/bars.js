const $bars = document.querySelector(".bars");
const $m_gnb = document.querySelector(".gnb");

$bars.addEventListener("click", function () {
  $m_gnb.classList.toggle("on");
});
