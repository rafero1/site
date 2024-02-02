/**
 * Represents slices of a paragraph, which is either a text or a link.
 */
interface IParagraphSlice {
  type: "text" | "link";
  text: string;
  href?: string;
}

/**
 * Parses a given description into an array of slices.
 * Links are identified by the markdown syntax [text](href).
 * @param description The description to be parsed.
 * @returns An array of paragraph slices, where each is either a text or a link.
 */
export const parseDescription = (description: string[]) => {
  return description.map((paragraph) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    let match;
    const words: IParagraphSlice[] = [];
    let lastIndex = 0;

    while ((match = linkRegex.exec(paragraph)) !== null) {
      if (match.index > lastIndex) {
        words.push({
          type: "text",
          text: paragraph.slice(lastIndex, match.index),
        });
      }

      words.push({ type: "link", text: match[1], href: match[2] });
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < paragraph.length) {
      words.push({ type: "text", text: paragraph.slice(lastIndex) });
    }

    return words;
  });
};
