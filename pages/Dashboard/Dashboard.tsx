import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { OrdersChart, RevenueChart } from '../components/Chart/chart';
import TableDashboard from '../components/Tables/dashboard';
import Fries from '../../public/img/products/fries.png';
import Hamburger from '../../public/img/products/hamburger.png';
import XBacon from '../../public/img/products/x-bacon.png';
import MilkShacke from '../../public/img/products/milkshake.png';
import Stars from '../components/Stars/stars';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '../../src/components/ui/radio-group';
import { Label } from '../../src/components/ui/label';
import { ScrollArea } from '../../src/components/ui/scroll-area';

function App() {
  const cards = [
    { descripton: 'Cash on Hand', value: '$ 12.532,64' },
    { descripton: 'Available for Withdrawal', value: '$ 12.065,23' },
    { descripton: 'Pending Release', value: '$ 667,41' },
    { descripton: 'Refunds and Cancellations', value: '$ 535,10' },
    { descripton: 'Sales', value: '$ 7.731,46' },
    { descripton: 'Billings', value: '$ 4.235,23' },
    { descripton: 'Expenses', value: '$ 5.496,23' },
    { descripton: 'Average Order Value', value: '$ 96,23' },
  ];

  const productsCard = [
    { name: 'Bourbon BBQ Deluxe', units: '2472', vlaue: '87,90', image: Hamburger, rating: 5 },
    { name: 'Chocolate Heaven', units: '2455', vlaue: '47,90', image: MilkShacke, rating: 5 },
    { name: 'King Mont Bacon', units: '2410', vlaue: '62,90', image: XBacon, rating: 4.5 },
    { name: 'Spicy Fries', units: '2380', vlaue: '42,90', image: Fries, rating: 4 },
  ];

  const options = [
    { name: 'Day', id: 'day' },
    { name: 'Week', id: 'week' },
    { name: 'Month', id: 'month' },
    { name: 'Year', id: 'year' },
  ];

  return (
    <div className="sm:ml-14 p-4">
      <section className="grid grid-cols-3 mb-16 mt-2 items-center">
        <div>
          <p className="text-2xl font-bold">Dashboard</p>
        </div>
        <div>
          <Input type="search" placeholder="Search" className="drop-shadow-lg" />
        </div>
        <div>
          <RadioGroup defaultValue="month" className="flex justify-center items-center">
            {options.map((element, index) => (
              <div className="flex items-center space-x-2 hover:text-red-500 " key={index}>
                <RadioGroupItem value={element.id} id={element.id} />
                <Label htmlFor={element.id}>{element.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4  gap-4">
        {cards.map((element, index) => (
          <Card className="hover:[box-shadow:0_4px_8px_gray]" key={index}>
            <CardContent className="text-center p-2">
              <CardDescription>{element.descripton}</CardDescription>
              <CardTitle className="text-[19px]">{element.value}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8">
        <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="max-w-[600px] max-h-[600px]">
            <OrdersChart />
          </div>
          <div className="max-w-[600px] max-h-[600px]">
            <RevenueChart />
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="max-h-[530px] overflow-y-hidden">
            <CardTitle className="text-center text-lg border-b-2 p-4">Recent Orders</CardTitle>
            <ScrollArea className="h-[600px]">
              <TableDashboard />
            </ScrollArea>
          </Card>

          <Card>
            <CardTitle className="text-center text-lg border-b-2 p-4">Most Ordered Products</CardTitle>

            {productsCard.map((element, index) => (
              <div className="flex p-2 max-sm:items-center max-sm:justify-center border-b-2" key={index}>
                <img className=" h-full max-sm:h-20" src={element.image} alt="" />

                <div className="flex flex-col">
                  <div className="flex">
                    <div className="ms-4 flex">
                      <CardTitle className="text-sm sm:text-lg">{element.name}</CardTitle>
                    </div>
                    <div className="flex ms-2 text-yellow-500 items-center">{Stars(element.rating)}</div>
                  </div>
                  <div className="flex ms-4 gap-20">
                    <div>
                      <CardDescription className="mt-1 sm:mt-4 text-xs">Units Sold</CardDescription>
                      <CardTitle className="text-xl sm:text-lg">{element.units}</CardTitle>
                    </div>
                    <div className="ms-2">
                      <CardDescription className="mt-1 sm:mt-4 text-xs">Price</CardDescription>
                      <CardTitle className="text-xl sm:text-lg">$ {element.vlaue}</CardTitle>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;
