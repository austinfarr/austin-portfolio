"use client";

import { AlignJustify } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import { Socials } from "./Socials";
import { useState } from "react";

const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <SheetClose asChild>
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
                setOpen={setSheetOpen}
              />
            </SheetClose>
          </div>
          <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
