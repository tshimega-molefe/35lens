"use client";

import { useEffect } from "react";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      Root Page
    </div>
  );
};

export default SetupPage;
