import { User, Link, Notification } from "@prisma/client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { MdDriveFolderUpload } from "react-icons/md";
import AvatarEditor from "react-avatar-editor";
import ReactSlider from "react-slider";
import pica from "pica";
import { IoClose } from "react-icons/io5";
import { UserEmailName } from "../molecules/setting/UserEmailName";
import { IconEditor } from "../molecules/setting/IconEditor";
import { PrimaryButton } from "../atoms/common/PrimaryButton";

import { ModalComponent } from "../atoms/common/Modal";

export interface SettingProfileProps {
  user: User;
  link: Link[];
  notification: Notification[];
}

export function SettingProfile({
  user,
  link,
  notification,
}: SettingProfileProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageURL, setImageURL] = useState(user.image);
  const [images, setImages] = useState<File[]>([]);

  const [icon, setIcon] = useState<File | null>(null);
  const [previewIcon, setPreviewIcon] = useState<File | null>(null);
  const iconInputRef = useRef<HTMLInputElement | null>(null);

  const editorRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState(1);

  async function save() {
    await fetch("/api/mutation/user/UpdateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        name: name,
        email: email,
        image: imageURL,
      }),
    });
    setIsDisabled(true);
  }

  const onSubmit = async () => {
    const formData = new FormData();
    for (const image of images) {
      formData.append("files", image);
    }
    formData.append("name", name || "");
    const post = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const res = await post.json();
    setImageURL(res.path.toString().replace("./public", ""));
  };

  useEffect(() => {
    (async () => {
      await save();
    })();
  }, [imageURL]);

  const handleClickChangeIcon = useCallback(() => {
    if (!iconInputRef.current) return;
    iconInputRef.current.click();
  }, []);

  // アイコンプレビュー変更ハンドラ
  const handleChangePreviewIcon = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) return;
      setPreviewIcon(e!.target!.files[0]!);
      e.currentTarget.value = "";
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
    resizedCanvas.toBlob((blob) => {
      if (blob) {
        const nextFile = new File([blob], previewIcon!.name, {
          type: previewIcon!.type,
          lastModified: Date.now(),
        });
        handleChangeIcon(nextFile);
      }
    });
  }, [previewIcon, handleChangeIcon]);

  // スケール変更ハンドラ
  const handleChangeScale = useCallback((value: number) => {
    setScale(value);
  }, []);

  useEffect(() => {
    console.log(name, email, imageURL);
    if (name.length > 0 && email.length > 0 && imageURL.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, imageURL]);

  return (
    <div className="h-full m-2">
      <h1 className="text-3xl font-bold m-4">プロフィール設定</h1>
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="flex-col">
            <Avatar
              size="160"
              name="アイコン"
              round
              color="#ddd"
              alt="アイコン"
              src={icon ? URL.createObjectURL(icon) : imageURL}
            />
            <button type="button" onClick={handleClickChangeIcon}>
              <MdDriveFolderUpload style={{ fontSize: "32px" }} />
            </button>
            <input
              type="file"
              accept="image/*, .png, .jpg, .jpeg, .gif, .svg"
              style={{ display: "none" }}
              ref={iconInputRef}
              onChange={handleChangePreviewIcon}
            />
          </div>
          <ModalComponent
            title="アイコン編集"
            previewIcon={!!previewIcon}
            setPreviewIcon={setPreviewIcon}
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
          {...{
            user,
            name,
            email,
            isDisabled,
            setIsDisabled,
            setName,
            setEmail,
          }}
        />
      </div>
      <div className="flex justify-end mt-4">
        <PrimaryButton
          title="保存"
          onClick={async () => await onSubmit()}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
