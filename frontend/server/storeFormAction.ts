"use server";

import { StoreFormValues } from "@/components/ui/modals/store-modal";
import { getErrorMessage } from "@/lib/utils";

export default async function addCategory(formData: StoreFormValues) {
  console.log(formData);
  try {
    // TODO: Create Store
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  } finally {
  }
}
