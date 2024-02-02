import { test, expect } from "vitest";
import { parseDescription } from "./parseDescription";

test("should parse the description into an array of slices", () => {
  const description = [
    "This is a sample description with [link1](https://link1.com) and [link2](https://link2.com).",
    "Another paragraph with [link3](https://link3.com).",
    "And a third paragraph with no links.",
  ];

  const parsedDescription = parseDescription(description);

  expect(parsedDescription).toEqual([
    [
      { type: "text", text: "This is a sample description with " },
      { type: "link", text: "link1", href: "https://link1.com" },
      { type: "text", text: " and " },
      { type: "link", text: "link2", href: "https://link2.com" },
      { type: "text", text: "." },
    ],
    [
      { type: "text", text: "Another paragraph with " },
      { type: "link", text: "link3", href: "https://link3.com" },
      { type: "text", text: "." },
    ],
    [{ type: "text", text: "And a third paragraph with no links." }],
  ]);
});
