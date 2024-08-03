import { tags } from "@/data/tag";

export const binaryToTags = (binary: string): string[] => {
    const returnTags:string[] = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            returnTags.push(tags[i]!);
        }
    }
    return returnTags;
}

export const tagsToBinary = (tags: string[]): string => {
    let binary = "";
    for (let i = 0; i < tags.length; i++) {
        binary += "0".repeat(tags.indexOf(tags[i]!)) + "1";
    }
    binary += "0".repeat(tags.length - binary.length);
    return binary;
}