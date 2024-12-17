import { Input } from "@/components/ui/input";

export function SearchArticle() {
  return (
    <div className="flex flex-row  justify-center items-center">
      <Input placeholder="Search Article" type="text" />
    </div>
  );
}
