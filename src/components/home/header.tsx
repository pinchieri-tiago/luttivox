import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-3">
      <div>
        <Link href="/" title="Link para página inicial">
          <Image
            src="/logo.png"
            alt="logotipo da aplicação"
            width={200}
            height={200}
            title="logotipo da aplicação"
          />
        </Link>
      </div>

      {/* mobile */}
      <div>
        <Sheet>
          <SheetTrigger>
            <Menu size={56} className="" />
          </SheetTrigger>
          <SheetContent className="bg-white">
             
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
