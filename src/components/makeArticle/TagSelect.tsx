import {
  useEffect,
  useState,
} from "react";

import { TagItem } from "@/components/tag/TagItem";
import { TagSelectedItem } from "@/components/tag/TagSelectedItem";
import { tags } from "@/data/tag";

type TagSelectProps = {
  setTags: Function;
};

export const TagSelect = ({ setTags }: TagSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  useEffect(() => {
    setTags(selectedTags.map(tag => tag));
  }, [selectedTags, setTags]);
  return (
    <>
      <div className="w-full p-1 flex flex-col items-center  mx-auto">
        <div className="w-full">
          <div className="flex flex-col items-center relative">
            <div className=" p-1 flex border border-gray-200 bg-white rounded w-full">
              <div className="flex flex-auto flex-wrap">
                {selectedTags.length > 0 ? (
                  selectedTags.map(tag => (
                    <TagSelectedItem
                      key={tag}
                      onDelete={(tag: string) => {
                        setSelectedTags(
                          selectedTags.filter(
                            selectedTag => selectedTag !== tag,
                          ),
                        );
                      }}
                      tag={tag}
                    />
                  ))
                ) : (
                  <div className="text-gray-400 m-1">
                    タグを選択してください
                  </div>
                )}
              </div>
              <div className="w-8 py-1 pl-2 pr-1 border-l flex items-center">
                <button
                  className="cursor-pointer w-6 h-6 outline-none focus:outline-none"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <svg
                    className="feather feather-chevron-up w-4 h-4"
                    fill="none"
                    height="100%"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" shadow  bg-white z-40 w-full lef-0 rounded max-h-select overflow-auto">
              {isOpen &&
                tags.map(tag => (
                  <TagItem
                    key={tag}
                    onClick={(tag: string) => {
                      setSelectedTags([...selectedTags, tag]);
                    }}
                    tag={tag}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
