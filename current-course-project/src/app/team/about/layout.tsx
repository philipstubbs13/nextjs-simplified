import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode}) {
    return <>
        <h1>Hi From Layout 2</h1>
        {children}
    </>
}