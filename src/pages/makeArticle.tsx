import { useRouter } from "next/router";

function MakeArticle() {
  const { user } = useRouter().query;
  return (
    <div>
      <h1>Make Article</h1>
    </div>
  );
}

export default MakeArticle;
