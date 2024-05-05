import Image from "next/image";
import { Catalog } from "@/components/table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Catalog />
    </main>
  );
}
