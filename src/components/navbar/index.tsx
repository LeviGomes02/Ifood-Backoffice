import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Bell, Bolt, ClipboardPlus, CreditCard, LayoutGrid, LogOut, Menu, Package, ShoppingBag, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Perfil from "/img/navbar/bistro-ouvidor.jpg"
import Logo from "/img/navbar/ifood-logo-14.png"

export function Navbar({ children }: React.PropsWithChildren) {
  return (
    <div>
      <div className="flex w-full bg-muted/50 border-b">
        <div className="flex items-center ">
          <h1 className="text-lg font-bold ms-3 ">Dashboard</h1>
        </div>
        <div className="flex flex-col ms-auto">
          <header className="sticky top-0 z-30 flex h-14 items-center px-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu />
                  <span className="sr-only">Abrir</span>
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader className="border-b p-2">
                  <SheetTitle>
                    <Link to="#" className="flex justify-center">
                        <img src={Logo} alt="Ifood logo" className="w-1/2 h-1/2"/>
                      <span className="sr-only">Logo</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-5 flex gap-2">
                    <Avatar className="rounded-xl w-12 h-12">
                        <AvatarImage src={Perfil} alt="Perfil" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <Link to="#" className="font-bold hover:text-red-500">Bistro of Hamburguer</Link>
                      <p className="text-red-600 text-[12px]">Premium account</p>
                    </div>
                </div>

                <nav className="grid gap-2 text-lg font-medium mt-8">
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <LayoutGrid className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Dashboard</span>
                  </Link>
                  
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <ClipboardPlus className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Report</span>
                  </Link>

                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <ShoppingBag className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Orders</span>
                  </Link>

                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <CreditCard className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Payment</span>
                  </Link>
              
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <Package className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Product</span>
                  </Link>
              
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <ShoppingCart className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Deliveries</span>
                  </Link>
              
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <Bell className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Notifications</span>
                  </Link>
              
              
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <Bolt className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Settings</span>
                  </Link>
              
                  <Link 
                    to="#"
                    className="flex items-center gap-4 px-2.5 text-red-400 hover:text-red-600"
                  >
                    <LogOut className="h-5 w-5 transition-all"/>
                    <span className="text-[15px]">Log out</span>
                  </Link>
              
                </nav>

              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
