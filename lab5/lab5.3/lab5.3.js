const myCountry ={
    country:`Finland`,
    capital:`Helsinki`,
    population:6,
    language:`finnish`,
    neighbours:[`Norway`,`Sweden`,`Russia`],
    describe:function(){
console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
},
checkIsland:function(){
    this.isIsland=this.neighbours.length===0?true:false;
}
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);