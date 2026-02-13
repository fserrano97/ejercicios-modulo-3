const manzana = document.getElementById("manzana");
const banana = document.getElementById("banana");
const limon = document.getElementById("limon");
const durazno = document.getElementById("durazno");
const ciruela = document.getElementById("ciruela");
const uva = document.getElementById("uva");

manzana.addEventListener("mouseover", function() {
  manzana.style.color = "red";
});
manzana.addEventListener("mouseout", function() {
  manzana.style.color = "black";
});
banana.addEventListener("mouseover", function() {
  banana.style.color = "pink";
});
banana.addEventListener("mouseout", function() {
  banana.style.color = "black";
});
limon.addEventListener("mouseover", function() {
  limon.style.color = "yellow";
});
limon.addEventListener("mouseout", function() {
  limon.style.color = "black";
});
durazno.addEventListener("mouseover", function() {
  durazno.style.color = "blue";
});
durazno.addEventListener("mouseout", function() {
  durazno.style.color = "black";
});
ciruela.addEventListener("mouseover", function() {
  ciruela.style.color = "brown";
});
ciruela.addEventListener("mouseout", function() {
  ciruela.style.color = "black";
});
uva.addEventListener("mouseover", function() {
  uva.style.color = "green";
});
uva.addEventListener("mouseout", function() {
  uva.style.color = "black";
});