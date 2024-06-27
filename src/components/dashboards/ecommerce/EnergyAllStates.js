import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import EnergyComparisonAllStatesDashboardWidgetCard from '../../shared/EnergyComparisonAllStatesDashboardWidgetCard';

const EnergyAllStates = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.error.main;

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
      position:"top",
      style: {
        fontSize: '12px',
        colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
      },
      offsetY: -20,
      formatter: function (val) {
        return val.toFixed(0);
      },
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
      tickAmount: 3,
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
      name: 'Delivered',
      data: [1273, 375, 124],
      color: primary,
    },
    {
      name: 'Billed',
      data: [934, 253, 76],
      color: secondary,
    },
    {
      name: 'Collected',
      data: [500, 109, 46],
      color: tertiary,
    },
  ];

  return (
    <EnergyComparisonAllStatesDashboardWidgetCard title="Energy Comparison" sx={{ height: '250px' }}> 
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="345px" /> 
    </EnergyComparisonAllStatesDashboardWidgetCard>
  );
};

export default EnergyAllStates;