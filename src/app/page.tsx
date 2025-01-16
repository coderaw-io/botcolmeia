import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-6 overflow-hidden">
      <h1 className="text-6xl font-bol">
        Seja bem vindo
      </h1>
      <p className="max-w-lg w-full text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae nemo exercitationem iste aliquid tempore amet modi atque. Tempora adipisci magni nam, possimus quisquam suscipit vero atque voluptatibus in fugiat?
      </p>

      <div className="w-full flex justify-center items-center">
        <Link href="/dashboard">
          <Button className="px-8 py-3.5 w-52 text-base">Vamos começar?</Button>
        </Link>
      </div>
    </div>
  );
}
