import { useInput } from './use-input';
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      return num;
    }
  }
  return max_num;
}

console.log(find_max([Number.NEGATIVE_INFINITY]));
