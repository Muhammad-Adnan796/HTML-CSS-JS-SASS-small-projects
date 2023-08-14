let inp = document.getElementById("input-field");

function addValue(val) {
  inp.value += val;
}

function deleted() {
  inp.value = "";
}

function back() {
  let value = inp.value.split("");
  value.splice(inp.value.length - 1, 1);
  inp.value = value.join("");
}

function equal() {
  let result = eval(inp.value);
  inp.value = result;
}
