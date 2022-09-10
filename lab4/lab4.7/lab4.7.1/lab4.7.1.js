const calcAverage = (a, b, c) => ( a + b + c ) / 3;
//1
let scoreDolphin =calcAverage(44,23,71);
let scoreKoalas =calcAverage(65,50,49);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = function(avgDolphin, avgKoalas) {
    if (avgDolphin >=2 * avgKoalas) {
        console.log(`Dolphin wins!🏆 (${avgDolphin} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphin) {
        console.log(`Koalas wins!🏆 ${avgKoalas} vs (${avgDolphin})`);
    }else { 
        console.log(`no team wins!🤔 (${avgDolphin} vs ${avgKoalas})`);
    }
}
checkWinner(scoreDolphin, scoreKoalas);

//2
scoreDolphin =calcAverage(85,54,41);
scoreKoalas =calcAverage(23,34,27);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);