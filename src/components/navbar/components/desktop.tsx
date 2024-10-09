import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Profile from '/img/navbar/bistro-ouvidor.jpg';
import Icon from '/img/navbar/ifood-icon.png';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
interface DesktopProps {
  options: { name: string; url: string; icon: JSX.Element }[];
}

export default function Desktop({options}:DesktopProps ) {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-2 px-2 py-5">
        <TooltipProvider>
          <div>
            <Avatar className="rounded-xl">
              <AvatarImage src={Icon} />
              <AvatarFallback>Ifood</AvatarFallback>
            </Avatar>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="#" className="flex h-10 w-10 shrink-0 items-center justify-center mt-6">
                <img src={Profile} alt="" className="h-10 w-10 rounded-xl justify-center" />
                <span className="sr-only">Profile</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-bold">
              Profile
            </TooltipContent>
          </Tooltip>

          {options.map((element, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={element.url}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-gray-800 hover:text-red-500"
                >
                  {element.icon}
                  <span className="sr-only">{element.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-bold">
                {element.name}
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="fixed bottom-4 flex h-9 w-9 shrink-0 items-center justify-center text-gray-800 hover:text-red-500"
              >
                <LogOut className="h-5 w-5 transition-all" />
                <span className="sr-only">Log out</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-bold">
              Log out
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
