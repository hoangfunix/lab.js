let country = "USA";
let population = 32000000;
let isMoreThan=population>33000000;
if (isMoreThan) {
    console.log(`${country} 's population is above average`);
}else{
    console.log(`${country} 's population is ${33000000-population} below average`);
}