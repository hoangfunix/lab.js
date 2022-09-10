//dữ liệu 1
const massMark1 = 78;
const heightMark1 = 1.69;
const bmiMark1 = massMark1 / (heightMark1 * heightMark1);

const massJohn1 = 92;
const heightJohn1 = 1.95;
const bmiJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(`${markHigherBMI1}
${bmiMark1}
${bmiJohn1}`);
//dữ liệu 2
const massMark2 = 95;
const heightMark2 = 1.88;
const bmiMark2 = massMark2 / (heightMark2 * heightMark2);

const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(`${markHigherBMI2}
${bmiMark2}
${bmiJohn2}`);

// if1
if(bmiMark1>bmiJohn1){
    console.log(`Mark's BMI ${bmiMark1} is higher than John's BMI ${bmiJohn1}`);
}else{
    console.log(`John's BMI ${bmiJohn1} is higher than Mark's BMI ${bmiMark1}`);

}
//if2
if(bmiMark2>bmiJohn2){
    console.log(`Mark's BMI ${bmiMark2} is higher than John's BMI ${bmiJohn2}`);
}else{
    console.log(`John's BMI ${bmiJohn2} is higher than Mark's BMI ${bmiMark2}`);

}
