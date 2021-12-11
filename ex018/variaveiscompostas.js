let num = [5, 8, 400] //váriavel composta, array, vetor
num.sort(Number) //pega todos os elementos e coloca em ordem crescente; eu sabia que esse parenteses servia pra algo; coloquei o Number dentro do parenteses, assim o js organiza não apenas a primeira casa decimal, mas sim, todos os números
num.push(7) //o JavaScript cria mais um elemento por último e coloca o valor digitado dentro da váriavel composta

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3]) forma mais complicada

for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos]) forma um pouco maior
}
*/


for(let pos in num) {
    console.log(num[pos])
} //forma um pouco mais simplificada

//num.indexOf(7)
console.log(num.indexOf(7)) //busquei o valor 7, ele está no indice 3