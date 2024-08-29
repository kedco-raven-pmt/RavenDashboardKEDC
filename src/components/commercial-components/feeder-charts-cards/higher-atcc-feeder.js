import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../shared/DashboardCard';

const HighestATCCFeeder = () => {
  const theme = useTheme();

  // Sort data in descending order
  const data = [
    { category: ['11KV', 'Dr Bala'], value: 94 },
    { category: ["11KV", "Noman's Land"], value: 85 },
    { category: ['11KV', 'T/Wada'], value: 83 },
    { category: ['11KV', 'Abuja'], value: 81.6 },
    { category: ['11KV', 'Yusuf'], value: 80 },
  ];

  // Generate gradient colors
  const generateColors = (count) => {
    const baseColor = '#FF0000'; // Red
    return Array.from({ length: count }, (_, i) => {
      const opacity = 1 - (i / (count - 1)) * 0.6; // Adjust 0.6 to control gradient intensity
      return `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    });
  };

  const colors = generateColors(data.length);

  const bottomfeederscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
      toolbar: { show: false },
      height: 280,
    },
    colors: colors,
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        fontSize: '10px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      show: false,
    },
    xaxis: {
      categories: data.map(item => item.category),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#304758',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: (val) => `${val}%`,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  const bottomfeedersseries = [
    {
      name: '',
      data: data.map(item => item.value),
    },
  ];

  return (
    <DashboardCard title="Least 5 Performing Feeders - ATC&C">
      <Chart 
        options={bottomfeederscolumnchart} 
        series={bottomfeedersseries} 
        type="bar" 
        height="280px" 
      />
    </DashboardCard>
  );
};

export default HighestATCCFeeder;