const main = document.querySelector("main"),
  input = document.querySelector(".input"),
  result = document.querySelector("p");

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let arr = e.target.value.split("");
    let arrCount = arr.length;
    result.innerText = arrCount;
  }
});
