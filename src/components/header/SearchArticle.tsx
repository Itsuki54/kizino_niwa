import { Input } from "@/components/ui/input";
import { InputField } from "../../common/InputField";

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
      <Input type="text" placeholder="Search Article" />
    </div>
  );
}
