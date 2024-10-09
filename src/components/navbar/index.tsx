import {
  Bell,
  Bolt,
  ClipboardPlus,
  CreditCard,
  LayoutGrid, Package,
  ShoppingBag,
  ShoppingCart
} from 'lucide-react';
import Desktop from './components/desktop';
import Mobile from './components/mobile';

export function Navbar({ children }: React.PropsWithChildren) {
  const options = [
    { name: 'Dashboard', url: '#', icon: <LayoutGrid className="h-5 w-5 transition-all" /> },
    { name: 'Report', url: '#', icon: <ClipboardPlus className="h-5 w-5 transition-all" /> },
    { name: 'Orders', url: '#', icon: <ShoppingBag className="h-5 w-5 transition-all" /> },
    { name: 'Payment', url: '#', icon: <CreditCard className="h-5 w-5 transition-all" /> },
    { name: 'Product', url: '#', icon: <Package className="h-5 w-5 transition-all" /> },
    { name: 'Deliveries', url: '#', icon: <ShoppingCart className="h-5 w-5 transition-all" /> },
    { name: 'Notifications', url: '#', icon: <Bell className="h-5 w-5 transition-all" /> },
    { name: 'Settings', url: '#', icon: <Bolt className="h-5 w-5 transition-all" /> },
  ];

  return (
    <div>
      
      <Desktop options={options}/>
      <Mobile options={options}/>
      
      <div>{children}</div>
    </div>
  );
}
