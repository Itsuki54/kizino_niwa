import { User, Link, Notification } from "@prisma/client";
import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import { UserEmailName } from "../molecules/setting/UserEmailName";
import { UserImage } from "../molecules/setting/UserImage";

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
  const [images, setImages] = useState<File[]>([]);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageURL, setImageURL] = useState(user.image);

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    for await (const [i, v] of Object.entries(images)) {
      formData.append("files", v);
    }
    formData.append("name", name || "");

    const post = await fetch("api/upload", {
      method: "POST",
      body: formData,
    });
    const res = await post.json();
    setImageURL(res.path.toString().replace("./public", ""));
  };

  const handleOnAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImages(files);
    console.log("files:", files);
  };

  return (
    <div className="h-full m-2">
      <h1 className="text-3xl font-bold m-4">プロフィール設定</h1>
      <div className="border-b-2 block md:flex">
        <UserImage {...{ images, imageURL, handleOnAddImage, inputFileRef, onSubmit }} />
        <UserEmailName {...{ user, name, email, isDisabled, setIsDisabled, setName, setEmail }} />
      </div>
      <button
        type="submit"
        onClick={async () => await save()}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
      >
        保存
      </button>
    </div>
  );
}
