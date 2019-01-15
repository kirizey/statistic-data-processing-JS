let randValues = [];
let randNumberCount = 300;
let lowLim = 1;
let highLim = 10;
let disp = 0;

let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let findMedian = (numArray) => {
  let a = numArray[numArray.length / 2 - 1];
  let b = numArray[numArray.length / 2];
  let median = (a + b) / 2
  console.log(`\nМедиана: ${median}`)
}

let printCountItemsInInterval = (step) => {
  for (let j = 0; j <= Math.max(...randValues) / step; j++) {
    var counter = 0;

    for (let i = lowLim; i <= highLim; i++) {
      if (randValues.indexOf(i) !== -1) {
        randValues.map(it => {
          if (it === i) {
            counter += 1;
          }
        });
      }
    }
    console.log(`Промежуток от ${lowLim} до ${highLim}: ${counter} значений`);
    lowLim += step;
    highLim += step;
  }
}

let findSampleMeanValue = (numArray) => {
  let sr = numArray.reduce((a, b) => a + b);
  return sr / numArray.length;
}

let findDispersion = (numArray) => {
  for (let i = 0; i < numArray.length; i++) {
    disp += Math.pow(numArray[i] - findSampleMeanValue(numArray), 2);
  }

  return disp /= numArray.length - 1;
}


for (let i = 0; i < randNumberCount; i++) {
  let n = getRndInteger(1, 300);
  randValues = [...randValues, n];
}

console.log(`\nРандомный ряд:`, ...randValues);

console.log("Интервальный ряд: ");

printCountItemsInInterval(10)

randValues.sort((a, b) => a - b);

findMedian(randValues)

console.log(`\nВыборочное среднее: ${findSampleMeanValue(randValues)}`);

console.log(`\nДисперсия: ${findDispersion(randValues)}`);

console.log(`\nCKO: ${Math.sqrt(findDispersion(randValues))}`);