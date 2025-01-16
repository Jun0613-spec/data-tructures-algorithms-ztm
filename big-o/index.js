// What is the Big O of the below function?
// O (n)
const funChallenge = (input) => {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();

    a++;
  }
  return a;
};

// What is the Big O of the below function?
// O(m)
const anotherFunChallenge = (input) => {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }

  let whoAmI = "I don't know";
};

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "barla",
  "hank"
];
const large = new Array(100000).fill("nemo");

// O(n)
const findNemo1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
};

findNemo1(everyone);

// O(n)
const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
};
