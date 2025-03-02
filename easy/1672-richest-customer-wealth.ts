function maximumWealth(accounts: number[][]): number {
  const m = accounts.length;

  let max = 0;

  for (let i = 0; i < m; i++) {
    const n = accounts[i].length;

    let wealth = 0;

    for (let j = 0; j < n; j++) {
      wealth += accounts[i][j];
    }

    if (wealth > max) {
      max = wealth;
    }
  }

  return max;
}

// Time complexity: m * n
// Space complexity: O(1)
