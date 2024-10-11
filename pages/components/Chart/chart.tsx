import { Bar } from 'react-chartjs-2'; // Substituir `Line` por `Bar`
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // Adicionar `BarElement`
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes necessários para o gráfico de barras
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // Registra `BarElement`
  Title,
  Tooltip,
  Legend
);

const OrdersChart = () => {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
    datasets: [
      {
        label: 'Orders',
        data: [350, 320, 400, 450, 500, 480, 520, 530, 490, 510],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: 'Completed',
        data: [320, 290, 360, 410, 460, 434, 460, 500, 456, 420],
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 75, 0.6)",
      },
      {
        label: 'Canceled',
        data: [30, 30, 40, 40, 40, 44, 60, 30, 34, 40],
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };


  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
    plugins: {
      legend: {
        position: 'top' as const, 
      },
      title: {
        display: true,
        text: 'Order Charts', 
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
    datasets: [
      {
        label: 'Balance',
        data: [16.0, 14.5, 18.0, 20.5, 23.0, 22.0, 24.0, 24.5, 22.5, 23.5],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: 'Profit',
        data: [6.4, 5.8, 7.2, 8.2, 9.2, 8.8, 9.6, 9.8, 9.0, 9.4],
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 75, 0.6)",
      },
      {
        label: 'Expenses',
        data: [9.6, 8.7, 10.8, 12.3, 13.8, 13.2, 14.4, 14.7, 13.5, 14.1],
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };


  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
    plugins: {
      legend: {
        position: 'top' as const, 
      },
      title: {
        display: true,
        text: 'Revenue Chart', 
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export {OrdersChart, RevenueChart};






