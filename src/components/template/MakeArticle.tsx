import { User, Notification, Tag } from "@prisma/client";
import { useEffect, useState } from "react";

import { Dialog } from "../atoms/common/Dialog";
import { PrimaryButton } from "../atoms/common/PrimaryButton";
import { ArticleContents } from "../organisms/makeArticle/MakeArticleContents";
import { Header } from "../organisms/layout/Header";
import { HomeLayout } from "../organisms/layout/HomeLayout";
import SideBar from "../organisms/layout/SideBar";

interface MakeArticleProps {
  userId: string;
  user: User;
  notification: Notification[];
  tagList: Tag[];
}

export default function MakeArticle({
  userId,
  user,
  notification,
  tagList,
}: MakeArticleProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [fin, setFin] = useState(false);
  useEffect(() => {
    if (
      title &&
      content &&
      tags &&
      title.length > 0 &&
      content.length > 0 &&
      tags.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content, tags]);

  async function create() {
    await fetch("/api/mutation/Article.mutation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        userId: userId,
        tagIds: [],
      }),
    });
    setTitle("");
    setContent("");
    setTags("");
    setDisabled(true);
    setIsConfirm(false);
  }

  useEffect(() => {
    if (isConfirm) {
      create();
      setFin(true);
    }
    if (isCancel) {
      setIsCancel(false);
    }
  }, [isConfirm, isCancel]);

  return (
    <>
      <HomeLayout
        header={<Header notification={notification} user={user} />}
        leftBar={<SideBar />}
        main={
          <div className=" flex flex-col items-center m-3 h-screen">
            <ArticleContents
              finished={fin}
              setContent={setContent}
              setTags={setTags}
              setTitle={setTitle}
              tags={tags}
              tagList={tagList}
              title={title}
            />
            <PrimaryButton
              disabled={disabled}
              onClick={() => setIsOpen(true)}
              title="投稿する"
              width="100px"
            />
          </div>
        }
        rightBar={<div>広告とか貼れそう</div>}
      />
      <Dialog
        cancelText="Cancel"
        confirmText="OK"
        description="記事を投稿しますか？"
        isOpen={isOpen}
        setIsCancel={setIsCancel}
        setIsConfirm={setIsConfirm}
        setIsOpen={setIsOpen}
        title="投稿確認"
      />
    </>
  );
}
