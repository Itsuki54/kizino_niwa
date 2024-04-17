import {useRouter } from 'next/router';

export interface MakeArticleButtonProps {
  id: string;
}
export function MakeArticleButton(
  { id }: MakeArticleButtonProps
) {
  const router = useRouter();
  function handleClick() {
    router.push({
      pathname: '/article/new',
      query: { userId: id },
    });
  }
  return (
    <div>
      <button onClick={()=>handleClick()}>
      <img src="/icon/pen.svg" alt="pen" />
      </button>
    </div>
  );
}
