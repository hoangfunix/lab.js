const neighbors = ['Usa', 'Canada', 'Mexico', 'Brazil'];
const newLength = neighbors.push('Utopia');
console.log(neighbors);
console.log(newLength);
//neighbors.shift('Utopia');
neighbors.pop();
console.log(neighbors);
if (neighbors.includes('Germany')) {
    console.log('Germany is in the array'); 
}else{
    console.log('Probably not a central European country :D');
}
if (neighbors.includes('Sweden')) {
    console.log('Republic of Sweden');
}else{
    console.log('Do not republic of Sweden');
}
