import { tags } from "@/data/tag";

export const binaryToTags = (binary: string): string[] => {
  const returnTags: string[] = [];
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      returnTags.push(tags[i]!);
    }
  }
  return returnTags;
};

export const tagsToBinary = (tag: string[]): string => {
  let binary = "";
  for (let i = 0; i<tags.length; i++) {
    binary += tag.find((t) => t === tags[i]) ? "1" : "0";
  }
  return binary;
};
