import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import prisma from "@/lib/prisma.db";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categoryId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const category = await prisma.category.findFirst({
    where: {
      id: params.categoryId,
      userId,
    },
  });

  if (!category) {
    redirect("/");
  }

  return (
    <>
      <div>This will be a navbar</div>
      {children}
    </>
  );
}
