"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import Toast from "@atoms/Toast";

type ToastType = "success" | "warning" | "error";

interface ToastContext {
  showToast: (message: string, type: ToastType) => void;
  closeToast: () => void;
}

export const ToastContext = createContext<ToastContext>({
  showToast: () => {},
  closeToast: () => {},
});

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const [isShowToast, setShowToast] = useState<boolean>(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = (message: string, type: ToastType) => {
    // すでに実行されているsetTimeout()をキャンセルする
    clearTimeout(timer.current);
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const closeToast = () => {
    // すでに実行されているsetTimeout()をキャンセルする
    clearTimeout(timer.current);
    setShowToast(false);
  };

  useEffect(() => {
    if (!isShowToast) return;
    // 5秒後にToastを非表示にする
    timer.current = setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }, [isShowToast]);

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {isShowToast && <Toast message={toastMessage} toastType={toastType} />}
      {children}
    </ToastContext.Provider>
  );
};
