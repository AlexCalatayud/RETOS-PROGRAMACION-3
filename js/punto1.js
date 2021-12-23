let i = 1;
let cantMayor = 0;
let cantMenor = 0;

while (i <= 10) {
  const nota = parseInt(prompt("ingrese una nota"));
  if (nota >= 7) {
    cantMayor++;
  } else {
    cantMenor++;
  }
  i++;
}

alert(`la cantidad es mayor : ${cantMayor} `);
