const calcTip= function(bill){
    return bill>=50&&bill<=300? bill*0.15: bill*0.2;
}
const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips= [];
const total= [];
for(let i=0; i<bills.length; i++){
    tips[i]= calcTip(bills[i]);
    total[i]= bills[i]+tips[i];
}

console.log(bills,tips,total);
const calcAvg= function(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(`The average tip is ${calcAvg(tips)}`);
console.log(`The average total is ${calcAvg(total)}`);
