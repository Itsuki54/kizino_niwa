import { Notification, User } from "@prisma/client";
import { useState } from "react";


import { createArticleMutation } from "@/utils/mutation/ArticleMutation";

import { ArticleContents } from "../organisms/ArticleContents";
import { Header } from "../organisms/Header";
interface MakeArticleProps {
  userId : string;
  user:User;
  notification : Notification[];
}

export default function MakeArticle({userId,user,notification}:MakeArticleProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  function create() {
    void createArticleMutation({ title, content,image:"", published:true, userId });
  }

  return (
    <div className="flex flex-col	backdrop-grayscale-0">
      <Header notification={notification}  user={user}/>
      <div className=" flex flex-col bg-gray-50">
      <ArticleContents content={content} setContent={setContent}setTags={setTags} setTitle={setTitle} tags={tags} title={title} />
      <button onClick={create}>Create</button>
      </div>
    </div>)
}


