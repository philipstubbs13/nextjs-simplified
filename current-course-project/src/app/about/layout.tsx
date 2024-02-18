import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    description: "About Desc",
  }

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <>
            <h1>About Layout</h1>
            {children}
        </>
    )
}