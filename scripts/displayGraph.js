const graph = document.querySelector(".graph");
const runBtn = document.getElementById("run");
let elementsArray = [
  11,
  2,
  3,
  42,
  76,
  55,
  64,
  92,
  154,
  100,
  14,
  18,
  99,
  74,
  51,
  79,
  81,
  82,
  123,
  111,
  142,
];

const displayGraph = (array) => {
  graph.innerHTML = ``;
  array.forEach((element) => {
    graph.innerHTML += `
          <div class="bar" style = "height:${
            5 + element / 3
          }vh;">${element}</div>
    `;
  });
};

runBtn.addEventListener("click", () => {
  displayGraph(elementsArray);
});
