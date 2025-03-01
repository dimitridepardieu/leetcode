function runningSum(nums: number[]): number[] {
  const length = nums.length;

  let results = new Array(length);
  results[0] = nums[0];

  for (let i = 1; i < length; i++) {
    results[i] = results[i - 1] + nums[i];
  }

  return results;
}

// Time complexity: O(n)
// Space complexity: O(n)
