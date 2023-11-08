function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
  }

  function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers];
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  function fareDoubler(fare) {
    return fare * 2;
  }

  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
  }