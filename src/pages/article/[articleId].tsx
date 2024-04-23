import { useRouter } from 'next/router';

const ArticlePage = () => {
  const { title: title, userName: userName, content: content, like: like } = useRouter().query;

  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{like}</div>
      <div>{userName}</div>
    </div>
  );
};

export default ArticlePage;
