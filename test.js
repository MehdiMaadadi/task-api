// test.js
const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Simple test simulation
try {
  assert.strictEqual(add(2, 3), 5);
  console.log("✅ Unit Test Passed!");
} catch (error) {
  console.error("❌ Test Failed:", error);
}
