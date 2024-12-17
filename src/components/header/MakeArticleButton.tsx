import Image from "next/image";
import { useRouter } from "next/router";

type  MakeArticleButtonProps = {
  id: string;
}

export function MakeArticleButton({ id }: MakeArticleButtonProps) {
  const router = useRouter();
  function handleClick() {
    void router.push({
      pathname: "/article/new",
      query: { userId: id },
    });
  }
  return (
    <>
      <button onClick={() => handleClick()}>
        <Image alt="pen" height="32" src="/svgs/pen.svg" width="32" />
      </button>
    </>
  );
}
