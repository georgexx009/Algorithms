function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const tail = nums.pop();
    if (tail !== undefined) {
      nums.unshift(tail);
    }
  }
}

const a = [1, 2, 3, 4, 5, 6, 7];
rotate(a, 3);
console.log(a);

const b = [-1, -100, 3, 99];
rotate(b, 2);
console.log(b);

const c = [2147483647, -2147483648, 33, 219, 0];
rotate(c, 4);
console.log(c);
