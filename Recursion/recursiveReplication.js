/* You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array. */

const replicate = (times, number) => {
  const array = [];

  if (times <= 0) {
    return [];
  }

  recursive(times, number, array);

  return array;
};

const recursive = (times, num, arr) => {
  if (times === 0) {
    return;
  }
  arr.push(num);
  recursive(times - 1, num, arr);
};
