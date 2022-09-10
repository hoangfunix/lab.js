function percentageOfWords1(population) {
    return population / 7900  * 100;
}
function describeCountry(country, population) {
    const percentPopulation = percentageOfWords1(population);

    const percent=(`${country} has ${population} million people , which is about ${percentPopulation} % of the world`);
    return percent;
}

console.log(describeCountry("China", 1441));
console.log(describeCountry("India", 142));
console.log(describeCountry("United States", 152));