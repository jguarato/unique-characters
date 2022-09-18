console.clear();

const {
  core: { describe, it, expect, run },
  prettify
} = window.jestLite;

function testUniqueChars(text) {
  const textInUpperCase = text.toUpperCase();
  const lastIndex = textInUpperCase.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    for (let j = lastIndex; j > i; j--) {
      if (textInUpperCase[i] === textInUpperCase[j]) {
        return false;
      }
    }
  }

  return true;
}

// These are the tests you are trying to make pass, if you choose to use the test suite.
describe("testUniqueChars", () => {
  it("has unique chars", () => {
    expect(testUniqueChars("Code")).toBe(true);
    expect(testUniqueChars("Pen")).toBe(true);
    expect(testUniqueChars("CodePen")).toBe(false);
    expect(testUniqueChars("Challenge")).toBe(false);
  });
});

prettify.toHTML(run(), document.body);
