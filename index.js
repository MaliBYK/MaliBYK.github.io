const homeLinks = document.querySelectorAll(".homeLink");
const homebtn = document.querySelector(".homebtn");
addUnderline(homebtn);
homeLinks.forEach(link => {
  link.addEventListener("click", e => {
    deleteAllUnderlines();
    addUnderline(link);
  });
});
console.log(homeLinks);

function addUnderline(element) {
  element.classList.add("active");
}

function deleteAllUnderlines() {
  homeLinks.forEach(link => {
    link.classList.remove("active");
  });
}
