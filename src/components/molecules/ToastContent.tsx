"use client";

import { useToast } from "@context/ToastContext";

const ToastContent = () => {
  const { showToast, closeToast } = useToast();

  return (
    <div>
      <div className="text-center w-9/12 my-0 mx-auto pt-36">
        <button
          className="p-2 border-2 rounded-xl text-green-700 bg-green-200 border-green-700"
          type="button"
          onClick={() => showToast("success", "success")}
        >
          success
        </button>
        <button
          className="ml-2 p-2 border-2 rounded-xl text-yellow-700 bg-yellow-200 border-yellow-700"
          type="button"
          onClick={() => showToast("warning", "warning")}
        >
          warning
        </button>
        <button
          className="ml-2 p-2 border-2 rounded-xl text-red-700 bg-red-200 border-red-700"
          type="button"
          onClick={() => showToast("error", "error")}
        >
          error
        </button>
        <button
          className="ml-2 p-2 border-2 rounded-xl text-gray-700 bg-gray-200 border-gray-700"
          type="button"
          onClick={closeToast}
        >
          closeToast
        </button>
      </div>
    </div>
  );
};

export default ToastContent;
