import { User } from "@prisma/client";
import { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";

interface props {
  user: User;
  name: string;
  email: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

export function UserEmailName({ user, name, email, setName, setEmail }: props) {
  const [orginName, setOrginName] = useState(name);
  const [orginEmail, setOrginEmail] = useState(email);

  function cancel() {
    setName(orginName);
    setEmail(orginEmail);
  }

  return (
    <div className="w-full md:w-3/5 p-4 lg:ml-4 shadow-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">プロフィール</h2>
        <button onClick={cancel}>
          <IoReloadOutline />
        </button>
      </div>
      <div className="rounded  shadow p-6">
        <label className="font-semibold block pb-1">名前</label>
        <div className="flex">
          <input
            className="border-1  rounded-r px-4 py-2 w-full"
            id="username"
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
          />
        </div>
        <div className="pb-2">
          <label className="font-semibold  block pb-1" htmlFor="about">
            メールアドレス
          </label>
          <input
            className="border-1 px-4 py-2 w-full"
            id="email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </div>
      </div>
    </div>
  );
}
