import { User, Notification } from '@prisma/client';
import { useEffect, useState } from 'react';

import { Dialog } from '../atoms/Dialog';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { ArticleContents } from '../organisms/ArticleContents';
import { Header } from '../organisms/Header';
import { HomeLayout } from '../organisms/HomeLayout';
import SideBar from '../organisms/SideBar';

interface MakeArticleProps {
  userId: string;
  user: User;
  notification: Notification[];
}

export default function MakeArticle({ userId, user, notification }: MakeArticleProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    if (title && content && tags && title.length > 0 && content.length > 0 && tags.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content, tags]);

  async function create() {
    await fetch('/api/mutation/ArticleMutation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
        userId: userId,
        userName: user.name,
      }),
    });
    setTitle('');
    setContent('');
    setTags('');
    setDisabled(true);
    setIsConfirm(false);
  }

  useEffect(() => {
    if (isConfirm) {
      create();
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
          <div className=" flex flex-col items-center">
            <ArticleContents
              content={content}
              setContent={setContent}
              setTags={setTags}
              setTitle={setTitle}
              tags={tags}
              title={title}
            />
            <PrimaryButton disabled={disabled} onClick={() => setIsOpen(true)} title="Create" width="100px" />
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
