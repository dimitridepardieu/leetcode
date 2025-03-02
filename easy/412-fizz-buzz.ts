function fizzBuzz(n: number): string[] {
  let answer = new Array(n);

  for (let i = 1; i <= n; i++) {
    let s = "";

    if (i % 3 == 0) {
      s += "Fizz";
    }

    if (i % 5 == 0) {
      s += "Buzz";
    }

    if (s == "") {
      s += i;
    }

    answer[i - 1] = s;
  }

  return answer;
}

// Time complexity: O(n)
// Space complexity: O(1)
