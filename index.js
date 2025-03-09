// Returns the first two drivers from the array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Returns the last two drivers from the array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Returns a function that multiplies a fare by a given multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Selects different drivers based on the provided function
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}