"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { useState } from "react";

export const Header = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  return (
    <header className="sticky top-0 flex items-center justify-between p-3 shadow-xl ">
      <div className="ml-4">
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
      <div className="md:hidden">
        <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
          <SheetTrigger>
            <Menu size={56} className="text-primary-500" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <NavLinks setIsOpenSheet={setIsOpenSheet} />
          </SheetContent>
        </Sheet>
      </div>

      {/* tablet desktop */}
      <div className="hidden md:flex">
        <NavLinks />
      </div>
    </header>
  );
};
