import { redirect } from "next/navigation";

interface PageProps {
  params: {
    id: string;
    subid: string;
  };
}

export default function RedirectPage({ params }: PageProps) {
  // Destructure the params correctly
  const { id, subid } = params;

  // Build the new target URL dynamically
  const target = `https://old.batyevka.net/i/${id}/s/${subid}`;

  // Immediately redirect
  redirect(target);
}
