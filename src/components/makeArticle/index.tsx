import { User, Notification } from "@prisma/client";
import { useEffect, useState } from "react";

import { Dialog } from "../common/Dialog";
import { PrimaryButton } from "../common/PrimaryButton";
import { Header } from "../header";
import { HomeLayout } from "../../layout/HomeLayout";
import SideBar from "../sidebar";
import { Toaster, toast } from "react-hot-toast";
import { InputField } from "../common/InputField";
import { MarkdownEditor } from "./Editor";
import { TagSelect } from "./TagSelect";
import { tagsToBinary } from "@/utils/binary";

interface MakeArticleProps {
  userId: string;
  user: User;
  notification: Notification[];
}

export function MakeArticle({ userId, user, notification }: MakeArticleProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
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
    const binary = tagsToBinary(tags);
    await fetch("/api/mutation/article/CreateArticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        userId: userId,
        tags: binary,
      }),
    });
    setTitle("");
    setContent("");
    setTags([]);
    setDisabled(true);
    setIsConfirm(false);
    toast("記事を投稿しました！");
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
    <div>
      <div>
        <Toaster />
      </div>
      <Header user={user} notification={notification} />
      <div className="flex-col p-4">
        <div className="flex justify-center w-full">
          <div className="w-full flex-col">
            <div className="flex-col flex justify-center">
              <h1 className="text-3xl font-bold m-3">新しい記事の投稿</h1>
              <p className="text-m m-3">
                記事のタイトルとタグを入力してください
              </p>
              <div className="m-3">
                <InputField
                  onChange={setTitle}
                  placeholder="Title"
                  type="text"
                  value={title}
                />
                <TagSelect setTags={setTags} />
              </div>
            </div>
            <MarkdownEditor setMarkdown={setContent} markdown={content} />
          </div>
        </div>
        <PrimaryButton
          disabled={disabled}
          onClick={() => setIsOpen(true)}
          title="投稿する"
          width="100px"
        />
      </div>
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
    </div>
  );
}
