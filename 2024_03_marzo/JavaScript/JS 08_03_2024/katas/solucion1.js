const counterWords = [
  "code", // 0
  "repeat", // 1
  "eat", // 2
  "sleep", // 3
  "code", // 4
  "enjoy", // 5
  "sleep", // 6
  "code", // 7
  "enjoy", // 8
  "upgrade", // 9
  "code", // 10
];

function repeatCounter(list) {
  // primero queremos un array con las palabras sin que se repitan
  const newArray = [];
  const arrayDef = [];

  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    if (!newArray.includes(word)) {
        newArray.push(word);
    }
  }

  for (const word of newArray) {
    let counter = 0;
    let string = "";
    for (const wordList of list) {
        if (word === wordList) {
            counter++;
            string = `${word} se repite ${counter} ${counter === 1 ? "vez" : "veces"}`;
        }
    }
    arrayDef.push(string);
  }
  return arrayDef;
}

console.log(repeatCounter(counterWords));