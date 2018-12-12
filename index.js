// function produceDrivingRange(range){
//   return function(start, end){
//     let startInt = parseInt(start);
//     let endInt = parseInt(end);
//     let phrase;
//     if(endInt - startInt > range){
//       phrase = `${endInt - startInt - range}blocks out of range`
//     }
//
//   }
// }

function produceDrivingRange(range){
  return function(start, end){
    let startInt = parseInt(start);
    let endInt = parseInt(end);
    let phrase;
    if(endInt - startInt > range){
      phrase = `${endInt - startInt - range} blocks out of range`
    } else {
      phrase = `within range by ${range - (endInt - startInt)}`
    }
    return phrase
  }
}

function produceTipCalculator(percentTip){
  return function(dollarAmount){
    return percentTip * dollarAmount

  }
}



// class Item {
//   constructor(name, manufacturePrice) {
//     this.name = name;
//     this.manufacturePrice = manufacturePrice;
//   }
//   retailPrice(marketMultiplier) {
//     return marketMultiplier * this.manufacturePrice;
//   }
// }

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name
      this.id = driverId++
    }
  }
}
