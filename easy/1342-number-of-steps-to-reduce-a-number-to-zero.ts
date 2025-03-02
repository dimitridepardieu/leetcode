function numberOfSteps(n: number): number {
  let steps = 0;
  let number = n;

  while (number > 0) {
    if (number % 2 == 0) {
      number /= 2;
    } else {
      number--;
    }

    steps++;
  }

  return steps;
}

function numberOfStepsBitwise(n: number): number {
  let steps = 0;
  let number = n;

  while (number > 0) {
    if ((number & 1) == 0) {
      number >>= 1;
    } else {
      number--;
    }

    steps++;
  }

  return steps;
}

// Time complexity: O(log n)
// Space complexity: O(1)
