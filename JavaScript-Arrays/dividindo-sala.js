const alunos = [
  "Lucas",
  "Fabrício",
  "Tulio",
  "Matheus",
  "Erika",
  "Amanda",
  "Gabriella",
  "Emerson",
  "Luciana",
  "Marcos",
  "Leandro",
  "Bianca",
  "Jean",
  "Renata"
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);
console.log(sala1);
console.log(sala2);