// O(n)
function sumarHastaI(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
  total += i;
  }
  return total;
  }
  
  // O(1)
  function sumarHastaII(n) {
  return n * (n + 1) / 2;
  }
  
  // O(n)
  function contarArribaYAbajo(n) {
  console.log("¡Subiendo!");
  for (var i = 0; i < n; i++) {
  console.log(i);
  }
  console.log("¡En la cima!\nBajando...");
  for (var j = n - 1; j >= 0; j--) {
  console.log(j);
  }
  console.log("¡De regreso abajo. Adiós!");
  }
  
  // O(n^2)
  function imprimirTodosLosPares(n) {
  for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
  console.log(i, j);
  }
  }
  }
  
  // O(log(n))
  function numeroDeMitades(n) {
  var count = 0;
  while (n > 1) {
  n /= 2;
  count++;
  }
  return count;
  }
  
  // O(n * log(n))
  function totalDeMitades(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
  total += numeroDeMitades(n);
  }
  return total;
  }
  
  // O(2^n)
  function imprimirBinarios(n) {
  var count = 0;
  var lastNum = "1".repeat(n);
  while (count.toString(2) !== lastNum) {
  console.log(count.toString(2).padStart(n, "0"));
  count++;
  }
  console.log(lastNum);
  }
  
  var functions = [
  {
  fn: sumarHastaI,
  className: "primary",
  color: "#007bff"
  },
  {
  fn: sumarHastaII,
  className: "secondary",
  color: "#868e96"
  },
  {
  fn: contarArribaYAbajo,
  className: "success",
  color: "#28a745"
  },
  {
  fn: imprimirTodosLosPares,
  className: "danger",
  color: "#dc3545"
  },
  {
  fn: numeroDeMitades,
  className: "warning",
  color: "#ffc107"
  },
  {
  fn: totalDeMitades,
  className: "info",
  color: "#17a2b8"
  },
  {
  fn: imprimirBinarios,
  className: "dark",
  color: "#343a40"
  }
  ];
  
  

  