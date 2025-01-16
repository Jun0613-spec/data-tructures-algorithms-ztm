const boxes = ["a", "b", "c", "d", "e"];

//Time O(n)^2
//Space O(1)
const logAllParisOfArray = (array) => {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllParisOfArray(boxes);

//Time O(n)
//Space O(1)
const boooo = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log("booooooo!");
  }
};

boooo([1, 2, 3, 4, 5]);

// Time O(n)
// Space O(n)
const arrayOfHiNTimes = (n) => {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }

  return hiArray;
};

console.log(arrayOfHiNTimes(5));
