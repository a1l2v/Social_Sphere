import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import { CircleIcon, MenuIcon } from 'lucide-react'
import Link from "next/link"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <MenuIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <CircleIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Social Sphere</span>
          </Link>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav