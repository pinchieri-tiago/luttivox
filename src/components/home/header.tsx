import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLinks } from "./nav-links";

export const Header = () => {
  return (
    <header className="sticky top-0 flex shadow-xl justify-between items-center p-3">
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
            <Menu size={56} className="text-primary-500" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
             <NavLinks />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
