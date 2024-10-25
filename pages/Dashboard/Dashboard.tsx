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
import { useEffect, useState } from 'react';

type card = {
  description: string;
  valueDay: string;
  valueWeek: string;
  valueMonth: string;
  valueYear: string;
};

function App() {
  const cards = [
    {
      description: 'Cash on Hand',
      valueDay: '$ 417,75',
      valueWeek: '$ 2.823,92',
      valueMonth: '$ 12.532,64',
      valueYear: '$ 150.317,48',
    },
    {
      description: 'Available for Withdrawal',
      valueDay: '$ 402,17',
      valueWeek: '$ 2.570,64',
      valueMonth: '$ 12.065,23',
      valueYear: '$ 145.236,91',
    },
    {
      description: 'Pending Release',
      valueDay: '$ 22,25',
      valueWeek: '$ 235,15',
      valueMonth: '$ 667,41',
      valueYear: '$ 6.283,17',
    },
    {
      description: 'Refunds and Cancellations',
      valueDay: '$ 19,11',
      valueWeek: '$ 112,78',
      valueMonth: '$ 535,10',
      valueYear: '$ 5.117,42',
    },
    {
      description: 'Sales',
      valueDay: '$ 257,71',
      valueWeek: '$ 1.853,97',
      valueMonth: '$ 7.731,46',
      valueYear: '$ 97.341,52',
    },
    {
      description: 'Billings',
      valueDay: '$ 141,17',
      valueWeek: '$ 943,42',
      valueMonth: '$ 4.235,23',
      valueYear: '$ 52.431,22',
    },
    {
      description: 'Expenses',
      valueDay: '$ 183,21',
      valueWeek: '$ 1.273,76',
      valueMonth: '$ 5.496,23',
      valueYear: '$ 68.945,18',
    },
    {
      description: 'Average Order Value',
      valueDay: '$ 95,34',
      valueWeek: '$ 97,58',
      valueMonth: '$ 96,23',
      valueYear: '$ 98,12',
    },
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

  const [filter, setFilter] = useState('month');

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  function getFilterValue(card: card) {
    switch(filter){
      case "day": return card.valueDay;
      case "week": return card.valueWeek;
      case "month": return card.valueMonth;
      case "year": return card.valueYear;
      default: return null;
    }
  }

  return (
    <div className="sm:ml-14 p-4">
      <section className="grid sm:grid-cols-3 mb-16 mt-2 items-center max-sm:gap-6">
        <div>
          <p className="text-2xl font-bold max-sm:text-center">Dashboard</p>
        </div>
        <div>
          <Input type="search" placeholder="Search" className="drop-shadow-lg" />
        </div>
        <div>
          <RadioGroup
            value={filter}
            className="flex justify-center items-center"
          >
            {options.map((element, index) => (
              <div className="flex items-center space-x-2 hover:text-red-500 " key={index} onClick={() => setFilter(element.id)}>
                <RadioGroupItem value={element.id} id={element.id} />
                <Label htmlFor={element.id} >{element.name}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4  gap-4">
        {cards.map((element, index) => (
          <Card className="hover:[box-shadow:0_4px_8px_gray]" key={index}>
            <CardContent className="text-center p-2">
              <CardDescription>{element.description}</CardDescription>
              <CardTitle className="text-[19px]">{getFilterValue(element)}</CardTitle>
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
              <div className="flex p-2 max-sm:items-center max-sm:justify-center border-b-2 hover:bg-gray-200 transition-colors duration-400" key={index}>
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
