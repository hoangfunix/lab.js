const Mark={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
const John={
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
Mark.calcBMI();
John.calcBMI();
if(Mark.bmi>John.bmi){
    console.log(`${Mark.fullName} BMI ${Mark.bmi} is a higher than ${John.fullName} BMI ${John.bmi}`);
}
else if(John.bmi>Mark.bmi){
    console.log(`${John.fullName} BMI ${John.bmi} has a higher than ${Mark.fullName} BMI ${Mark.bmi}`);
}else{
    console.log(`Both ${Mark.fullName} and ${John.fullName} have the same BMI of ${Mark.bmi}`);
}
