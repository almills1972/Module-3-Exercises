Array1 = [4, 7, 6, 2, 1]

//firstAnswer = Array1.map(function(e) {return e - 2})

firstAnswerOne = Array1.map((e) => e-2)

console.log(firstAnswerOne)

secondAnswer = Array1.filter((e) => e % 2 === 0)

console.log(secondAnswer)

thirdAnswer = Array1.reduce((a, b) => a + b, 0)

console.log(thirdAnswer)