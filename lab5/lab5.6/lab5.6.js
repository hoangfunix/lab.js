const listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i= listOfNeighbours.length-1; i>=0; i--){
    console.log(listOfNeighbours[i]);
    for(let j=0; j<listOfNeighbours[i].length; j++){
        console.log(listOfNeighbours[i][j]);
    }
}