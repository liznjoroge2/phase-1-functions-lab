//code your soluton in this file!
function distanceFromHqInBlocks(BlockNumber){
    if(BlockNumber>42){
      return BlockNumber-42;

    }else if (BlockNumber<42){
      return 42-BlockNumber;
    }else{
      return 0;
    }
  }
  
  console.log(distanceFromHqInBlocks(43));
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(34));
  
  function distanceFromHqInFeet(BlockNumber){
    return distanceFromHqInBlocks(BlockNumber)*264;

  }
  console.log(distanceFromHqInFeet(43));
  console.log(distanceFromHqInFeet(50));
  console.log(distanceFromHqInFeet(34));
  
  function distanceTravelledInFeet(BlockNumberA,BlockNumberB){
    return Math.abs(BlockNumberA*264-BlockNumberB*264);
  }
  console.log(distanceTravelledInFeet(34,28));
  console.log(distanceTravelledInFeet(50,60));
  console.log(distanceTravelledInFeet(43,28));

  function calculatesFarePrice(start,destination){
    const totalDistanceTravelled=Math.abs(start*264-destination*264);
    if(totalDistanceTravelled<400){
        return 0;
      }else if(totalDistanceTravelled<2000){
        return 2.56;
      }else if(totalDistanceTravelled<2500){
        return 25;
      }else{
        return "cannot travel that far";
      }


    }

    
