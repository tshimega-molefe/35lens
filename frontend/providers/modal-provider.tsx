"use client";

import { StoreModal } from "@/components/ui/modals/store-modal";
import { FC, useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};

export default ModalProvider;
