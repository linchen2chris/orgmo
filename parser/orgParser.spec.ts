import parser from "./orgParser";
import { stringify } from "flatted";

describe("orgParser", () => {
  it("should parse hello world", () => {
    const orgContent = "* hello world";

    const parsedObj = parser.parse(orgContent);
    expect(parsedObj).toMatchObject({
      nodes: [
        {
          type: "header",
          level: 1,
          children: [
            {
              children: [
                {
                  value: "hello world",
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it("should parse second header", () => {
    const orgContent = "* hello world\n** level 2";

    const parsedObj = parser.parse(orgContent);

    const nodes = parsedObj.nodes;
    expect(nodes[0]).toMatchObject({
      type: "header",
      level: 1,
      children: [
        {
          children: [{ value: "hello world" }],
        },
      ],
    });

    expect(nodes[1]).toMatchObject({
      level: 2,
      type: "header",
      children: [
        {
          children: [{ value: "level 2" }],
        },
      ],
    });
  });
});
