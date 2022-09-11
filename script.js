const artur = {
  name: "Artur",
  firstTest: 5,
  secondTest: 8
  }

const bruna = {
  name: "Bruna",
  firstTest: 7,
  secondTest: 9
  }

const carlos = {
  name: "Carlos",
  firstTest: 3,
  secondTest: 5
  }

const daniel = {
  name: "Daniel",
  firstTest: 10,
  secondTest: 9
  }

const erica = {
  name: "Erica",
  firstTest: 4,
  secondTest: 9
  }

const students = [artur, bruna, carlos, daniel, erica]

for (const student of students) {
  let media = (student.firstTest + student.secondTest) / 2

  if (media >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${media.toFixed(1)}\nParabéns ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${media.toFixed(1)}\nNão foi dessa vez ${student.name}! Tente novamente!`)
  }
}