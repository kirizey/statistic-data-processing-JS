let randValues = [];
let randNumberCount = 100;
let lowLim = 40;
let highLim = 50;
let disp = 0;

let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (let i = 0; i < randNumberCount; i++) {
  let n = getRndInteger(40, 110);
  randValues = [...randValues, n];
}
console.log(`\nРандомный ряд:`, ...randValues);

console.log("Интервальный ряд: ");
let gl = [];
for (let j = 0; j <= 6; j++) {
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
  lowLim += 10;
  highLim += 10;
  gl.push(counter);
}

randValues.sort((a, b) => a - b);
let a = randValues[randValues.length / 2 - 1];
let b = randValues[randValues.length / 2];
console.log(`\nМедиана: ${(a + b) / 2}`);

let sr = randValues.reduce((a, b) => a + b);
let M = sr / randValues.length;
console.log(`\nВыборочное среднее: ${M}`);

for (let i = 0; i < randValues.length; i++) {
  disp += Math.pow(randValues[i] - M, 2);
}

disp /= randValues.length - 1;
console.log(`\nДисперсия: ${disp}`);

console.log(`\nCKO: ${Math.sqrt(disp)}`);
