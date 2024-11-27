import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import EnergyComparisonAllStatesDashboardWidgetCard from '../../shared/EnergyComparisonAllStatesDashboardWidgetCard';

const StaffAndGenderCountState = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.error.main;
  const quaternary = theme.palette.warning.main;

  const formatValue = (value) => {
    return `₦${(value / 1000).toFixed(0)}k`;
  };

  const optionsColumnChart = {
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
      position: "top",
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

  const seriesColumnChart = [
    {
      name: 'Finance',
      data: [150, 90, 60],
      color: primary,
    },
    {
      name: 'Technical',
      data: [200, 120, 80],
      color: secondary,
    },
    {
      name: 'Admin',
      data: [150, 90, 60],
      color: quaternary,
    },
    {
      name: 'Commercial',
      data: [100, 50, 50],
      color: tertiary,
    },
  ];

  const optionsGenderChart = {
    ...optionsColumnChart,
    xaxis: {
      categories: ['Kano', 'Katsina', 'Jigawa'],
    },
  };

  const seriesGenderChart = [
    {
      name: 'Male',
      data: [400, 200, 150],
      color: primary,
    },
    {
      name: 'Female',
      data: [200, 150, 100],
      color: secondary,
    },
  ];

  return (
    <EnergyComparisonAllStatesDashboardWidgetCard title="Staff and Gender Distribution" sx={{ height: '500px' }}>
      <div style={{ height: '250px' }}>
        <Chart options={optionsColumnChart} series={seriesColumnChart} type="bar" height="100%" />
      </div>
      <div style={{ height: '250px' }}>
        <Chart options={optionsGenderChart} series={seriesGenderChart} type="bar" height="100%" />
      </div>
    </EnergyComparisonAllStatesDashboardWidgetCard>
  );
};

export default StaffAndGenderCountState;
