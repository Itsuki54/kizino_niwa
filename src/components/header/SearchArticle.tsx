import { Input } from "@/components/ui/input";

export function SearchArticle() {
  return (
    <div className="flex flex-row  justify-center items-center">
      {
        /* <InputField
        height="32px"
        onChange={() => console.log("search")}
        placeholder="Search Article"
        type={""}
        value={""}
      /> */
      }
      <Input placeholder="Search Article" type="text" />
    </div>
  );
}
