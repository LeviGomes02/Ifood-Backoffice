import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Profile from '/img/navbar/bistro-ouvidor.jpg';
import Logo from '/img/navbar/ifood-logo-14.png';
interface MobileProps {
  options: { name: string; url: string; icon: JSX.Element }[];
}

export default function Mobile({ options }: MobileProps) {
  return (
    <div className="sm:hidden flex w-full bg-muted/50 border-b">
      <div className="flex items-center ">
        <h1 className="text-lg font-bold ms-3 ">Dashboard</h1>
      </div>
      <div className="flex flex-col ms-auto">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu />
                <span className="sr-only">Abrir</span>
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader className="p-2">
                <SheetTitle>
                  <Link to="#" className="flex justify-center">
                    <img src={Logo} alt="Ifood logo" className="w-1/2 h-1/2" />
                    <span className="sr-only">Logo</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-5 flex gap-2">
                <Avatar className="rounded-xl w-12 h-12">
                  <AvatarImage src={Profile} alt="Profile" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <Link to="#" className="font-bold hover:text-red-500">
                    Burger Bistro
                  </Link>
                  <p className="text-gray-800 text-[12px]">Premium account</p>
                </div>
              </div>

              <nav className="grid gap-2 text-lg font-medium mt-8">
                {options.map((element, index) => (
                  <Link
                    key={index}
                    to={element.url}
                    className="flex items-center gap-4 px-2.5 text-gray-800 hover:text-red-600"
                  >
                    {element.icon}
                    <span className="text-[15px]">{element.name}</span>
                  </Link>
                ))}
              </nav>
              <SheetFooter>
                <Link to="#" className="fixed bottom-4 flex items-center gap-4 px-2.5 text-gray-800 hover:text-red-600">
                  <LogOut className="h-5 w-5 transition-all" />
                  <span className="text-[15px]">Log out</span>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
