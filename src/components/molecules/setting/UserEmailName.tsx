import { useState, useRef } from "react";
import { User } from "@prisma/client";

interface props {
  user: User;
  name: string;
  email: string;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

export function UserEmailName({
  user,
  name,
  email,
  isDisabled,
  setIsDisabled,
  setName,
  setEmail,
}: props) {
  return (
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
          onClick={() => setIsDisabled(!isDisabled)}
        >
          Save
        </button>
      )}
    </div>
  );
}
