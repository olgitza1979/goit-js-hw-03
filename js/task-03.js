const findBestEmployee = function (employees) {
  let maxValue = 0;
  for (const item in employees) {
    if (maxValue < employees[item]) {
      maxValue = employees[item];
    }
  }
  return maxValue;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
