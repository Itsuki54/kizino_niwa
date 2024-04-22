import { User,Notification } from "@prisma/client";
import { useState } from "react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { ArticleContents } from "../organisms/ArticleContents";
import { Header } from "../organisms/Header";
interface MakeArticleProps {
  userId : string;
  user:User;
  notification:Notification[]
}

export default function MakeArticle({userId,user,notification}:MakeArticleProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  async function create() {
    await fetch ('/api/mutation/ArticleMutation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
        image: '',
        userId: userId,
      }),
    });
  }

  return (
    <div className="flex flex-col	backdrop-grayscale-0">
      <Header notification={notification}  user={user}/>
      <div className=" bg-gray-50 flex flex-col">
      <ArticleContents content={content} setContent={setContent}setTags={setTags} setTitle={setTitle} tags={tags} title={title} />
      <PrimaryButton onClick={create} title="Create" width="100px"/>
      </div>
    </div>)
}


