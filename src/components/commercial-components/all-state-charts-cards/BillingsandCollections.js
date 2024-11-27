import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import EnergyComparisonAllStatesDashboardWidgetCard from '../../shared/EnergyComparisonAllStatesDashboardWidgetCard';

const BillingsandCollections = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.error.main;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        endingShape: 'rounded',
        grouped: true,
        dataLabels: {
          position: 'top'
        }
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
    },
    legend: {
      show: true,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ['Kano', 'Katsina', 'Jigawa'],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: true,
        style: {
          colors: theme.palette.mode === 'dark' ? '#fff' : '#adb0bb',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  
  const seriescolumnchart = [
    {
      name: 'Revenue Billed Per Customer',
      data: [118, 55, 35],
      color: primary,
    },
    {
      name: 'Collections Per Customer',
      data: [189, 88, 56],
      color: tertiary,
    }
  ];

  return (
    <EnergyComparisonAllStatesDashboardWidgetCard title="Billings and Collections" sx={{ height: '450px' }}> 
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="330px" /> 
    </EnergyComparisonAllStatesDashboardWidgetCard>
  );
};

export default BillingsandCollections;
