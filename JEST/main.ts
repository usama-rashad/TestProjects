function solution(A: number[]): number {
  // Sort the array
  let sortedArray = A.sort((a, b) => b - a);
  console.log("sorted array " + sortedArray);
  // Go through the array and find pairs
  let makePair: boolean = false;
  let pairValue: number = 0;
  let nonPairValue: number = 0;

  if (A.length == 0) {
    return A[0];
  }

  for (let i = 0; i < sortedArray.length; i++) {
    if (!makePair) {
      pairValue = sortedArray[i];
      makePair = true;
    } else {
      if (pairValue == sortedArray[i]) {
        makePair = false;
      } else {
        nonPairValue = sortedArray[i - 1];
        makePair = false;
      }
    }
  }
  return nonPairValue;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
