document.querySelector('button[data-submit]').addEventListener("click", () => {
  document.getElementById("thank_you").style.display = "flex";
  document.getElementById("rating").style.display = "none";
});

document.querySelectorAll('button[data-id]').forEach((button) => {
  button.addEventListener("click", () => {
    var value = button.getAttribute("data-id")
    document.getElementById("rating_number").innerHTML = value;
  });
});