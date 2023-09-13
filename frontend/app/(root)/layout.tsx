import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma.db";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const category = await prisma.category.findFirst({
    where: {
      userId,
    },
  });

  if (category) {
    redirect(`/${category.id}`);
  }

  return <>{children}</>;
}
