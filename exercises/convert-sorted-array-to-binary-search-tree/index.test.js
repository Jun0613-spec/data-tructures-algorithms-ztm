import { describe, expect, test } from "vitest";
import { sortedArrayToBST } from "./index";

const treeToArray = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
};

describe("sortedArrayToBST", () => {
  test("should convert sorted array to a height-balanced BST", () => {
    const nums = [-10, -3, 0, 5, 9];
    const bst = sortedArrayToBST(nums);
    const output = treeToArray(bst);

    // Valid BSTs for this input:
    const expectedOutputs = [
      [0, -3, 9, -10, null, 5],
      [0, -10, 5, null, -3, null, 9]
    ];

    expect(expectedOutputs).toContainEqual(output);
  });

  test("should handle small arrays", () => {
    const result = treeToArray(sortedArrayToBST([1, 3]));
    const expectedOutputs = [
      [3, 1],
      [1, null, 3]
    ];

    expect(expectedOutputs).toContainEqual(result);
  });

  test("should return null for an empty array", () => {
    expect(sortedArrayToBST([])).toBeNull();
  });
});
