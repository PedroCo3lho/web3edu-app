import React, { ReactNode } from "react";

interface AppSkeletonProps {
  children: ReactNode;
}

export const AppSkeleton: React.FC<AppSkeletonProps> = ({ children }) => {
  return (
    <main className="flex w-full flex-col items-center h-screen bg-base-100">
      <section className="flex flex-col w-full h-full items-center justify-start gap-6">
        {children}
      </section>
    </main>
  );
};
