import { User, Link, Notification } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { set } from "react-hook-form";

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
  async function save() {
    console.log( name, email,user.image)
    await fetch("/api/mutation/user/UpdateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        name: name,
        email: email,
        image: user.image,
      }),
    });
    setIsDisabled(true);
  }
  return (
    <div className="h-full m-2">
      <h1 className="text-3xl font-bold m-4">プロフィール設定</h1>
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="flex justify-between">
            <a
              onClick={() => console.log("edit")}
              className="-mt-2 text-md font-bold text-white px-5 py-2 "
            >
              Edit
            </a>
          </div>
          <div className="w-full p-8 mx-2 flex justify-center">
            <Image
              src={user.image}
              alt="user"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="flex-end">
            <a
              onClick={() => setIsDisabled(!isDisabled)}
              className="-mt-2 text-md font-bold text-white  px-5 py-2 "
            >
              Edit
            </a>
          </div>
          <div className="rounded  shadow p-6">
            <label className="font-semibold block pb-1">Name</label>
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
                Email
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
          {!isDisabled && (
            <button
              className=" text-md font-bold justify-end animate-pulse mt-3"
              onClick={async () => await save()}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
