document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById("checkbox")
  document.body.classList.toggle("dark")
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
    console.log('testing this out')
  });
});
