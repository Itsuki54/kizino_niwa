import Image from "next/image";
import Link from "next/link";

type MakeArticleButtonProps = {
  id: string;
};

export const MakeArticleButton = ({ id }: MakeArticleButtonProps) => {
  return (
    <Link href={{ pathname: "/article/new", query: { userId: id } }}>
      <Image alt="pen" height="32" src="/svgs/pen.svg" width="32" />
    </Link>
  );
};
