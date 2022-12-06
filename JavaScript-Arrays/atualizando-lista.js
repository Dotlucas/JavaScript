const nomes = ["João", "Ana", "Caio", "Marjorie", "Lara", "Leo"];

nomes.splice(1, 2, "Andre");

console.log(nomes);

// value.splice(A partir do índice n, Nº de elementos que serão removidos, "Elemento que será inserido no array")
// ex.: value.splice(3, 2, "text").