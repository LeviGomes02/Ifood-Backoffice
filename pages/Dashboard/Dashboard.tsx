import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {OrdersChart, RevenueChart} from '../components/Chart/chart';

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

  return (
    <div className="sm:ml-14 p-4">
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

      <section>
        <Card className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <div className='max-w-[600px] max-h-[600px]'>
            <OrdersChart />
          </div>
          <div className='max-w-[600px] max-h-[600px]'>
            <RevenueChart/>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default App;
