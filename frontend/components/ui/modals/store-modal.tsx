"use client";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import addCategory from "@/server/storeForm";

const formSchema = z.object({
  storeName: z.string().min(1).max(50),
});

export type StoreFormValues = z.infer<typeof formSchema>;

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
    },
  });

  async function onSubmit(formData: StoreFormValues) {
    setIsLoading(true);
    try {
      addCategory(formData);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      title="Add Category"
      description="Add a new category to manage products and reports"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="storeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Lighting" {...field} />
                    </FormControl>
                    <FormDescription>Enter a product category</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end">
                <Button
                  onClick={storeModal.onClose}
                  variant="outline"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <p>Cancel</p>
                  )}
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <p>Continue</p>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
