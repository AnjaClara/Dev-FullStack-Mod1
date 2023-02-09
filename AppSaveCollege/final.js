var aluno = [
  {
      nome: "Sidnei",
      altura: 185,
      idade: 22,
      sexo: "Masculino",
      sala: "C100",
      Matemática: 9.5,
  },
  {
      nome: "Ana Clara",
      altura: 171,
      idade: 21,
      sexo: "Feminino",
      sala: "C101",
      Matemática: 10,
  },
  {
      nome: "Claudia",
      altura: 154,
      idade: 24,
      sexo: "Feminino",
      sala: "C102",
      Matemática: 8.3,
  },
  {
      nome: "André",
      altura: 180,
      idade: 29,
      sexo: "Masculino",
      sala: "C103",
      Matemática: 10,
  },
  {
      nome: "Anderson",
      altura: 177,
      idade: 32,
      sexo: "Masculino",
      sala: "C104",
      Matemática: 4.2,
  },
];

console.log(aluno);

var Média = (aluno[0].Matemática + aluno[1].Matemática + aluno[2].Matemática + aluno[3].Matemática + aluno[4].Matemática) / 5;

console.log("Média dos alunos no total: ", Média);

function resultado(aluno,nota){
  if (nota >= 7){
    return `o(a) ${aluno} passou`;
  } else {
    return `o(a) ${aluno} não passou`;
  }
}

console.log(resultado(aluno[0].nome, aluno[0].Matemática));
console.log(resultado(aluno[1].nome, aluno[1].Matemática));
console.log(resultado(aluno[2].nome, aluno[2].Matemática));
console.log(resultado(aluno[3].nome, aluno[3].Matemática));
console.log(resultado(aluno[4].nome, aluno[4].Matemática));

// if (aluno[0].Matemática >= 7){
//   console.log(aluno[0].nome, "Aprovado(a)");
// } else {
//   console.log(aluno[0].nome, "Reprovado(a)");
// }

// if (aluno[1].Matemática >= 7){
//   console.log(aluno[1].nome, "Aprovado(a)");
// } else {
//   console.log(aluno[1].nome, "Reprovado(a)");
// }

// if (aluno[2].Matemática >= 7){
//   console.log(aluno[2].nome, "Aprovado(a)");
// } else {
//   console.log(aluno[2].nome, "Reprovado(a)");
// }

// if (aluno[3].Matemática >= 7){
//   console.log(aluno[3].nome, "Aprovado(a)");
// } else {
//   console.log(aluno[3].nome, "Reprovado(a)");
// }

// if (aluno[4].Matemática >= 7){
//   console.log(aluno[4].nome, "Aprovado(a)");
// } else {
//   console.log(aluno[4].nome, "Reprovado(a)");
// }