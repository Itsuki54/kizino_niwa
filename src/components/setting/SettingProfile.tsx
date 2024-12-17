import {
  Link,
  Notification,
  User,
} from '@prisma/client';
import pica from 'pica';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Avatar from 'react-avatar';
import AvatarEditor from 'react-avatar-editor';
import {
  toast,
  Toaster,
} from 'react-hot-toast';
import { MdDriveFolderUpload } from 'react-icons/md';

import { ModalComponent } from '@/components/common/Modal';
import { PrimaryButton } from '@/components/common/PrimaryButton';

import { IconEditor } from './IconEditor';
import { UserEmailName } from './UserEmailName';

type SettingProfileProps = {
  user: User;
  link: Link[];
  notification: Notification[];
};

export const SettingProfile = ({
  user,
  link,
  notification,
}: SettingProfileProps) => {
  const [email, setEmail] = useState(user.email);
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageURL, setImageURL] = useState(user.image);
  const [images, setImages] = useState<File[]>([]);

  const [icon, setIcon] = useState<File | null>(null);
  const [previewIcon, setPreviewIcon] = useState<File | null>(null);
  const iconInputRef = useRef<HTMLInputElement | null>(null);

  const editorRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState(1);

  const onSubmit = async () => {
    const formData = new FormData();
    for (const image of images) {
      formData.append('files', image);
    }
    formData.append('name', user.name || '');
    const post = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const res = await post.json();
    setImageURL(res.path.toString().replace('./public', ''));
    await fetch('/api/mutation/user/UpdateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.id,
        name: user.name,
        email: email,
        image: imageURL,
      }),
    });
    setIsDisabled(false);
  };

  const handleClickChangeIcon = useCallback(() => {
    if (!iconInputRef.current) return;
    iconInputRef.current.click();
  }, []);

  // アイコンプレビュー変更ハンドラ
  const handleChangePreviewIcon = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) return;
      setPreviewIcon(e!.target!.files[0]!);
      e.currentTarget.value = '';
    },
    [],
  );

  // アイコン変更ハンドラ
  const handleChangeIcon = useCallback((nextIcon: File) => {
    setIcon(nextIcon);
  }, []);

  useEffect(() => {
    setImages([icon!]);
  }, [icon]);

  // ファイル保存ハンドラ
  const handleClickFileSave = useCallback(async () => {
    if (!editorRef.current) return;
    const canvas = editorRef.current.getImageScaledToCanvas();
    const picaResizer = pica();
    const resizedCanvas = await picaResizer.resize(canvas, canvas);
    resizedCanvas.toBlob(blob => {
      if (blob) {
        const nextFile = new File([blob], previewIcon!.name, {
          type: previewIcon!.type,
          lastModified: Date.now(),
        });
        handleChangeIcon(nextFile);
      }
    });
    setPreviewIcon(null);
  }, [previewIcon, handleChangeIcon]);

  // スケール変更
  const handleChangeScale = useCallback((value: number) => {
    setScale(value);
  }, []);

  useEffect(() => {
    if (images.length > 0 && email) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [email, images]);

  return (
    <div className='h-full m-2'>
      <div>
        <Toaster />
      </div>
      <h1 className='text-3xl font-bold m-4'>プロフィール設定</h1>
      <div className='border-b-2 block md:flex'>
        <div className='w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
          <div className='flex-col'>
            <Avatar
              alt='アイコン'
              color='#ddd'
              name='アイコン'
              round
              size='160'
              src={icon ? URL.createObjectURL(icon) : user.image}
            />
            <button onClick={handleClickChangeIcon} type='button'>
              <MdDriveFolderUpload style={{ fontSize: '32px' }} />
            </button>
            <input
              accept='image/*, .png, .jpg, .jpeg, .gif, .svg'
              onChange={handleChangePreviewIcon}
              ref={iconInputRef}
              style={{ display: 'none' }}
              type='file'
            />
          </div>
          <ModalComponent
            previewIcon={!!previewIcon}
            setPreviewIcon={setPreviewIcon}
            title='アイコン編集'
          >
            <IconEditor
              {...{
                previewIcon,
                editorRef,
                scale,
                handleChangeScale,
                handleClickFileSave,
              }}
            />
          </ModalComponent>
        </div>
        <UserEmailName
          email={email || ''}
          setEmail={setEmail}
          user={user}
        />
      </div>
      <div className='flex justify-end mt-4'>
        <PrimaryButton
          disabled={isDisabled}
          onClick={async () => {
            await onSubmit();
            toast('保存しました');
          }}
          title='保存'
        />
      </div>
    </div>
  );
};
