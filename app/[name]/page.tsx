import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return (
    <div className="flex flex-1 items-center justify-items-center max-h-90vh p-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full bg-blue-400">
      <h1>hello from {name}</h1>
    </div>
  );
}
