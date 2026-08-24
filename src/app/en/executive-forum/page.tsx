import type { Metadata } from "next"
import { ExecutiveForumPageContent } from "@/app/executive-forum/page"

export const metadata: Metadata = {
  title: "CONAJOMX Executive Forum — Cambridge & Boston Leadership Experience",
  description:
    "CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience. Executive dialogue for a sustainable and competitive future with Mexican business leaders.",
}

export default function ExecutiveForumEnPage() {
  return <ExecutiveForumPageContent locale="en" />
}
