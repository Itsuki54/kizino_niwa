import { useState } from "react";
import { User } from "@prisma/client";
import { PrimaryButton } from "@/components/atoms/common/PrimaryButton";

interface props {
  user: User;
  name: string;
  email: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

export function UserEmailName({ user, name, email, setName, setEmail }: props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [orginName, setOrginName] = useState(name);
  const [orginEmail, setOrginEmail] = useState(email);

  function cancel() {
    setName(orginName);
    setEmail(orginEmail);
    setIsDisabled(true);
  }

  return (
    <div className="w-full md:w-3/5 p-4 lg:ml-4 shadow-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {isDisabled ? "ユーザー情報" : "ユーザー情報編集"}
        </h2>
        <div className="flex justify-end mb-4 gap-4">
          <PrimaryButton
            title="キャンセル"
            onClick={() => cancel()}
            disabled={isDisabled}
          />
          <PrimaryButton
            title="編集"
            onClick={() => setIsDisabled(!isDisabled)}
            disabled={!isDisabled}
          />
        </div>
      </div>
      <div className="rounded  shadow p-6">
        <label className="font-semibold block pb-1">名前</label>
        <div className="flex">
          <input
            disabled={isDisabled}
            id="username"
            className="border-1  rounded-r px-4 py-2 w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="pb-2">
          <label htmlFor="about" className="font-semibold  block pb-1">
            メールアドレス
          </label>
          <input
            disabled={isDisabled}
            id="email"
            className="border-1 px-4 py-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
