import { Tag } from "@prisma/client";
import { TagSelectedItem } from "../atoms/TagSelectedItem";
import { TagItem } from "../atoms/TagItem";
import { use, useEffect, useState } from "react";

interface TagSelectProps {
  tagList: Tag[];
  setTags: Function;
}

export function TagSelect({ tagList, setTags }: TagSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  useEffect(() => {
    setTags(selectedTags);
  }, [selectedTags]);
  return (
    <>
      <div
        className="w-full p-1
       flex flex-col items-center  mx-auto"
      >
        <div className="w-full">
          <div className="flex flex-col items-center relative">
            <div className=" p-1 flex border border-gray-200 bg-white rounded w-full">
              <div className="flex flex-auto flex-wrap">
                {selectedTags.length > 0 ? (
                  selectedTags.map((tag) => {
                    return (
                      <TagSelectedItem
                        key={tag.id}
                        tag={tag}
                        onDelete={(tag: Tag) => {
                          setSelectedTags(
                            selectedTags.filter((t) => t.id !== tag.id),
                          );
                        }}
                      />
                    );
                  })
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
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-up w-4 h-4"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" shadow  bg-white z-40 w-full lef-0 rounded max-h-select overflow-auto">
              {isOpen &&
                tagList.map((tag) => {
                  return (
                    <div className="cursor-pointer  " key={tag.id}>
                      <TagItem
                        tag={tag}
                        onClick={() => {
                          setSelectedTags([...selectedTags, tag]);
                          setIsOpen(false);
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
