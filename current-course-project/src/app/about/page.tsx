import { Metadata } from "next"

export async function generateMetadata({ params }): Promise<Metadata> {
    return { title: "users name "}
}

export default function About() {
    return <h1>About</h1>
}