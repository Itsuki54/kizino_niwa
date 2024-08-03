import { Link, Notification, User } from "@prisma/client";
import pica from "pica";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import AvatarEditor from "react-avatar-editor";
import { MdDriveFolderUpload } from "react-icons/md";
import { PrimaryButton } from "../common/PrimaryButton";
import { IconEditor } from "./IconEditor";
import { UserEmailName } from "./UserEmailName";

import { ModalComponent } from "../common/Modal";

import { Toaster, toast } from "react-hot-toast";
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
    console.log("save", name, email, imageURL);
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
    setIsDisabled(false);
  }

  const onSubmit = async () => {
    console.log("onSubmit", name, email, imageURL);
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
    console.log("useEffect", imageURL);
    if (!imageURL) return;
    (async () => {
      await save();
    })();
  }, [imageURL]);

  const handleClickChangeIcon = useCallback(() => {
    console.log("handleClickChangeIcon", iconInputRef.current);
    if (!iconInputRef.current) return;
    iconInputRef.current.click();
  }, []);

  // アイコンプレビュー変更ハンドラ
  const handleChangePreviewIcon = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log("handleChangePreviewIcon", e.target.files?.length);
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
    console.log("useEffectIcon", icon);
    setImages([icon!]);
  }, [icon]);

  // ファイル保存ハンドラ
  const handleClickFileSave = useCallback(async () => {
    console.log("handleClickFileSave", previewIcon);
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
    setPreviewIcon(null);
  }, [previewIcon, handleChangeIcon]);

  // スケール変更
  const handleChangeScale = useCallback((value: number) => {
    setScale(value);
  }, []);

  useEffect(() => {
    console.log(name, email, images);
    if (name.length > 0 && email.length > 0 && images.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, images]);

  return (
    <div className="h-full m-2">
      <div>
        <Toaster />
      </div>
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
              src={icon ? URL.createObjectURL(icon) : user.image}
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
            setName,
            setEmail,
          }}
        />
      </div>
      <div className="flex justify-end mt-4">
        <PrimaryButton
          title="保存"
          onClick={async () => {
            await onSubmit();
            toast("保存しました");
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}
