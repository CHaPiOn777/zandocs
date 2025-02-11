"use client";
import DocsContent from "@/app/documents/[id]/DocsContent";
import Loader from "@/ui/Loader/Loader";
import { Suspense, use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: Props) => {
  const { id } = use(params); // Убираем await

  return (
    <Suspense fallback={<Loader isLoader={true} />}>
      <DocsContent id={id} />
    </Suspense>
  );
};

export default Page;
