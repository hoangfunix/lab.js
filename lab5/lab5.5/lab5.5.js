function percentageOfWords1(population) {
    return population / 7900  * 100;
    
}
const populations =[4000, 10000, 20000, 8000];
const percentages2=[];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(populations[i] / 7900  * 100);
}
console.log(percentages2);