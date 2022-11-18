let count = 0;
function increment() {
  document
    .getElementById("increment-btn")
    .addEventListener("click", function (e) {
      count = count + 1;
      document.getElementById("count-el").innerText = count;
      console.log(count);
      console.log(document.getElementById("increment-btn"));
    });
}
increment();

function save(params) {
    
}