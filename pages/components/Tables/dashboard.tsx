import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../src/components/ui/table';

export default function TableDashboard() {
  const table = [
    { id: '364', quantity: 3, value: 'R$158,24', status: 'Pending' },
    { id: '368', quantity: 5, value: 'R$234,20', status: 'Pending' },
    { id: '612', quantity: 1, value: 'R$87,90', status: 'Completed' },
    { id: '621', quantity: 2, value: 'R$179,90', status: 'Canceled' },
    { id: '724', quantity: 5, value: 'R$245,50', status: 'Completed' },
    { id: '588', quantity: 3, value: 'R$184,40', status: 'Completed' },
    { id: '262', quantity: 8, value: 'R$457,20', status: 'Completed' },
    { id: '954', quantity: 5, value: 'R$264,90', status: 'Completed' },
    { id: '632', quantity: 2, value: 'R$129,94', status: 'Completed' },
    { id: '678', quantity: 1, value: 'R$90,20', status: 'Completed' },
    { id: '262', quantity: 2, value: 'R$135,50', status: 'Canceled' },
  ];

  function getColor(status: string) {
    switch (status) {
      case 'Pending':
        return 'text-yellow-500';
        break;
      case 'Completed':
        return 'text-green-500';
        break;
      case 'Canceled':
        return 'text-red-500';
        break;
      default:
        return null;
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Id</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Value</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center">
          {table.map((element, index) => (
            <TableRow key={index}>
              <TableCell className="p-2">{element.id}</TableCell>
              <TableCell className="p-2">{element.quantity}</TableCell>
              <TableCell className="p-2">{element.value}</TableCell>
              <TableCell className={`p-2 ${getColor(element.status)}`}>{element.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
