import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
    subid: string;
  }>;
}

export default async function RedirectPage({ params }: PageProps) {
  const { id, subid } = await params;

  const target = `https://old.batyevka.net/i/${id}/s/${subid}`;

  redirect(target);
}
