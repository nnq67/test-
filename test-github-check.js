console.log("🚀 GitHub Check Test");

function add(a, b) {
  return a + b;
}

const result = add(5, 10);

if (result === 15) {
  console.log("✅ Test Passed");
} else {
  console.log("❌ Test Failed");
  process.exit(1); // GitHub Actions sẽ đánh dấu job failed
}