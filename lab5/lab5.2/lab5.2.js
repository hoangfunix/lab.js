const myCountry ={
    country:`Finland`,
    capital:`Helsinki`,
    population:6,
    language:`finnish`,
    neighbours:[`Norway`,`Sweden`,`Russia`],
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
//myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry)