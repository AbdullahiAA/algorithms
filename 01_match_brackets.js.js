// Match the brackets to make sure that they are closed appropriately

// Example 1: Input: s = "()" Output: true.
// Example 2: Input: s = "()[]{}" Output: true.
// Example 3: Input: s = "(]" Output: false.
// Example 4: Input: s = "([)]" Output: false.
// Example 5: Input: s = "{[]}" Output: true.
// Example 6: Input: s = "((([[[{}]]))" Output: false.
// Example 7: Input: s = "((([[[{}]])))" Output: false.
// Example 8: Input: s = "((([[[{}]]])))" Output: true.

function check(input) {
  const correspondingBrackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const openingBrackets = ["(", "{", "["];
  const tempArr = [];

  const inputArr = input.split("");
  let status = true;

  for (let i = 0; i < inputArr.length; i++) {
    if (status === false) break;

    const el = inputArr[i];

    if (openingBrackets.includes(el)) {
      tempArr.push(el);
    } else if (correspondingBrackets[tempArr.pop()] !== el) {
      status = false;
    }
  }

  if (tempArr.length > 0) status = false;

  console.log(input, status);
}

check("()");
check("()[]{}");
check("(]");
check("([)]");
check("{[]}");
check("((([[[{}]]))");
check("((([[[{}]])))");
check("((([[[{}]]])))");
