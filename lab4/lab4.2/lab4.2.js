//declaration
function percentageOfWords1(population) {
    return population / 7900  * 100;
}
const population1 = percentageOfWords1(1441);
// expression
const percentageOfWords2 = function(population) {
    return population / 7900  * 100;
}
const population2 = percentageOfWords2(142);
console.log(population1, population2 );