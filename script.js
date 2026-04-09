function add(value) {
  document.getElementById("input").value += value;
}

function clearInput() {
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
}

function solve() {
  let input = document.getElementById("input").value;

  try {
    if (input.includes("=")) {
      let result = nerdamer.solve(input, "x");
      document.getElementById("result").innerText = "x = " + result;
    } else {
      let result = eval(input);
      document.getElementById("result").innerText = result;
    }
  } catch (e) {
    document.getElementById("result").innerText = "Invalid input";
  }
}
