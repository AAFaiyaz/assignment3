function feetToMile (feet){
    var mile = feet/5280;
    if (mile>0) {
        return mile+" mile";
    }
    else {
        return "mile can't be a negative number";
    }
}

function woodCalculator (chair,table,bed){
    var chairWood = chair*1;
    var tableWood = table*3;
    var bedWood = bed*5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const brick = 1000;
function brickCalculator (buildingFloor) {
    var brickCount;
    
    if (buildingFloor<=10) {
        brickCount = 15*brick*buildingFloor;
    }

    else if (buildingFloor>10 && buildingFloor <=20) {
        brickCount = 15*brick*10;
        brickCount = brickCount + (12*brick*(buildingFloor-10));
        
    }

    else if (buildingFloor > 20) {
        brickCount = 15*brick*10;
        brickCount = brickCount + (12*brick*10);
        brickCount = brickCount + (10*brick*(buildingFloor-20));
    }

    return brickCount;
}

function tinyFriend(friends){
    var tinyFriendCounter = friends[0].length;
    var tinyFriendName;
    for (i=1;i<friends.length;i++){
        if (friends[i].length < tinyFriendCounter){
            tinyFriendCounter = friends[i].length;
            tinyFriendName = friends[i];
            
            }
    }
    console.log(tinyFriendName);  
}
