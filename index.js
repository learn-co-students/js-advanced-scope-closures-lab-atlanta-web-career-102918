// produceDrivingRange() - Returns a function that then calculates
// whether a given trip is within range. For example, produceDrivingRange(10)
// returns a function that will return false if the trip is over 10 blocks distance
// and true if the distance is within range. So produceDrivingRange returns
// a function that we can then use to calculate if a trip is too large for a driver.
// We recommend referencing the test/indexTest.js for more details.

function produceDrivingRange (blockRange) {
  return function (start, end) {
    let totalDistance = Math.abs(parseInt(start) - parseInt(end));
    if (blockRange < totalDistance) {
      return `${totalDistance - blockRange} blocks out of range`;
    }
    else {
      return `within range by ${blockRange - totalDistance}`;
    }
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip.
// For example, produceTipCalculator(.10) returns a function that calculates
// ten percent tip on a fare. produceTipCalculator(.20) returns a function that
// calculates twenty percent tip on a fare.

function produceTipCalculator (tip) {
  return function (fare) {
    return fare * tip;
  }
}

// createDriver is a function that returns a Driver class.
// The class has reference to a driverId that is incremented each time a new driver is created.
// The rest of the code base does not have access to driverId.

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
     this.name = name;
     this.id = ++driverId;
    }
  }
}
