// #1 - Sort 10 schools around your house by distance:
//      Insertion Sort - because the input size is small, and this algorithm is very efficient in these cases.
//      Additionally, if the input is //already (or almost) sorted, it will be even faster.

// #2 - eBay sorts listings by the current Bid amount:
//      Radix Sort or Counting Sort - because it’s a number within a range,
//      allowing us to take advantage of their fast performance with numbers.
//      Additionally, since it’s on eBay, it won’t be a value like a billion;
//      they’ll likely be smaller values.

// #3 - Sport scores on ESPN:
//      Quick Sort - because sometimes scores include decimals and different formats for sports like football, tennis, etc.
//      It will be the most efficient. Although we need to be mindful of the worst-case scenario since inputs can vary,
//      it’s important to consider the memory space we’ll use.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data:
//      Merge Sort - because we won’t be sorting in memory since the data is too large.
//      Given the massive size, we need to prioritize time complexity.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
//      Insertion Sort - because the information is almost sorted, and we’re only adding two reviews.
//

// #6 - Temperature Records for the past 50 years in Canada:
//      Radix Sort or Counting Sort - because they don’t have decimals and are usually 2-digit numbers,
//      allowing us to make use of these algorithms efficiently.

// #7 - Large user name database needs to be sorted. Data is very random:
//      Merge Sort if we have enough memory,
//      or Quick Sort if we’re not concerned about the worst-case scenario and can choose a good pivot.

// #8 - You want to teach sorting for the first time:
//      Bubble Sort or Selection Sort because they’re the simplest to understand.
