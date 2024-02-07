/* Desafio 04
Criar um dicionário de sinônimos usando Map
Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre",
"contente", "satisfeito"]
dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido",
"deprimido"],
dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"], */

const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set("Feliz", '["alegre", "contente", "satisfeito"]');

dicionarioDeSinonimos.set("Triste", '["melancólico", "abatido", "deprimido"]');

dicionarioDeSinonimos.set("Bom", '["ótimo", "excelente", "maravilhoso"]');

console.log(dicionarioDeSinonimos); // verificar mapa criado

console.log(dicionarioDeSinonimos.get("Feliz"));

console.log(dicionarioDeSinonimos.get("Triste"));

console.log(dicionarioDeSinonimos.get("Bom"));

