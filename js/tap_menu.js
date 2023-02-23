const $tab = document.querySelectorAll(".tab");
const $tabimg = document.querySelectorAll(".tab_img");

$tab.forEach((tab, tab1) => {
  tab.addEventListener("click", function () {
    $tabimg.forEach((img) => {
      img.classList.remove("on");
    });
    $tab.forEach((tab2) => {
      tab2.classList.remove("on");
    });

    $tab[tab1].classList.add("on");
    $tabimg[tab1].classList.add("on");
  });
});
