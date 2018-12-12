function produceDrivingRange(blockRange){
  return function (first, second) {
    firstNum = Number(first.replace(/th/, ""))
    secondNum = Number(second.replace(/th/, ""))
    x = (secondNum - firstNum)
    if (x > blockRange) {
      return `${x - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - x}`
    }
  }
}

function produceTipCalculator(cost) {
  return function(percent) {
    return cost * percent
  }
}

function createDriver(name) {
  let ItemId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ItemId;
    }
  }
}
